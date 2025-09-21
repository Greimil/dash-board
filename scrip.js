const btnMenu = document.getElementById("logo");
const headerside = document.getElementById("headerSide");
const menuBurger = document.getElementById("menuBurger");
const btntoggletheme = document.getElementById("btn-toggle-theme");
const navigationbar = document.querySelector(".navigationbar");
const cards = document.querySelectorAll(".text-area");
const profiletext = document.getElementById("profile")


btnMenu.addEventListener("click", (e) => {
  console.log("hola xd");
  headerside.classList.toggle("hideShowMenu");
  menuBurger.classList.toggle("hideShowMenu");
});

menuBurger.addEventListener("click", () => {
  headerside.classList.toggle("hideShowMenu");
  menuBurger.classList.toggle("hideShowMenu");
});

btntoggletheme.addEventListener("click", (e) => {
  navigationbar.classList.toggle("darkmode");
  
  cards.forEach((card) => {
    card.classList.toggle("darkmode");
  });
});
