const suma = (numero1,numero2)=>{
    return parseInt(numero1) + parseInt(numero2);
}
const resta = (numero1,numero2)=>{
    return parseInt(numero1) - parseInt(numero2);
}
const multiplicacion = (numero1,numero2)=>{
    return parseInt(numero1) * parseInt(numero2);
}
const division = (numero1,numero2)=>{
    return parseInt(numero1) / parseInt(numero2);
}
alert("que queres hacer?")
var desicion = prompt("sumar:1 , restar:2 , multi:3 , divi:4, pot:5, raizcua:6, raizcub:7");
var num1 = prompt("primer numero");
var num2 = prompt("segundo numero");

if(desicion == 1){
    let resultado = suma(num1,num2);
    alert(resultado)
}
else if(desicion == 2){
    let resultado = resta(num1,num2);
    alert(resultado)
}
else if(desicion == 3){
    let resultado = multiplicacion(num1,num2);
    alert(resultado)
}
else if(desicion == 4){
    let resultado = division(num1,num2);
    alert(resultado)
}

