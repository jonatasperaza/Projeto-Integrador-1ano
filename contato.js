function enviar(){  
    const Nome = document.getElementById("formularioNome");
    const Email = document.getElementById("formularioEmail");
    const Msg = document.getElementById("formularioMsg");
    const Like = document.getElementById("formularioLike?");
    
    localStorage.setItem('contatoForm', {nome: Nome, email: Email, msg:Msg, like:Like});

}
