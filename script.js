//alert("Olá Mundo!")
//Codigo baseado em um material fornecido pelo CODIGODEV

var form = document.querySelector('form')

form.addEventListener('submit', function(e){
    
    e.preventDefault()

    let urlForm = "https://pokeapi.co/api/v2/pokemon/"

    let name = document.getElementById('name')

    urlForm = urlForm + this.name.value
    //console.log(urlForm)
    urlForm = urlForm.toLocaleLowerCase()

    let responseContent = document.getElementById('content')
    let responseImg = document.getElementById('imgPokemon')
    let html = ''
    let htmlImg =''

    fetch(urlForm)
        .then(resposta => resposta.json())
        .then(function(data){
            console.log(data)
            html = 'Nome: ' + upCase(data.name) + '<br>'
            html = html + 'Type: ' + upCase(data.types[0].type.name)
            responseContent.innerHTML = html

            var img1, img2
            img1 = data.sprites.front_default
            img2 = data.sprites.back_default
            //<img src="" >
            htmlImg = `<img src= \"${img1}\" > <img src= \"${img2}\" >`
            console.log(htmlImg)                       
            
            responseImg.innerHTML = htmlImg

        })
        .catch(function(err){
            console.log(err)
            if(err == 'SyntaxError: Unexpected token N in JSON at position 0'){
                html = 'Pokemon não encontrado 😒'
            } else {
                 html = "Erro:" + err
            }
            responseContent.innerHTML = html
        })
});

function upCase(val){
    console.log(val)
    //return val.replace(/^./, val[0].toUpperCase)
    return val[0].toUpperCase() + val.substr(1)
}