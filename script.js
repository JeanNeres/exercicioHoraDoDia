
function carregar (){
    var msg = window.document.getElementById ("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML= `Agora são ${hora} horas`;
    if ( hora>= 0 && hora <=18 ){
        img.src = "assets/dia.png"
        document.body.style.background ="#8e7e81"
    }else if (hora > 12&& hora <18){
    
        img.src ="assets/tarde.png"
        document.body.style.background = "#fef1bd"
    }else {img.src ="assets/noite.png"
    document.body.style.background ="#873960"
}
}
