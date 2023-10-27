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

const div = () => {
    const num1 = parseInt(args[1]);
    const num2 = parseInt(args[2]);
    if (!isNaN(num1) && !isNaN(num2)) {
        console.log(num1 / num2);
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
    
    case 'div':
        div();
        break;
        
    default:
        console.log('Operação não suportada:', args[0]);
}