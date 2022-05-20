document.write("<h1>Estamos executando o script.js</h1>");
document.write("Esse script está em um arquivo externo e é referenciado no header do HTML");
console.log("Esse script está no cabeçalho do HTML");
console.log("Primeiro");
console.log("Segundo");

// Comentário de uma linha

/*  Comentário 
    de 
    múltiplas
    Linhas
*/

// Tipagem fraca
var teste = 1;
// Contatena o valor 'teste' que é 1 dentro da tag <hr>
document.write("<hr>O valor da variável teste é " + teste + "<hr>");
// Variavel teste recebe o valor joao
teste = 'joao';
// Contatena o valor 'teste' que é joao dentro na string
document.write("O valor da variável teste agora é " + teste + "<hr>");

// Variável global - criada sem necessidade de declaração
nome = 'joao';

//Imprime na console o nome que seria joao
console.log(nome)

// Formas de declaração de variáveis
// Criação de uma variavel do tipo var que pode ser declarada novamente
var   v1 = 5.25;
// Criação de uma variavel do tipo let que não pode ser declarada novamente
let   v2 = null; 
// Criação de uma variavel do tipo constante 
const v3 = 'teste'

console.log(typeof(v1)); // tipo number
console.log(typeof(v2)); // tipo number
console.log(typeof(v3)); // tipo string
console.log(typeof NaN); // tipo number
console.log(typeof +Infinity); // tipo number
console.log(typeof null); // tipo number

// cria uma variavel do tipo constante com o valor string 1
const number = "1";
// Operadores de comparação
console.log(number == 1); // Verifica apenas o valor
// true
console.log(number === 1);// verifica o valor e a tipagem
// false

console.log('ele disse "vtnc"');

// adicionar uma lista no body do HTML
var lista = ['Arroz', 'Feijão', 'carne','macarrão'];// cria uma var com o valor de array
var listaUl = document.createElement('ul'); // cria a tag ul, lista desordenada
var body = document.getElementsByTagName('body'); // cria a tag body

console.log(listaUl);// mostra a listaUl no console
console.log(body);// mostra o body no console

//alert("Vamos criar uma lista aqui!");

body[0].appendChild(listaUl);

for(var  i=0;i<lista.length;i++) {// estrutura de repetição, percorre a variavel lista
    var liFor = document.createElement('li');// cria tag li
    var textoLi = document.createTextNode(lista[i]);// variavel textoLi recebe o texto da lista na posição i
    liFor.appendChild(textoLi);// tag li recebe o filho textoLi
    listaUl.appendChild(liFor);// tag ul, recebe a liFor
}

document.write("A lista não ordenada <b>ACIMA</b> foi criada dinamicamente via JavaScript");

var obj = { // cria variavel que recebe um objeto
    nome: "Joao",// Key e valor do objeto
    sobrenome: "Furtado",// Key e valor do objeto
    profissao: "jogador",// Key e valor do objeto
    salario: 120000,// Key e valor do objeto
    pessoaJuridica: true// Key e valor do objeto
};

console.log(obj);// mostra no console a variavel obj
console.log("Salario: R$" + obj.salario); // mostra o valor da key salario do objeto

var arr = [5, "JP", true, {teste1: 1, teste2: 2}, false]; // cria a variavel arr, que recebe um array
console.log(arr); // mostra os valores do array
console.log(arr[1]);// mostra o valor JP do array
console.log(typeof arr); // tipo array

if(arr[4]) {// mostra o valor false, não vai entrar no if
    console.log("Entrou no teste do IF")
}

// Operadores de comparação ==, ===, !=, >, <, >=, <= 
if (obj.salario > '100000') {// salario é maior que 100.000, vai dar true e vai entrar dentro do if
    console.log("Salário acima de 100 mil");
}