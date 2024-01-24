(function () {
  let folderStructure = {
    name: "Root",
    type: "folder",
    children: [
      {
        name: "Folder 1",
        type: "folder",
        children: [
          {
            name: "File 1.1",
            type: "file",
          },
          {
            name: "File 1.2",
            type: "file",
          },
        ],
      },
      {
        name: "Folder 2",
        type: "folder",
        children: [
          {
            name: "File 2.1",
            type: "file",
          },
        ],
      },
      {
        name: "File 3",
        type: "file",
      },
    ],
  };

  // render folder stucture
  function renderTree(node, parentElement) {
    const element = document.createElement("ul");

    node.children.forEach((child) => {
      const li = document.createElement("li");
      li.textContent = child.name;
      if (child.type === "folder") {
        li.classList.add("parent");
        li.addEventListener("click", exapndCollapse, false);
        renderTree(child, li);
      } else {
        li.classList.add("file");
      }
      element.appendChild(li);
    });
    parentElement.appendChild(element);
  }

  // expand and collapse

  function exapndCollapse(e) {
    if (e.target.nodeName == "LI" && e.target.classList.contains("parent")) {
      e.target.firstElementChild.classList.toggle("hidden");
    }
  }
  let folderSturctureEle = document.querySelector("#folderSturcture");

  renderTree(folderStructure, folderSturctureEle);
})();
