const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("clique", mostraPalavrasChave);

function mostraPalavrasChave() {
const texto = document.querySelector("#entrada-de-texto").value;
const campoResultado = document.querySelector("#resultado-palavrachave");
const palavrasChave = processaTexto(texto);

campoResultado.textContent = palavrasChave.join(", ");
}

function processaTexto(texto) {
let palavras = texto.split(/\P{L}+/u);
const frequências = contaFrequências(palavras);
let ordenadas = Object.keys(frequências).sort(ordenaPalavra);

function ordenaPalavra(p1, p2) {
return frequências[p2] - frequências[p1];
}

retornar pedidos.slice(0, 10);
}

function contaFrequencias(palavras) {
let frequencias = {};

for (seja palavra de palavras) {
if (palavra.trim() === "") continue;
palavra = palavra.toLowerCase();
if (frequências[palavra]) {
frequências[palavra]++;
} else {
frequências[palavra] = 1;
}
}

frequências de retorno;
}
function tiraPalavrasRuins(palavras){
    const PALAVRAS_RUINS = new Set(["para","nós", "das", "como", "que"]);
    const palavras 
}