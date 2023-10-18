const searchBar = document.getElementById("search-bar");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", function() {
  performSearch(searchBar.value.toLowerCase());
});

searchBar.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    performSearch(searchBar.value.toLowerCase());
  }
});

function performSearch(searchTerm) {
  const allElements = document.getElementsByTagName("*");

  for (let i = 0; i < allElements.length; i++) {
    const element = allElements[i];
    const text = element.textContent.toLowerCase();

    if (text.includes(searchTerm)) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      break;
    }
  }
}
