let data = [
  "Tarea de Diagramacion",
  "Propuesta de Diseño Web",
  "Ir a clase",
  "Almorzar con mis amigos",
  "Ir al Gimnasio",
  "Leer twilight",
];

// Getting an element from the html
let list = document.getElementById("myList");
data.forEach((item) => {
  // Create Element
  let li = document.createElement("li");
  li.textContent = item;

  // Add Element
  list.appendChild(li);

  // Event Listener: listen to event "click", when this happens, call the function "completarItem".
  li.addEventListener("click", (event) => completarItem(event));
});

// Function called when the event "clicked" its active.
function completarItem(event) {
  console.log(event.target);

  // Do a forEach loop to iterate over the items in the list and change the style...
  list.style.textDecorationLine = "line-through	";
}
