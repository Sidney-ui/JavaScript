

var nome = "maria"
let valor = 2.3
let idade = 15
var casado = false
let pessoa = {nome: "Lucia", idade: 12}
let cores = ["amarelo", "vermelho", "verde"]

document.writeln(nome+ "<br>")// adiciona uma quebra de linhas após cada valor

document.writeln(valor +"<br>")
document.writeln(idade +"<br>")
document.writeln(casado +"<br>")
document.writeln(JSON.stringify(pessoa) + "<br>")// para exibir o objeto de forma legivel
document.writeln(cores + "<br>") //para exibir array de forma legivel

document.writeln("<br> <hr> <br>")

document.writeln("<hr>"+ "<br>"+"operadores Aritméticos" + "<br>")
document.writeln(3+2 + "<br>")
document.writeln(8*2 + "<br>")
document.writeln(10/4 + "<br>")
document.writeln(9-5 +"<br>")
document.writeln("<br>" + "9"+"5 <br>")

document.writeln("<br><hr><br>")

var count = 0; // define uma variével 
document.writeln(count+ "<br>")

count++; // incrementa uma vaiável
document.writeln(count+ "<br>")

count-- // decrementa uma variável
document.writeln(count+ "<br>")

count+= 2; //soma 2: o mesmo que count = count + 2;
document.writeln(count+ "<br>")

count *=3; // multiplica por 3: o mesmo que count =  count * 3;
document.writeln(count+ "<br>")

count // => 6: nomes de variáveis também são expressão.
document.writeln(count+ "<br>")

// os operadores de igualdade e relacionais testaram se dois valores são iguais.
// Desiguais, menores que, maiores que, etx. São avaliados como verdadeiros ou falsos.

var x =2, y=3; // esses sinais= são atribuições e não testes de igualdade
x == y //==> falso: sinais igualdade
x !== y //==> verdadeiro: desigualdade
x < y //==> verdadeiro: menor que
x <= y //==> verdadeiro: menor ou igual a
x > y //==> falso: maior que
x >= y // ==> falso: maior ou igual a 
"two" ==  "three" //==> falso: as duas strings são diferentes
"two" > "three" //==>verdadeiro: "tw" é alfabeticamente maior que "th"
false == (x>y) //==> verdadeiro: falso é igual a falso

