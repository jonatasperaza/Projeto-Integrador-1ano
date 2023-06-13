function click_starwars() {
  const elemento = document.getElementById("magica");
  elemento.style.display =  'block'
  elemento.className = "efeito-magica";
  const estrela = document.getElementById("star-wars")
  estrela.className = "star-wars"
  const claudio = document.getElementById("textos2")
  claudio.style.display = "none"
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

window.onkeydown = function(evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) {
      isEscape = (evt.key === "Escape" || evt.key === "Esc");
  } else {
      isEscape = (evt.keyCode === 27);
  }
  if (isEscape) {
    const elemento = document.getElementById("magica");
    elemento.style.display =  'none'
    elemento.className = "";
    const estrela = document.getElementById("star-wars")
    estrela.className = ""
    const claudio = document.getElementById("textos2")
    claudio.style.display = ""
  }
};


window.addEventListener("focus", () => {
  document.title = volteSite
})