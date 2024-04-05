var addToDoButton = document.getElementById("addToDo");
var toDoContainer = document.getElementById("toDoContainer");
var inputField = document.getElementById("inputField");

addToDoButton.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  var itemValue = inputField.value;
  paragraph.innerText = itemValue;
  toDoContainer.appendChild(paragraph);
  inputField.value = "";
  document.cookie = "item = " + itemValue;
  alert(document.cookie);
});
