let form = document.getElementById('form')
let cont = true

form.onsubmit = function(){
    return false
}

function addCardColor(form){
    let color
    
    if(form.elements['color'].value === 'rojo')
        return color = ['#ff3232','3px solid red']
    if(form.elements['color'].value === 'azul')
        return color = ['#0a67e3','3px solid blue']
    if(form.elements['color'].value === 'amarillo')
        return color = ['#fadf7b','3px solid #d2cc15']
}   

function addCard(form){
    let divCard = document.createElement('div')
    let language = 'Lenguajes: '
    let color = addCardColor(form)

    for(let i = 0; i < form.elements['language'].length; i++){
        if(form.elements['language'][i].checked){
            language += form.elements['language'][i].value + ' '
        }
    }

    divCard.classList.add('card')
    divCard.innerHTML = `<h2 style="border-bottom: ${color[1]}">${form.elements['name'].value}</h2>
                        <p>${language}</p>`
    divCard.style.backgroundColor = color[0]
    divCard.style.border = color[1]

    return divCard
}

form.elements['add'].onclick = function(){
    
    if(cont){ //AGREGO POR UNICA VEZ EL CONTENEDOR CON UNA CARTA.
        let divContainer = document.createElement('div')
        cont = false    
        divContainer.classList.add('container-card') 
        form.insertAdjacentElement("afterend",divContainer)
        divContainer.insertAdjacentElement("afterbegin",addCard(form))

    }else{//AGREGO LAS CARTAS NORMALMENTE.
        let divContainer = document.querySelector('.container-card')
        divContainer.insertAdjacentElement("beforeend",addCard(form))
    }
}