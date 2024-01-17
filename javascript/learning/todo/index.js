let itemDataSource = [];
function addItem() {
  let itemControl = document.getElementById("itemControl").value;
  if (itemControl !== "") {
    let itemList = document.getElementById("itemList");
    let li = document.createElement("li");
    li.setAttribute("id", itemControl);
    li.innerHTML = itemControl;
    itemList.appendChild(li);
    let deleteBtn = document.createElement("button");
    let editBtn = document.createElement("button");
    let updateBtn = document.createElement("button");

    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete";
    updateBtn.textContent = "Update";
    deleteBtn.addEventListener("click", deleteItem.bind(this, itemControl));
    editBtn.addEventListener("click", editItem.bind(this, itemControl));
    updateBtn.addEventListener("click", updateItem.bind(this, itemControl));

    li.after(deleteBtn);
    li.after(editBtn);
    li.after(updateBtn);

    itemDataSource.push(itemControl);
    document.getElementById("itemControl").value = "";
  } else {
    alert("please enter item");
  }
}

function deleteItem(itemControl) {
  let list = document.getElementById("itemList");
  let item = document.getElementById(itemControl);
  list.removeChild(item);
  itemDataSource.forEach((element) => {
    if (element == itemControl) {
      var index = itemDataSource.indexOf(element);
      if (index !== -1) {
        itemDataSource.splice(index, 1);
      }
    }
  });
  console.log("itemDataSource", itemDataSource);
}

function editItem(itemControl) {
  document.getElementById("itemControl").value = itemControl;
}

function updateItem(itemControl) {
  let updatedEle = document.getElementById(itemControl);
  if (document.getElementById("itemControl").value) {
    updatedEle.innerText = document.getElementById("itemControl").value;
    document.getElementById("itemControl").value = "";
  }
}
