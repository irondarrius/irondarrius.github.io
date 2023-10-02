document.querySelector("#input").addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
      const input = document.querySelector("#input");
      addItem(input.value);
    }
  });

document.querySelector("#add_item").addEventListener("click", () => {
  const input = document.querySelector("#input");
  addItem(input.value);
});

addItem = (input) => {
  const item = document.createElement("div");
  const checkIcon = document.createElement("i");
  const trashIcon = document.createElement("i");
  const text = document.createElement("p");

  item.className = "item";
  
  checkIcon.className = "fas fa-check-square";
  checkIcon.style.color = "lightgray";
  checkIcon.addEventListener("click", () => {
      checkIcon.style.color = "limegreen";
  })
  item.appendChild(checkIcon);
  
  trashIcon.className = "fas fa-trash";
  trashIcon.style.color = "darkgray";
  trashIcon.addEventListener("click", () => {
      item.remove();
  })
  item.appendChild(trashIcon);
  
  text.textContent = input;
  item.appendChild(text);

  document.querySelector("#to_do_list").appendChild(item);
  document.querySelector("#input").value = "";
}