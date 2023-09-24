function click_starwars() {
  const elemento = document.getElementById("magica");
  elemento.style.display = 'block'
  elemento.className = "efeito-magica";
  const estrela = document.getElementById("star-wars")
  estrela.className = "star-wars"
  const claudio = document.getElementById("textos2")
  claudio.style.display = "none"
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  mySidebar.style.animation = 'barra 2s'
}

function voltar(event) {
  if (event.animationName === "barraDois") {
    document.getElementById("mySidebar").style.width = "0";
  }
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "250";
  mySidebar.style.animation = 'barraDois 2s'
  mySidebar.addEventListener("animationend", voltar);

}

let volteSite = document.title;
window.addEventListener("blur", () => {
  document.title = "Volte Para Aprender!";
});


window.addEventListener("focus", () => {
  document.title = volteSite
})

window.onkeydown = function (evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) {
    isEscape = (evt.key === "Escape" || evt.key === "Esc");
  } else {
    isEscape = (evt.keyCode === 27);
  }
  if (isEscape) {
    const elemento = document.getElementById("magica");
    elemento.style.display = 'none'
    elemento.className = "";
    const estrela = document.getElementById("star-wars")
    estrela.className = ""
    const claudio = document.getElementById("textos2")
    claudio.style.display = "block"
  }
};

function ondas() {
  var ondas = "Ondas.html";
  window.open(ondas);
}

function leis() {
  var leis = "LeisDeNewton.html";
  window.open(leis);
}

function energia() {
  var energia = "Energia.html";
  window.open(energia);
}
function mecanica() {
  var mecanica = "Mecanica.html";
  window.open(mecanica);
}
function optica() {
  var optica = "Optica.html";
  window.open(optica);
}
function correntes() {
  var correntes = "CorrentesEletricas.html";
  window.open(correntes);
}
function eletricidade() {
  var eletricidade = "Eletricidade.html";
  window.open(eletricidade);
}
function termofisica() {
  var termofisica = "Termofisica.html";
  window.open(termofisica);
}

function sambaqui() {
  var sambaqui = "sambaqui.html";
  window.open(sambaqui);
}

function bibli() {
  var bibliografias = "Bibliografia.html";
  window.open(bibliografias);
}