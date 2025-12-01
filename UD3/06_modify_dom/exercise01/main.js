

window.onload = function(e) {
    console.log('documento cargado')

    // document.getElementsByTagName('h1')[0].innerText = 'Changed from JS!!'
    //Cambiar el título del segundo h2
    let titulos = document.getElementsByTagName('h2') 
    titulos[0].innerHTML =  "Hola a todos"
    
    // Seleccionar el elemento con id == username
    let elementUsername = document.getElementById('username')
    console.log(elementUsername)

    // Cambiar el color de todos los .first que estén dentro de un artículo
    let elementsFirst = document.querySelectorAll('article .first')
    elementsFirst.forEach(n => n.style.color = 'red')
    // for(let element of elementsFirst){
    //     for(let parrafo of element.children){
    //         if(parrafo.classList[0] === "first"){
    //             parrafo.style =["color: rgb(255,0,0);"]
    //         }
    //     }
    // }

    // Seleccionar todos lo elementos li con class == item
    let liElements = document.querySelectorAll("li.item")
    for(let element of liElements){
        console.log(element);
    }

    // Seleccionar todos lo buttons dentro de class == buttons
    let buttonsStyle = document.querySelectorAll(".buttons button")
    console.log(buttonsStyle);
    
    // Cambiar el color de fondo del primer párrafo
    document.getElementsByTagName('p')[0].style.background = 'green'

    // Cambiar el color de frente (forecolor) de los elementos buttons dentro de class == buttons
    buttonsStyle.forEach(b => b.style.color = 'green')

}