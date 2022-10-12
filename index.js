var convidado = 'teste'; //prompt('Informe o convidado');
var noivo1 = 'teste'; //prompt('Informe o nome do noivo 1');
var noivo2 = 'teste'; //prompt('Informe o nome do noivo 1');
var data = '10/02/2022'; //prompt('Informe a data');
var hora = '18:30'; //prompt('Informe a hora');

var texto = `Caro(a) ${convidado}!

Você está convidado(a) para o casamento de ${noivo1} e ${noivo2}, a ser realizado no dia ${data}, às ${hora} horas.

Contamos com a sua presença!

Atenciosamente,
os noivo(a)s
`;
// debugger;

var paragrafo = document.getElementById('paragrafo');
paragrafo.innerText = texto;

console.log(texto);

//String
var nome = 'teste';
//var nome2= "teste"
var nome3 = `teste`;
console.log(typeof nome3);

//Number
var numero = 2;
var numeroDecimal = 23.6;
console.log(typeof numero);
console.log(typeof numeroDecimal);

//Boolean
var verdadeiro = true;
var falso = false;
console.log(typeof verdadeiro);
console.log(typeof falso);

//Null
var semValor = null;
console.log(typeof semValor);

//Undefined
var indefinida;
console.log(typeof indefinida);

//Soma
var soma = 1 + 2;
console.log(soma);
console.log(Number('23.3') + 12);
console.log(parseInt('23') + 12);
console.log(parseFloat('23') + 12);

//Subtração
console.log(1 - 2);

//Resto
console.log(10 % 2);

//Atribuição
var atribuicao = 0;
console.log(atribuicao);
atribuicao += 100;
console.log(atribuicao);
atribuicao -= 20;
console.log(atribuicao);
atribuicao *= 2;
console.log(atribuicao);
atribuicao = atribuicao * 2;
console.log(atribuicao);

var numero1 = 20;
var numero2 = 10;

// console.log(numero1 == numero2);
// console.log(numero1 === numero2);

// console.log(numero1 != numero2);
// console.log(numero1 !== numero2);

console.log(numero1 >= numero2);

// Operadores lógicos
var verdadeiro = true;
var falso = false;

console.log(verdadeiro || falso);
console.log(verdadeiro && falso);

console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));

console.log(Boolean('teste'));
console.log(Boolean(1));

console.log(Boolean(null));
console.log(!Boolean(null));
console.log(!!Boolean(null));

var nome = 'Thais';
var apelido = '';
var sobrenome = 'Bertoldo';

console.log(apelido || sobrenome || nome);
console.log(apelido && sobrenome && nome);

//Unarios
var add = 0;
add++;
add++;
add--;
add = -add;
console.log(add);

// var resultado = confirm('Deseja Sair');
// console.log(resultado);

var h1 = document.createElement('h1');
h1.innerText = 'Titulo';
document.body.appendChild(h1);
