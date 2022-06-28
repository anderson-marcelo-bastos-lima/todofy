/**
List of functions:

1. Add a new task with localStorage.

2. Load the tasks storaged in the localStorage after the DOM  content is loaded.

3. Function that detects whether localStorage is both supported and available.

4. Check localStorage before add task.

5. Check localStorage before load tasks.

 */




/**
 * 1. Add a new task with localStorage.
 */
function addTaskStorage() {

  //Step 1: Capture the user input from the input field
  const inputValue = document.getElementById("field-task").value;
  //Step 2: Logic validation of the Input field before of the addition of the task.
  if (inputValue === '') {
    // To display the eror message.
    const messageDiv = document.getElementById('show-message');
    let errorMessage = ' You forget to write the task name.\n';
    messageDiv.innerText = errorMessage;
    return;
  } else if (inputValue.length <= 2) {
    // To display the eror message.
    const messageDiv = document.getElementById('show-message');
    let errorMessage = ' The name of the task must be bigger than two characters.\n';
    messageDiv.innerText = errorMessage;
    return;
  } else {
    //Step 1: Quantity of task storaged plus one.
    const primaryKey = localStorage.length - 1;
    //Step 2: Create the localStorage with primarykey and inputValue.
    localStorage.setItem(primaryKey.toString(), inputValue);
    //Step 3: Create a new div element
    const divElm = document.createElement("div");
    //Step 4: Creates a new text node with the user input.
    const t = document.createTextNode(inputValue);
    //Step 5: Sets the value of the CSS class attribute of the specified element.
    divElm.className = "task";
    //Step 6: Adds a node to the end of the list of children of a specified parent node.
    divElm.appendChild(t);
    //Step 7:  Adds a node to the end of the list of children of a specified parent node.
    document.getElementById("task-list").appendChild(divElm);
    //Step 8: Clear the input field.
    document.getElementById("field-task").value = "";
    //Step 9: Create a span element
    const span = document.createElement("SPAN");
    //Step 10: Creates a new text node with the unicode character.
    const txt = document.createTextNode(" " + "\u2716");
    //Step 11: Sets the value of the CSS class attribute on the specified element.
    span.className = "close";
    //Step 12: Adds a node to the end of the list of children of a specified parent node.
    span.appendChild(txt);
    //Step 13: Adds a node to the end of the list of children of a specified parent node.
    divElm.appendChild(span);
    //Step 14: Capture the array of the elements with the class "close".
    const deleteTask = document.getElementsByClassName("close");
    //Step 15: Add a onclick property on every element with the class close.
    for (let y = 0; y < deleteTask.length; y++) {
      deleteTask[y].onclick = function () {
        for (let m = 0; m < localStorage.length; m++) {
          if (localStorage.getItem(localStorage.key(m)) === this.parentElement.textContent.replace(this.textContent, "")) {
            localStorage.removeItem(localStorage.key(m));
            this.parentElement.remove();
          }
        }
      }
    }
  }

}




/**
 * 2. Load the tasks storaged in the localStorage after the DOM  content is loaded.
 */
document.addEventListener('DOMContentLoaded', function () {

  checkStorageBeforeLoadTasks()

});





/**
 * 3. Function that detects whether localStorage is both supported and available.
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
* 4. Check localStorage before add task.
*/
function checkStorageBeforeAddTask() {
  if (storageAvailable('localStorage')) {
    addTaskStorage();
  }
  else {
    alert('The feature is not supported or is not available in this browser.');
  }
}




/**
* 5. Check localStorage before load tasks.
*/
function checkStorageBeforeLoadTasks() {
  if (storageAvailable('localStorage')) {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) === 'username' || localStorage.key(i) === 'password') {
        //console.log('localStorage.key(' + i + ') = ' + localStorage.key(i));
      } else {
        //Step 1: Get the task name stored;
        let taskStored = localStorage.getItem(localStorage.key(i));
        //Step 2: Create a new div element
        const divElm = document.createElement("div");
        //Step 3: Creates a new text node with the user input.
        const t = document.createTextNode(taskStored);
        //Step 4: Sets the value of the CSS class attribute of the specified element.
        divElm.className = "task";
        //Step 5: Adds a node to the end of the list of children of a specified parent node.
        divElm.appendChild(t);
        //Step 6: Adds a node to the end of the list of children of a specified parent node.
        document.getElementById("task-list").appendChild(divElm);
        //Step 7: Clear the input field.
        document.getElementById("field-task").value = "";
        //Step 8: Create a span element
        var span = document.createElement("SPAN");
        //Step 9: Creates a new text node with the unicode character.
        var txt = document.createTextNode(" " + "\u2716");
        //Step 10: Sets the value of the CSS class attribute on the specified element.
        span.className = "close";
        //Step 11: Adds a node to the end of the list of children of a specified parent node.
        span.appendChild(txt);
        //Step 12: Adds a node to the end of the list of children of a specified parent node.
        divElm.appendChild(span);
        //Step 13: Capture the array of the elements with the class "close".
        const deleteTask = document.getElementsByClassName("close");
        //Step 14: Add a onclick property on every element with the class close.
        for (let y = 0; y < deleteTask.length; y++) {
          deleteTask[y].onclick = function () {
            for (let m = 0; m < localStorage.length; m++) {
              if (localStorage.getItem(localStorage.key(m)) === this.parentElement.textContent.replace(this.textContent, "")) {
                localStorage.removeItem(localStorage.key(m));
                this.parentElement.remove();
              }
            }
          }
        }
      } // if - keys
    } // for - localStorage.length
  } // if - storageAvailable
} // function