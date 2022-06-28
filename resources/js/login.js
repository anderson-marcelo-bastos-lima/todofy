/**

List of functions:

1. Validade the fields of the Log In form.

2. Function that detects whether localStorage is both supported and available.

3. Verify if the localStorage feature is available after the DOM  content is loaded.

*/





/**
* 1. Validade the fields of the Log In form.
*/
document.querySelector('#login-form').addEventListener('submit', function (event) {


  // To display the message.
  const messageDiv = document.getElementById('show-message');
  // Capture the value of the field username.
  const username = document.getElementById('username-field');
  // Capture the value of the field password.
  const password = document.getElementById('password-field');
  // Capture the value of the stored username.
  const storagedUsername = localStorage.getItem('username');
  // Capture the value of the stored password.
  const storagedPassword = localStorage.getItem('password');

  // All errors concatenate in this string.
  let errorMessage = '';

  if (username.value !== storagedUsername) {
    errorMessage = ' The details entered are not valid. Please re-enter your details.\n';
    errorMessage += ' Note, username and password are case sensitive - be sure to use correct upper and lower case.\n';
    messageDiv.innerText = errorMessage;
    // Prevent the form button from submitting.
    event.preventDefault();
  } else if (password.value !== storagedPassword) {
    errorMessage = ' The details entered are not valid. Please re-enter your details.\n';
    errorMessage += ' Note, username and password are case sensitive - be sure to use correct upper and lower case.\n';
    messageDiv.innerText = errorMessage;
    // Prevent the form button from submitting.
    event.preventDefault();
  } else {
    // Prevent the form button from submitting.
    event.preventDefault();
    // Redirect to the todofy page.
    window.location.href = 'todofy.html';
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