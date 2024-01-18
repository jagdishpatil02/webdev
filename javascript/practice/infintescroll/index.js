let dataWrapper = document.querySelector("#dataWrapper");
let employeeData = [];
let numberofRecord = 20;
let startsOfRecord = 1001;
async function fetchData() {
  employeeData = await fetch(
    `https://hub.dummyapis.com/employee?noofRecords=${numberofRecord}&idStarts=${startsOfRecord}`
  )
    .then((res) => res.json())
    .then((result) => result);

  const fragment = document.createDocumentFragment();

  employeeData.forEach((element) => {
    let contactWrapper = document.createElement("div");
    let firstName = document.createElement("span");
    let contactNumber = document.createElement("span");
    let email = document.createElement("span");
    let dob = document.createElement("span");

    firstName.textContent = element.firstName;
    contactNumber.textContent = element.contactNumber;
    email.textContent = element.email;
    dob.textContent = element.dob;

    contactWrapper.appendChild(firstName);
    contactWrapper.appendChild(contactNumber);
    contactWrapper.appendChild(email);
    contactWrapper.appendChild(dob);

    fragment.appendChild(contactWrapper);
  });
  dataWrapper.appendChild(fragment);
}

function scrollToBottom() {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;
  const clientHeight =
    document.documentElement.clientHeight || window.innerHeight;

  return scrollTop + clientHeight >= scrollHeight - 10;
}

function handleScroll() {
  if (scrollToBottom()) {
    console.log("bottom");
    startsOfRecord += 20;
    fetchData(numberofRecord, startsOfRecord);
  }
}

window.addEventListener("scroll", handleScroll);

fetchData();
