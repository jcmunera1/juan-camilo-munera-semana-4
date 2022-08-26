let data = [
  "Tarea de Diagramacion",
  "Propuesta de Diseño Web",
  "Ir a clase",
  "Almorzar con mis amigos",
  "Ir al Gimnasio",
  "Leer twilight",
];
let list = document.getElementById("myList");
data.forEach((item) => {
  let li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
  li.addEventListener("click", () => completarItem());
});
