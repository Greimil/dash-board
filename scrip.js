const btnMenu = document.getElementById("logo");
const headerside = document.getElementById("headerSide");
const menuBurger = document.getElementById("menuBurger");
const btntoggletheme = document.getElementById("btn-toggle-theme");
const navigationbar = document.querySelector(".navigationbar");
const cards = document.querySelectorAll(".text-area");
const profiletext = document.getElementById("profile");
const body = document.querySelector("body");


function checkScreenSize() {
  if (window.innerWidth <= 865) {

    headerside.classList.add("hideShowMenu");
    menuBurger.classList.remove("hideShowMenu");
  } else {
    
    headerside.classList.remove("hideShowMenu");
    menuBurger.classList.add("hideShowMenu");
  }
}


checkScreenSize();


window.addEventListener("resize", checkScreenSize);


btnMenu.addEventListener("click", () => {
  headerside.classList.toggle("hideShowMenu");
  menuBurger.classList.toggle("hideShowMenu");
});


menuBurger.addEventListener("click", () => {
  headerside.classList.toggle("hideShowMenu");
  menuBurger.classList.toggle("hideShowMenu");
});


btntoggletheme.addEventListener("click", () => {
  navigationbar.classList.toggle("darkmode");
  body.classList.toggle("bodydark")
  
  cards.forEach((card) => {
    card.classList.toggle("darkmode");
  });
});