const tasksArray = [
  { text: "Tarea de Diagramacion", done: true },
  { text: "Propuesta de Diseño Web", done: true },
  { text: "Ir a clase", done: true },
  { text: "Almorzar con mis amigos", done: true },
  { text: "Ir al Gimnasio", done: true },
  { text: "Leer twilight", done: true },
  { text: "Ir al estadio", done: false },
  { text: "Meditar", done: true },
];
const pendingArray = tasksArray.filter((task) => !task.done);
const completedArray = tasksArray.filter((task) => task.done);

// Getting an element from the html
const tasks = document.getElementById("tasks");
const pending = document.getElementById("pending");
const completed = document.getElementById("completed");

console.log(pendingArray);
console.log(completedArray);

//For each string item in the tasksArray...
tasksArray.forEach((item) => {
  // Create the variable li and assign the textContent to the items
  const li = document.createElement("li");
  li.textContent = item.text;
  li.className = "tasks-elements";
  li.setAttribute("id", "item");

  //console.log(li);
  // Add var li to the list
  tasks.appendChild(li);
  // Event Listener: listen to event "click", when this happens, call the function "completeItem".
  li.addEventListener("click", (event) => crossItem(event));
  // Function called when the event "clicked" its active.
  function crossItem() {
    //console.log(event.target);
    // change the style...
    li.style.textDecorationLine = "line-through	";
  }
});
