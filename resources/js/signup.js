/**

List of functions:

1. Validade the fields of the Sing Up form.

2. Function that detects whether localStorage is both supported and available.

3. Verify if the localStorage feature is available after the DOM  content is loaded.

*/





/**
* 1. Validade the fields of the Sing Up form.
*/
document.querySelector('#signup-form').addEventListener('submit', function (event) {


  // To display the message.
  const messageDiv = document.getElementById('show-message');
  // To validate the username.
  const username = document.getElementById('username-field');
  // To validate the first password field.
  const firstPassword = document.getElementById('first-password');
  // To confirm the first password field with the second password field.
  const secondPassword = document.getElementById('second-password');

  // All errors concatenate in this string.
  let errorMessage = '';

  // Verify if the first letter of the username is capitalized.
  const firstLetter = username.value[0];
  if (firstLetter !== firstLetter.toUpperCase()) {
    errorMessage += ' The first letter of username must be uppercase.\n';
  }
  // Verify if the username contains at least one digit.
  const flagUsernameDigit = /\d/.test(username.value);
  if (!flagUsernameDigit) {
    errorMessage += 'Username must include at least one digit.\n';
  }
  // Verify if the password is between 6 and 20 characters.
  const noPasswordLength = (firstPassword.value.length < 6 || firstPassword.value.length > 20);
  if (noPasswordLength === true) {
    errorMessage += ' The password should be within 6 to 20 characters.\n';
  }
  // Verify if the password contains at least one uppercase character.
  const flagPasswordUppercase = /[A-Z]/.test(firstPassword.value);
  if (flagPasswordUppercase === false) {
    errorMessage += ' The password should contain at least one uppercase character.\n';
  }
  // Verify if the two passwords are the same.
  if (firstPassword.value !== secondPassword.value) {
    errorMessage += 'The passwords do not match.\n';
  }

  // If there are errors show the message if not redirect to the login page.
  if (errorMessage !== "") {
    messageDiv.innerText = errorMessage;
    // Prevent the form button from submitting, before fixing the issues.
    event.preventDefault();
  } else {
    // Prevent the form button from submitting.
    event.preventDefault();
    // Stores the username.
    localStorage.setItem('username', username.value);
    // Stores the password.
    localStorage.setItem('password', firstPassword.value);
    // Redirect to the login page.
    window.location.href = 'login.html';
  }


}, false);





/**
 * 2. Function that detects whether localStorage is both supported and available.
 */
function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch (e) {
    return e instanceof DOMException && (
      // everything except Firefox
      e.code === 22 ||
      // Firefox
      e.code === 1014 ||
      // test name field too, because code might not be present
      // everything except Firefox
      e.name === 'QuotaExceededError' ||
      // Firefox
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      (storage && storage.length !== 0);
  }
}





/**
 * 3. Verify if the localStorage feature is available after the DOM  content is loaded.
 */
document.addEventListener('DOMContentLoaded', function () {

  if (!storageAvailable('localStorage')) {
    const messageDiv = document.getElementById('show-message');
    let availabilityMessage = 'The feature required for the application to work is not supported or available in this browser.';
    messageDiv.innerText = availabilityMessage;
  }

});