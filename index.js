const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-section");
let silederSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
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
try {
  slider.insertAdjacentElement('afterbegin', silederSectionLast);
  function Next() {
    let silederSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
      slider.style.transition = "none";
      slider.insertAdjacentElement('beforeend', silederSectionFirst);
      slider.style.marginLeft = "-100%";
    }, 500);
  }
  function Prev(){
    let sliderSection = document.querySelectorAll(".slider-section");
    let silederSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
      slider.style.transition = "none";
      slider.insertAdjacentElement('afterbegin', silederSectionLast);
      slider.style.marginLeft = "-100%";
    },500);
  }
  
  
  btnRight.addEventListener('click',function(){
    Next();
  });
  
  btnLeft.addEventListener('click',function(){
    Prev();
  });
  
  setInterval(() => {
    Next();
  }, 3000);
} catch (error) {
  console.log("no existe slider")
}
const comensales = document.querySelector("#onVentilatorCurrently");
const reseñasBuenas = document.querySelector("#hospitalizedIncrease");
const reseñasMalas = document.querySelector("#states");


async function getApi(){
  //alert("voy a hacer el fetch")
  
  fetch('https://api.covidtracking.com/v1/us/current.json')
  .then(response => response.json())
  .then(data => {
      console.log(data);
      try {
        comensales.innerHTML = "Personas que Comieron Aquí: "+ data[0].onVentilatorCurrently;
        reseñasBuenas.innerHTML= "Reseñas Positivas: "+ data[0].hospitalizedIncrease;
        reseñasMalas.innerHTML= "Reseñas Negativas: "+ data[0].states;
      } catch (error) {
        
      }
      
      
  });
  
}
getApi();



