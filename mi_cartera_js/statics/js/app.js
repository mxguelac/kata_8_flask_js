var el_ultimo

function pulsado(event){
    event.preventDefault()
    let the_father = document.querySelector("#contenido")
    let the_paragraph = document.createElement("p")

    let input = document.querySelector("#texto")

    the_paragraph.innerHTML = input.value
    the_father.appendChild(the_paragraph)

    el_ultimo = the_paragraph

}

function borrado(event){
    event.preventDefault()

    let the_father = document.querySelector("#contenido")
    the_father.removeChild(el_ultimo)

}

window.onload = function(){
    let botton = document.querySelector("#btnSubmit")
    boton.addEventListener("click", pulsado)

    let botonBorra = document.querySelector("#btnDelete")
    botonBorra.addEventListener('click', borrado)
}