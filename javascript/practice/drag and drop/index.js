const listItems = document.getElementsByClassName("list");
const rightBox = document.querySelector(".right");
const leftbox = document.querySelector(".left");

for (listitem of listItems) {
  listitem.addEventListener("dragstart", (e) => {
    let selectedItem = e.target;

    rightBox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    rightBox.addEventListener("drop", (e) => {
      rightBox.appendChild(selectedItem);
      selectedItem = null;
    });

    leftbox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    leftbox.addEventListener("drop", (e) => {
      leftbox.appendChild(selectedItem);
      selectedItem = null;
    });
  });
}
