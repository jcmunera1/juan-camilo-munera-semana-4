let tasksArray = [
  "Tarea de Diagramacion",
  "Propuesta de Diseño Web",
  "Ir a clase",
  "Almorzar con mis amigos",
  "Ir al Gimnasio",
  "Leer twilight",
  "Ir al estadio",
  "Meditar",
];
let pendingArray = [
  "Tarea de Diagramacion",
  "Propuesta de Diseño Web",
  "Ir a clase",
  "Almorzar con mis amigos",
  "Ir al Gimnasio",
  "Leer twilight",
  "Ir al estadio",
  "Meditar",
];
let completedArray = [];

// Getting an element from the html
let tasks = document.getElementById("tasks");
let pending = document.getElementById("pending");
let completed = document.getElementById("completed");

//For each string item in the tasksArray...
tasksArray.forEach((item) => {
  // Create the variable li and assign the textContent to the items
  let li = document.createElement("li");
  li.textContent = item;
  li.className = "tasks-elements";
  console.log(li);
  // Add var li to the list
  tasks.appendChild(li);
  // Event Listener: listen to event "click", when this happens, call the function "completeItem".
  li.addEventListener("click", (event) => crossItem(event));
  // Function called when the event "clicked" its active.
  function crossItem(event) {
    console.log(event.target);
    // Do a forEach loop to iterate over the items in the list and change the style...
    li.style.textDecorationLine = "line-through	";
  }
});
pendingArray.forEach((item) => {
  let li = document.createElement("li");
  li.textContent = item;
  li.className = "pending-elements";
  pending.appendChild(li);
  console.log(li);
});
completedArray.forEach((item) => {
  let li = document.createElement("li");
  li.textContent = item;
  li.className = "completed-elements";
  completed.appendChild(li);
  console.log(li);
});
