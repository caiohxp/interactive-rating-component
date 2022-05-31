function submit(){
    if(clicado){
        const pai = document.querySelector('.main')
        pai.setAttribute("style", "grid-template-rows: 2fr 1fr 1fr 1fr")
        const filhos = document.querySelectorAll('.content')
        filhos.forEach(i => pai.removeChild(i))
        var img = document.createElement('img')
        pai.appendChild(img)
        var text = document.createElement('div')
        text.innerHTML = `You selected ${valor} out of 5`
        text.classList.add('rate')
        pai.appendChild(text)
        var thank = document.createElement('h1')
        thank.innerHTML = "Thank You!"
        thank.classList.add('titulo')
        thank.setAttribute("style", "justify-content: center")
        pai.appendChild(thank)
        var texto = document.createElement('p')
        texto.innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch"
        texto.classList.add('mensagem')
        texto.setAttribute("style", "text-align: center")
        pai.appendChild(texto)
    }
}

const notas = document.querySelectorAll('.nota')
var clicado = false
var valor = 0
notas.forEach(n => {
    n.addEventListener('click', () => {
        notas.forEach(i => i.classList.remove('nota-escolhida')) 
        n.classList.add('nota-escolhida')
        clicado = true
        valor = n.innerHTML
    })
} )