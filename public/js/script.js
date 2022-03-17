

// function sayMyName(name) {
//     console.log('minha primeira ')

//     name()

//     console.log('Depois de executar')
// }

// sayMyName( 
//  () => {
//      console.log('meu nome é...')
//  }
// )

/* OPERADORES DE COMPARACAO 

 let one = 2
 let two = 5

 console.log(one == 1)
 console.log(two == 5)

 console.log(one != "2")
*/

//  OPERADORES LOGICOS AND (&&)

/*let pao = false
let queijo = false
let presunto = true*/
/*
console.log(pao && presunto)
console.log(pao && queijo && presunto)
console.log(queijo && presunto)
*/

// OPERADORES LOGICOS OU( || )

/*console.log(queijo || pao)
console.log(queijo || presunto)
*/

// OPERADORES LOGICOS NAO ( ! )

// console.log(!pao, !queijo, !presunto)

// // MISTURANDO 2 TIPOS
// console.log(!pao, queijo || presunto)


// OPERADOR TERNÁRIO 

/*let pao = false
let presunto = true
let queijo = true

let niceBreakfast = (pao && presunto || queijo) ? 'Café top' : 'Café nao top'


console.log(niceBreakfast)


let age = 17

let permitido = age >= 18 ? 'Pode dirigir' : 'Não pode'

console.log(permitido)*/

//  OPERADOR STRING (COMPARACAO E CONCATENACAO)

/*let a = 1
let b = 4

let treino = b > a ? 'Pode liberar' : 'Não pode Liberar'

console.log(treino)

console.log(a == b)
console.log(a + ' LETRA A ' + b + ' LETRA B')
console.log(a + 3 + b)
console.log(a != b)
console.log(a === b)
console.log(a !== b)

console.log(a >= b )*/

// IF E ELSE

// let temperatura = 40

/*if(temperatura >= 37) {
    console.log('Febre')
}else {
    console.log('Saudável')
}*/


/*if (temperatura >= 37.5){
    console.log('Febre alta')
}else if(temperatura < 37.5 && temperatura >= 37) {
    console.log('Febre moderada')
}else {
    console.log ('Sem febre!')
}*/


// SWITCH

/*let expression = 'b'

switch (expression){
    case 'a': 
    console.log('Esse é o A')

    case 'b':
        console.log('Esse é o B')
    

    default:
        console.log('default')
        break
}*/

// ESTRUTURA DE REPETIÇAO (FOR)


/*for (let i = 100; i < 1; i--) {
    if(i === 50) {
        break;
    }
    if(i === -50) {
        break;
    }
    console.log(i)
 }*/


//  let i = 0;
//  while()

// FOR...OF



// AULA DE EXERCÍCIO 

/*function todasAsNotas(notas) {
let notasA = notas >= 90 && notas <= 100
let notasB = notas >= 80 && notas <= 89
let notasC = notas >= 70 && notas <= 79
let notasD = notas >= 60 && notas <= 69
let notasF = notas < 60 && notas >= 0

let notaFinal; 


if (notasA) {
    notaFinal = "A"
}else if(notasB) {
    notaFinal = "B"
}else if (notasC) {
    notaFinal = "C"

}else if (notasD) {
    notaFinal = "D"

}else if (notasC) {
    notaFinal = "C"

}else if (notasD) {
    notaFinal = "D"
}else if (notasF) {
    notaFinal = "F"
}else {
    notaFinal = "Nota inválida"
}
console.log(notaFinal)
}


todasAsNotas(91)
todasAsNotas(81)
todasAsNotas(11)
todasAsNotas(101)*/












let url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"

function converterdolar() { 
    let userInput = document.getElementById("userInputDolar").value;
    fetch(url).then((res) => {
        return res.json()
    
    })
    .then((data)=> {
        let USDBRL = parseFloat(data.USDBRL.bid)
        const conversion = (USDBRL * userInput).toFixed(2)
        let resultado = `${userInput} Dolar(s) = ${conversion} em Reais`
        document.getElementById("resultadodolar").innerHTML = (resultado)
    })
}

function convertereuro() { 
    let input = document.getElementById("valoreuro");
    let valorreal= input.value;
    fetch(url).then((res) => {
        return res.json()
    })
    .then((data)=> {
        let EURBRL = parseFloat(data.EURBRL.bid)
        const conversion = (EURBRL * valorreal).toFixed(2)
        let resultado = `${valorreal} Euro(s) = ${conversion} em Reais`
        document.getElementById("resultadoeuro").innerHTML = (resultado)
    })
}

