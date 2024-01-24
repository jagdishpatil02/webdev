(function () {
  let tabsHeader = document.querySelector(".tab-header");
  let tabHeadings = tabsHeader.querySelectorAll(".tab-heading");
  let tabData = document.querySelectorAll(".tab-body span");

  let getSelectedTab = (e) => {
    tabHeadings.forEach((heading) => {
      heading.classList.remove("selected-tab");
    });
    tabData.forEach((element) => {
      element.classList.add("hidden");
    });
    if (e.target.nodeName == "SPAN") {
      e.target.classList.add("selected-tab");

      let selectedTabHeader = document.querySelector(
        "#" + e.target.innerText.toLocaleLowerCase()
      );
      console.log(selectedTabHeader);
      selectedTabHeader.classList.toggle("hidden");
    }
  };
  tabsHeader.addEventListener("click", getSelectedTab, true);
})();
