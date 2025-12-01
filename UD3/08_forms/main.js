window.onload = function() {
    console.log(document.main_form.elements)

    console.log(document.getElementById('pregunta_si').value)
    console.log(document.getElementById('pregunta_si').checked)

    document.getElementById('pregunta_si').onchange = changeValue
    document.getElementById('pregunta_no').onchange = changeValue

    //El boton de enciar solo puede estar habilitado si se han marcado los 2 checks
    //El combo de opciones solo estarala habilitado si se pulsa el primer check
    //Nombre y apellidos son obligatorios. Si no se han rellenado informar 
    //El tamaño maximo de la descripcion es de 80
    const submitButton = this.document.getElementById('submit')
    submitButton.disabled = true

    document.getElementById('condiciones').onchange = checkSubmit
    document.getElementById('privacidad').onchange = checkSubmit
    document.getElementById('pregunta_si').onchange =  checkCombo
    document.getElementById('pregunta_no').onchange =  checkCombo
    document.getElementById('pregunta_nsnc').onchange =  checkCombo
}

function changeValue(e) {
     console.log('changed' + e.target.value)
}

function checkSubmit(){
    document.getElementById('submit').disabled = true

    if(document.getElementById('privacidad').checked && 
    document.getElementById('condiciones').checked &&
    document.getElementById('pregunta_si').checked){
        document.getElementById('submit').disabled = false
    }
}

function checkCombo(e){
    // if(e.)
}