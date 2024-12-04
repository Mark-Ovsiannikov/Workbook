function toggleMenu() {
  const menu = document.getElementById("menuContent");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

document.addEventListener("click", function (event) {
  const menu = document.getElementById("menuContent");
  const button = document.querySelector(".menu-button");
  if (!menu.contains(event.target) && event.target !== button) {
    menu.style.display = "none";
  }
});
