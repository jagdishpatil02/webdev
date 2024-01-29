(async function () {
  const result = await fetch('https://jsonplaceholder.typicode.com/users');
  const employeeData = await result.json();
  let tableBody = document.querySelector('#datatable tbody');
  let table = document.querySelector('table');
  let searchData = document.querySelector('#searchData');

  renderData(employeeData);

  // render data
  function renderData(data) {
    data.forEach((employee) => {
      let tr = document.createElement('tr');
      let name = document.createElement('td');
      name.textContent = employee.name;
      tr.appendChild(name);
      let username = document.createElement('td');
      username.textContent = employee.username;
      tr.appendChild(username);
      let email = document.createElement('td');
      email.textContent = employee.email;
      tr.appendChild(email);
      let website = document.createElement('td');
      website.textContent = employee.website;
      tr.appendChild(website);
      let phone = document.createElement('td');
      phone.textContent = employee.phone;
      tr.appendChild(phone);
      tableBody.appendChild(tr);
    });
  }

  // sort data
  table.addEventListener('click', (e) => {
    if (e.target.tagName === 'TH') {
      tableBody.innerHTML = [];
      let sortingPara = e.target.innerText.toLocaleLowerCase();
      console.log(typeof sortingPara);
      employeeData.sort((a, b) => {
        if (a[sortingPara].localeCompare(b[sortingPara]) < 0) {
          return a[sortingPara].localeCompare(b[sortingPara]);
        } else {
          return b[sortingPara].localeCompare(a[sortingPara]);
        }
      });
      renderData(employeeData);
    }
  });

  //filter data
  searchData.addEventListener('input', (e) => {
    tableBody.innerHTML = [];

    let filteredData = employeeData.filter((data) => {
      return data.name
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase());
    });

    if (filteredData.length === 0) {
      let td = document.createElement('td');
      td.style.textAlign = 'center';

      td.setAttribute('colspan', 7);
      td.textContent = 'No records found';
      tableBody.appendChild(td);
    }
    renderData(filteredData);
  });
})();
