function pulsado(event){
    event.preventDefault()
    alert("Has hecho click")
}

window.onload = function(){
    let botton = document.querySelector("#btnSubmit")

    boton.addEventListener("click", pulsado)
}