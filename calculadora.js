<<<<<<< HEAD
var args = process.argv.slice(2);
var x = args[0];
var y = args[2];
var operator = args[1];
function evaluate(param1, param2, operator) {
return eval(param1 + operator + param2);
=======
const soma = () => {
    const num1 = parseInt(args[1]);
    const num2 = parseInt(args[2]);
    if (!isNaN(num1) && !isNaN(num2)) {
        console.log(num1 + num2);
    } else {
        console.log('Os argumentos não são números válidos.');
    }
};

const sub = () => {
    const num1 = parseInt(args[1]);
    const num2 = parseInt(args[2]);
    if (!isNaN(num1) && !isNaN(num2)) {
        console.log(num1 - num2);
    } else {
        console.log('Os argumentos não são números válidos.');
    }
};

const args = process.argv.slice(2);

switch (args[0]) {
    case 'soma':
        soma();
        break;
        
    case 'sub':
        sub();
        break;
        
    default:
        console.log('Operação não suportada:', args[0]);
>>>>>>> parent of 05996da... Merge pull request #1 from Erickjbf/funcionalidades
}
if ( console.log( evaluate(x, y, operator) ) ) {}