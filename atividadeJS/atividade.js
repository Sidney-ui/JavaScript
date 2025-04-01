let nome = prompt("qual é o seu nome?")
alert("Olá " + nome);

function terreno() {

    let largura = prompt(" qual a largura de seu terreno?")
    let comprimento = prompt("qual o comprimento?")

    let dimensão = largura * comprimento

    alert("O tamanho do terreno é:" + dimensão + "mt²")
}

function cavalo() {

    let Cavalos = prompt('quantos cavalor você possui?')
    let quantidade = Cavalos * 4
    alert(" A quantidade de ferraduras é:" + quantidade + "qty")
}

function padaria() {
    let pão = prompt("quantos pães você deseja comprar?")
    let broa = prompt(" quantas proas você deseja comprar?")
    let valorPão = pão * 0.12
    let valorBroa = broa * 1.50
    let valorTotal = valorPão + valorBroa
    let valorPoupança = valorTotal * 0.10
    alert("o valor total é R$" + valorTotal)
    alert("você deve por na poupança R$"  + valorPoupança)
}

function idade(){
    let idade = prompt("quantos anos você possui?")
    let dias = idade * 365
    alert("você viveu:  " + dias )
}

function gasolina(){
    let valor = prompt(" qual valor atual da gasosa? ")
    let gasolina = prompt(" quantos reais de gasolina você deseja abastecer? ")
    let total = gasolina / valor 
    alert(" você colocou " + total + " litros ")
 

}