(async function () {
  let result = await fetch("./data.json");

  let employeeData = await result.json();
  console.log(employeeData);
  let employeeslist = document.querySelector(".employees-list");
  let singleEmployee = document.querySelector(".employee-list");
  const addEmployeeForm = document.querySelector(".addEmployee_create");

  let selectedEmployeeId = employeeData[0].id;
  let selectedEmployee = employeeData[0];

  //   // get paritcular employee list

  employeeslist.addEventListener("click", (e) => {
    employeeslist.innerHTML = "";
    if (e.target.tagName == "SPAN" && selectedEmployeeId !== e.target.id) {
      console.log("e.target", e.target);
      selectedEmployeeId = e.target.id;
      renderEmployee();
      renderAllEmployee();
    }

    if (e.target.tagName == "I") {
      console.log(e.target.parentNode.id);
      employeeData = employeeData.filter(
        (emp) => String(emp.id) !== e.target.parentNode.id
      );
      renderAllEmployee();
    }
  });
  // get all employee list
  let renderAllEmployee = () => {
    employeeData.forEach((employee) => {
      let employeeTitle = document.createElement("span");
      employeeTitle.classList.add("employee-names-items");
      if (selectedEmployeeId == employee.id) {
        employeeTitle.classList.add("selected");
        selectedEmployee = employee;
      }
      employeeTitle.setAttribute("id", employee.id);
      employeeTitle.innerHTML = `${employee.firstName} ${employee.lastName} <i>Delete</i>`;
      employeeslist.appendChild(employeeTitle);
    });
  };

  // render one employee
  let renderEmployee = () => {
    selectedEmployee = employeeData.filter((emp) => {
      return selectedEmployeeId == emp.id;
    });

    singleEmployee.innerHTML = `<img src='${selectedEmployee[0].imageUrl}' 
    <span>${selectedEmployee[0].firstName} ${selectedEmployee[0].lastName}</span>
    <span>${selectedEmployee[0].email} </span> <span>${selectedEmployee[0].dob}<span>${selectedEmployee[0].address} </span>`;
    console.log(selectedEmployee);
  };

  // delete employee

  // add employee

  addEmployeeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(addEmployeeForm);
    const values = [...formData.entries()];
    console.log(values);
    let empData = {};
    values.forEach((val) => {
      empData[val[0]] = val[1];
    });
    empData.id = employeeData[employeeData.length - 1].id + 1;
    empData.imageUrl =
      empData.imageUrl || "https://cdn-icons-png.flaticon.com/512/0/93.png";
    employeeData.push(empData);
    renderAllEmployee();
  });

  renderAllEmployee();
})();
