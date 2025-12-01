window.onload = () => {
    //Listar todos los divs
    console.log('start')
    const divs = document.getElementsByTagName('div')
    console.log(`div ${JSON.stringify(divs.length)}`)
    for(let div of divs ){
        console.log(div)
    };
    console.log("-----------------------------");
    
    //Listar todos los elementos con el style buttons
    const buttonsStyle = document.getElementsByClassName('buttons')
    for(const buttonStyle of buttonsStyle)console.log(buttonStyle);
    
    //Listar un div con la clase button
    const divButton = document.querySelector('div.buttons')
    console.log(divButton);
    
    //Lista todos los divs con class buttons
    const divsButtons = document.querySelectorAll('div.buttons')
    console.log(divsButtons);
}