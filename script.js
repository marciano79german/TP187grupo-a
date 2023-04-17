document.addEventListener("DOMContentLoaded",() =>{
    var botonA = document.getElementById("botonAnterior");
    var botonB = document.getElementById("botonSiguiente");
    botonA.addEventListener("click",() =>{
        var slice = document.getElementsByClassName("divSlice");
        var imgActiva = slice.getElementsByClassName(".activada");
        alert(imgActiva);
    });
    botonB.addEventListener("click",() =>{
        var slice = document.getElementsByClassName("divSlice");
        var imgActiva = slice.getElementsByClassName(".activada");    
        alert(imgActiva);
    });
});