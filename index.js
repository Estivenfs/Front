const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")
//https://www.freepik.es/search?format=search&query=hamburguesa

navToggle.addEventListener("click",() => {

  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")){
    navToggle.setAttribute("aria-label","Cerrar menú");
  }else{
    navToggle.setAttribute("aria-label","Abrir menú");
  }
  
})
