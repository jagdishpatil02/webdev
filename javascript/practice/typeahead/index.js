let searchInput = document.querySelector("#searchInput");
let autocompleteResults = document.querySelector("#autocompleteResults");

let serarchList = ["Dhoni", "Kohli", "Sachin", "Gambhir", "Yuvraj"];

searchInput.addEventListener("input", (e) => {
  autocompleteResults.style.display = "block";
  const input = e.target.value.toLowerCase();
  let matches = serarchList.filter((search) =>
    search.toLowerCase().startsWith(input)
  );
  displayMatches(matches);
});

function displayMatches(matches) {
  const html = matches.map((match) => `<li>${match}</li>`).join("");
  autocompleteResults.innerHTML = html;
  let results = document.querySelectorAll("#autocompleteResults li");
  const resultsArr = Array.from(results);
  resultsArr.forEach((li) => {
    li.addEventListener("click", (e) => {
      searchInput.value = e.target.innerText;
      autocompleteResults.style.display = "none";
    });
  });
}
