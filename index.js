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
