//Arithemetic operators
const [a, b, c] = ['10', '20', 10];
document.write(a + b + '<br>');
document.write(a + c + '<br>');
document.write(b + c + '<br>');

document.write(a - b + '<br>');
document.write(a - c + '<br>');
document.write(a * b + '<br>');
document.write(a / c + '<br>');
document.write((a % b) + '<br>');
document.write(a ** b + '<br>');

// type conversion
const [x, y] = ['10', 10];
document.write(Number(x) + y + '<br>');
document.write(parseInt(x) + y + '<br>');

// Getting numbers from prompt and type conversion
let num1, num2, num3;
num1 = Number(prompt('Enter Number1'));
num2 = Number(prompt('Enter Number1'));
num3 = num1 + num1;
document.write(num3);
