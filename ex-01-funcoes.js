/*
Assunto 01 - Funções, Argumentos e Retornos

Uma das principais utilidades de escrever código é a possibilidade de organizar
instruções em blocos reutilizáveis. A estrutura que nos permite isso é chamada
de "Função".

Uma função é como uma receita: definimos uma série de passos uma única vez, e
depois podemos executar essa receita quantas vezes quisermos, apenas chamando
o nome dela. Em JavaScript, usamos a palavra-chave "function" para criar uma função.

Vamos ver a sintaxe básica:

function nomeDaFuncao() {
  código a ser executado
}

Para "chamar" (executar) a função, escrevemos:

nomeDaFuncao()

Exemplo básico:

function dizerOla() {
  console.log("Olá!")
}

dizerOla()

- O código acima imprime "Olá!" no console

=====================================
ARGUMENTOS (PARÂMETROS)
=====================================

Frequentemente, queremos que nossas funções trabalhem com dados diferentes
cada vez que são chamadas. Para isso, usamos "argumentos" (também chamados de
parâmetros).

Argumentos são valores que enviamos para dentro da função quando a chamamos.
Dentro da função, esses valores recebem um nome específico que definimos na
criação da função.

Veja o exemplo abaixo:

function nomeDaFuncao(nomeDoArgumento) {
  código que usa nomeDoArgumento
}

nomeDaFuncao(valorQueSeraEnviado)

Exemplo:

function cumprimentar(nome) {
  console.log("Olá, " + nome + "!")
}

cumprimentar("Maria")
cumprimentar("João")

- O código acima imprime "Olá, Maria!" e depois "Olá, João!"

Note que "nome" dentro da função é apenas um "apelido" local para o valor
que foi enviado. A função não sabe (e não precisa saber) como a variável se
chama fora do contexto dela.

=====================================
POR QUE USAMOS O NOME DO ARGUMENTO DENTRO DA FUNÇÃO?
=====================================

Isso é fundamental para entender como funções funcionam. Quando você envia
uma variável como argumento, o valor dela é copiado para o parâmetro da
função. O nome original da variável não é transportado para dentro da função.

Vamos entender com um exemplo:

let nomeDoUsuario = "Carlos"

function cumprimentar(nome) {
  console.log("Bem-vindo, " + nome)
}

cumprimentar(nomeDoUsuario)

O que acontece acima:
1. A variável "nomeDoUsuario" tem o valor "Carlos"
2. Quando chamamos cumprimentar(nomeDoUsuario), o VALOR "Carlos" é enviado
3. Dentro da função, esse valor é recebido pelo parâmetro "nome"
4. A função trabalha apenas com "nome", não conhece "nomeDoUsuario"

Isso permite que a mesma função seja usada com diferentes variáveis:

let aluno = "Ana"
let professor = "Pedro"

function mostrarNome(pessoa) {
  console.log("Nome: " + pessoa)
}

mostrarNome(aluno)     // imprime "Nome: Ana"
mostrarNome(professor) // imprime "Nome: Pedro"
mostrarNome("Lucas")   // imprime "Nome: Lucas"

Em todos os casos, dentro da função usamos "pessoa" para nos referir ao
valor recebido, independentemente de como a variável se chamava fora da
função ou se foi enviado um valor direto.

=====================================
MÚLTIPLOS ARGUMENTOS
=====================================

Uma função pode receber mais de um argumento. Separamos os parâmetros por vírgula:

function somar(a, b) {
  console.log(a + b)
}

somar(5, 3)  // imprime 8
somar(10, 7) // imprime 17

A ordem dos argumentos importa:

function apresentar(nome, idade) {
  console.log(nome + " tem " + idade + " anos")
}

apresentar("Julia", 25)  // imprime "Julia tem 25 anos"
apresentar(19, "Joaquim")  // imprime "19 tem Joaquim anos"

=====================================
RETORNO (RETURN)
=====================================

Até agora nossas funções apenas mostraram valores no console. Mas frequentemente
queremos que a função NOS DEVOLVA um resultado para podermos usar depois.
Para isso usamos o "return".

O "return" faz duas coisas:
1. Define qual valor a função deve devolver
2. Encerra a execução da função imediatamente

Sintaxe:

function nomeDaFuncao() {
  return valor
}

Exemplo:

function dobrar(numero) {
  return numero * 2
}

let resultado = dobrar(5)
console.log(resultado)  // imprime 10

A função calcula o dobro e RETORNA esse valor. Podemos guardar esse valor
em uma variável ou usar diretamente:

console.log(dobrar(4))  // imprime 8

=====================================
CASOS DE USO
=====================================

1. Função simples sem argumentos:

function mostrarData() {
  console.log("Hoje é 29/03/2026")
}

mostrarData()

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

2. Função com argumento:

function verificarMaioridade(idade) {
  if (idade >= 18) {
    console.log("Maior de idade")
  } else {
    console.log("Menor de idade")
  }
}

verificarMaioridade(20)
verificarMaioridade(15)

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

3. Função com retorno:

function calcularArea(base, altura) {
  return base * altura
}

let area1 = calcularArea(5, 3)
let area2 = calcularArea(10, 4)
console.log(area1)  // 15
console.log(area2)  // 40

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

4. Função com retorno usada diretamente:

function juntarNomes(primeiro, segundo) {
  return primeiro + " " + segundo
}

console.log(juntarNomes("Ana", "Silva"))

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

5. Função que modifica um valor e retorna:

function aplicarDesconto(preco, percentual) {
  let desconto = preco * (percentual / 100)
  return preco - desconto
}

let precoOriginal = 100
let precoComDesconto = aplicarDesconto(precoOriginal, 10)
console.log(precoComDesconto)  // 90

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

6. Função que verifica condição e retorna booleano:

function ehPar(numero) {
  return numero % 2 === 0
}

console.log(ehPar(4))  // true
console.log(ehPar(7))  // false

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

7. Função que processa lista e retorna nova lista:

function dobrarValores(lista) {
  let novaLista = []
  let indice = 0
  
  while (indice < lista.length) {
    novaLista.push(lista[indice] * 2)
    indice = indice + 1
  }
  
  return novaLista
}

let numeros = [1, 2, 3, 4]
let numerosDobrados = dobrarValores(numeros)
console.log(numerosDobrados)  // [2, 4, 6, 8]

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

8. Função que retorna baseado em condição:

function maiorNumero(a, b) {
  if (a > b) {
    return a
  }
  return b
}

console.log(maiorNumero(10, 5))   // 10
console.log(maiorNumero(3, 8))    // 8

=====================================
IMPORTANTE SOBRE RETURN
=====================================

Quando uma função encontra um "return", ela para imediatamente e devolve
o valor. Qualquer código após o return NÃO é executado:

function exemplo() {
  return "acabei"
  console.log("isso nunca aparece")
}

console.log(exemplo())  // apenas imprime "acabei"

Uma função pode ter múltiplos returns (em diferentes caminhos condicionais),
mas apenas um será executado:

function avaliarNota(nota) {
  if (nota >= 7) {
    return "Aprovado"
  }
  if (nota >= 5) {
    return "Recuperação"
  }
  return "Reprovado"
}

console.log(avaliarNota(8))  // "Aprovado"
console.log(avaliarNota(6))  // "Recuperação"
console.log(avaliarNota(4))  // "Reprovado"

=====================================
RESUMO
=====================================

- function: palavra-chave para criar uma função
- argumentos/parâmetros: valores que a função recebe para trabalhar
- dentro da função usamos os nomes dos parâmetros, não das variáveis externas
- return: devolve um valor e encerra a função
- funções permitem reutilizar código e organizar melhor o programa

------------------------------------------------------------------------------

Questões 01 a 12: Funções

MÍNIMO NECESSÁRIO PARA NOTA MÁXIMA: 9 questões
*/
// Questão 1
function saudacao() {
  return "Bom dia!";
}
export const resposta01 = saudacao;

// Questão 2
function dobro(numero) {
  return numero * 2;
}
export const resposta02 = dobro;

// Questão 3
function ehPositivo(numero) {
  return numero > 0;
}
export const resposta03 = ehPositivo;

// Questão 4
function nomeCompleto(primeiroNome, sobrenome) {
  return primeiroNome + " " + sobrenome;
}
export const resposta04 = nomeCompleto;

// Questão 5
function contarTravaLinguas(lista) {
  return lista.length;
}
export const resposta05 = contarTravaLinguas;

// Questão 6
function obterTravaLingua(indice) {
  return travaLinguas[indice];
}
export const resposta06 = obterTravaLingua;

// Questão 7
function contarPalavrasTravaLingua(indice) {
  let texto = travaLinguas[indice];
  let palavras = texto.split(" ");
  return palavras.length;
}
export const resposta07 = contarPalavrasTravaLingua;

// Questão 8
function buscarTravaLinguasComPalavra(palavra) {
  let novaLista = [];
  let i = 0;
  while (i < travaLinguas.length) {
    if (travaLinguas[i].includes(palavra)) {
      novaLista.push(travaLinguas[i]);
    }
    i++;
  }
  return novaLista;
}
export const resposta08 = buscarTravaLinguasComPalavra;

// Questão 9
function contarElementos(lista) {
  return lista.length;
}
export const resposta09 = contarElementos;

// Questão 10
function buscarPorNumeroAtomico(lista, numero) {
  let i = 0;
  while (i < lista.length) {
    if (lista[i].numeroAtomico === numero) {
      return lista[i];
    }
    i++;
  }
  return null;
}
export const resposta10 = buscarPorNumeroAtomico;

// Questão 11
function listarNomesElementos(lista) {
  let nomes = [];
  let i = 0;
  while (i < lista.length) {
    nomes.push(lista[i].nome);
    i++;
  }
  return nomes;
}
export const resposta11 = listarNomesElementos;

// Questão 12
function elementosComNumeroPar(lista) {
  let pares = [];
  let i = 0;
  while (i < lista.length) {
    if (lista[i].numeroAtomico % 2 === 0) {
      pares.push(lista[i]);
    }
    i++;
  }
  return pares;
}
export const resposta12 = elementosComNumeroPar;