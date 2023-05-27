function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  mySidebar.style.animation = 'barra 4s'

}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  mySidebar.style.animation = 'none'
  document.getElementById("main").style.marginLeft = "0";
}

let volteSite = document.title;
window.addEventListener("blur", () => {
  document.title = "Volte Para Aprender!";
});

window.addEventListener("focus", () => {
  document.title = volteSite
})

