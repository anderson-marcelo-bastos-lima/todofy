/**

List of functions:

1. Add a new task.

2. Add a new tak with objected-oriented paradigm.

3. Add a new task with localStorage.

4. Load the tasks storaged in the localStorage after the DOM  content is loaded.

5. Function that detects whether localStorage is both supported and available.

6. Check localStorage before add task.

7. Check localStorage before load tasks.

*/





/**
 * 1. Add a new task.
 */
function addTask() {

  //Step 1: Create a new div element
  const divElm = document.createElement("div");
  //Step 2: Capture the user input from the input field
  const inputValue = document.getElementById("field-task").value;
  //Step 3: Creates a new text node with the user input.
  const t = document.createTextNode(inputValue);
  //Step 4: Sets the value of the CSS class attribute of the specified element.
  divElm.className = "task";
  //Step 5: Adds a node to the end of the list of children of a specified parent node.
  divElm.appendChild(t);
  //Step 6: Logic validation of the Input field before of the addition of the task.
  if (inputValue === '') {
    // Instructs the browser to display a dialog with an optional message, and to wait until the user dismisses the dialog.
    alert("You must write something!");
  } else if (inputValue.length <= 2) {
    // Instructs the browser to display a dialog with an optional message, and to wait until the user dismisses the dialog.
    alert("You must write a name bigger than 2 letters!");
  } else {
    // Adds a node to the end of the list of children of a specified parent node.
    document.getElementById("task-list").appendChild(divElm);
  }
  //Step 7: Clear the input field.
  document.getElementById("field-task").value = "";
  //Step 8: Create a span element
  const span = document.createElement("SPAN");
  //Step 9: Creates a new text node with the unicode character.
  const txt = document.createTextNode(" " + "\u2716");
  //Step 10: Sets the value of the CSS class attribute on the specified element.
  span.className = "close";
  //Step 11: Adds a node to the end of the list of children of a specified parent node.
  span.appendChild(txt);
  //Step 12: Adds a node to the end of the list of children of a specified parent node.
  divElm.appendChild(span);
  //Step 13: Capture the array of the elements with the class "close".
  const close = document.getElementsByClassName("close");
  //Step 14: Add a onclick property on every element with the class close.
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.remove();
    }
  }

}





/**
 * 2. Add a new tak with Object-oriented programming (OOP).
 */
function addTaskOO() {

  //Step 1: Define the Task class with getters, setters and methods.
  class Task {

    constructor(name) {
      this._name = name;
    }

    get name() {
      return this._name;
    }

    set name(value) {
      if (value.length === '') {
        alert("Type the name of the task.");
        return;
      } else if (value.length <= 2) {
        alert("Name is too short.");
        return;
      } else {
        this._name = value;
      }
    }

    printHTML() {
      //Step 1: Create a new div element
      const divElm = document.createElement("div");
      //Step 2: Creates a new text node with the user input.
      const t = document.createTextNode(this._name);
      //Step 3: Sets the value of the CSS class attribute of the specified element.
      divElm.className = "task";
      //Step 4: Adds a node to the end of the list of children of a specified parent node.
      divElm.appendChild(t);
      //Step 5:  Adds a node to the end of the list of children of a specified parent node.
      document.getElementById("task-list").appendChild(divElm);
      //Step 6: Clear the input field.
      document.getElementById("field-task").value = "";
      //Step 7: Create a span element
      const span = document.createElement("SPAN");
      //Step 8: Creates a new text node with the unicode character.
      const txt = document.createTextNode(" " + "\u2716");
      //Step 9: Sets the value of the CSS class attribute on the specified element.
      span.className = "close";
      //Step 10: Adds a node to the end of the list of children of a specified parent node.
      span.appendChild(txt);
      //Step 11: Adds a node to the end of the list of children of a specified parent node.
      divElm.appendChild(span);
      //Step 12: Capture the array of the elements with the class "close".
      const close = document.getElementsByClassName("close");
      //Step 13: Add a onclick property on every element with the class close.
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
          let div = this.parentElement;
          div.remove();
        }
      }
    }

  }

  //Step 2: Capture the user input from the input field
  const inputValue = document.getElementById("field-task").value;

  //Step 3: Logic validation of the Input field
  if (inputValue === '') {
    // Instructs the browser to display a dialog with an optional message, and to wait until the user dismisses the dialog.
    alert("You must write something!");
  } else if (inputValue.length <= 2) {
    // Instructs the browser to display a dialog with an optional message, and to wait until the user dismisses the dialog.
    alert("You must write a name bigger than 2 letters!");
  } else {
    //Create a new object instance of the class Task with the argument typed by the user.
    let newTask = new Task(inputValue);
    //Call the method printHTML of the newTask.
    newTask.printHTML();
  }

}





/**
 * 3. Add a new task with localStorage.
 */
function addTaskStorage() {

  //Step 1: Capture the user input from the input field
  const inputValue = document.getElementById("field-task").value;
  //Step 2: Logic validation of the Input field before of the addition of the task.
  if (inputValue === '') {
    // Instructs the browser to display a dialog with an optional message, and to wait until the user dismisses the dialog.
    alert("You must write something!");
    return;
  } else if (inputValue.length <= 2) {
    // Instructs the browser to display a dialog with an optional message, and to wait until the user dismisses the dialog.
    alert("You must write a name bigger than 2 letters!");
    return;
  } else {
    //Step 1: Quantity of task storaged plus one.
    const primaryKey = localStorage.length + 1;
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
    const close = document.getElementsByClassName("close");
    //Step 15: Add a onclick property on every element with the class close.
    for (let i = 0; i < close.length; i++) {
      let primaryKey = i + 1;
      close[i].onclick = function () {
        localStorage.removeItem(primaryKey.toString());
        let div = this.parentElement;
        div.remove();
      }
    }
  }

}





/**
 * 4. Load the tasks storaged in the localStorage after the DOM  content is loaded.
 */
document.addEventListener('DOMContentLoaded', function () {

  checkStorageBeforeLoadTasks()

});





/**
 * 5. Function that detects whether localStorage is both supported and available.
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
* 6. Check localStorage before add task.
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
* 7. Check localStorage before load tasks.
*/
function checkStorageBeforeLoadTasks() {
  if (storageAvailable('localStorage')) {

    for (let i = 1; i <= localStorage.length; i++) {
      //Step 1: Get the task name stored;
      let taskStored = localStorage.getItem(i);
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
      const close = document.getElementsByClassName("close");
      //Step 14: Add a onclick property on every element with the class close.
      for (let i = 0; i < close.length; i++) {
        let primaryKey = i + 1;
        close[i].onclick = function () {
          localStorage.removeItem(primaryKey.toString());
          let div = this.parentElement;
          div.remove();
        }
      }
    }

  }
}