const tasks = [
  { text: "Tarea de Diagramacion", done: false },
  { text: "Propuesta de Diseño Web", done: false },
  { text: "Ir a clase", done: false },
  { text: "Almorzar con mis amigos", done: false },
  { text: "Ir al Gimnasio", done: false },
  { text: "Leer twilight", done: false },
  { text: "Ir al estadio", done: false },
  { text: "Meditar", done: true },
];

// Getting an element from the html
const allTasksHtml = document.getElementById("tasks");
const pendingHtml = document.getElementById("pending");
const completedHtml = document.getElementById("completed");

function createTasks() {
  //Empty arrays to avoid repeated elements
  allTasksHtml.innerHTML = "";
  pendingHtml.innerHTML = "";
  completedHtml.innerHTML = "";

  //For each string item in the tasksArray...
  tasks.forEach((task) => {
    // Create the variable li and assign the textContent to the items
    const elem = document.createElement("li");
    elem.textContent = task.text;
    elem.className = task.done ? "checked" : "unchecked";
    // Event Listener: listen to event "click", when this happens, call the function "completeItem".
    elem.addEventListener("click", () => crossItem(task));
    //Create cost cloneLi to store the items
    const cloneElem = elem.cloneNode(true);
    //Add event listener to cloneLi when clicked
    cloneElem.addEventListener("click", () => crossItem(task));

    allTasksHtml.append(elem);

    if (task.done) {
      completedHtml.append(cloneElem);
    } else {
      pendingHtml.append(cloneElem);
    }
  });
}
createTasks();
// Function called when the event "clicked" its active.
function crossItem(item) {
  item.done = !item.done;
  createTasks();
}
