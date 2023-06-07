function click_starwars() {
    const elemento = document.getElementById("magica");
    elemento.style.animation = "animation 4s"
    console.log(click_starwars)
}



function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  mySidebar.style.animation = 'barra 4s'

}

function voltar(event) {
  if (event.animationName === "barraDois") {
    document.getElementById("mySidebar").style.width = "0";
  }
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
      document.getElementById("main").style.marginLeft = "0";
  mySidebar.style.animation = 'barraDois 4s'
  mySidebar.addEventListener("animationend", voltar);

}


let volteSite = document.title;
window.addEventListener("blur", () => {
  document.title = "Volte Para Aprender!";
});

window.addEventListener("focus", () => {
  document.title = volteSite
})

