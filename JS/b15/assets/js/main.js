const elementos = [
    {tag: 'p', texto: 'Bom dia' },
    {tag: 'div', texto: 'Boa tarde' },
    {tag: 'footer', texto: 'Boa noite' },
    {tag: 'section', texto: 'Madrugada' },
];

const container = document.querySelector('.container')
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++) {
    let { tag,  texto } = elementos[i];
    let tagCriada = document.createElement(tag)
    tagCriada.innerText = texto
    div.appendChild(tagCriada)
    }

container.appendChild(div)