const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p> Raiz quadrada: ${numero ** 0.5}.</p> </ br>`;
texto.innerHTML += `<p> Numero inteiro: ${Number.isInteger(numero)}. </p> </ br>`;
texto.innerHTML += `<p> É NaN: ${Number.isNaN(numero)}.</p> </ br>`;
texto.innerHTML += `<p> Arrendondando para baixo: ${Math.floor(numero)}. </p> </ br>`;
texto.innerHTML += `<p> Arrendondando para cima: ${Math.ceil(numero)}.</p> </ br>`;
texto.innerHTML += `<p> Com duas casas decimais ${numero.toFixed(2)}.</p> </ br>`