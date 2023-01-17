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
const potencia = (numero1, exp)=>{
    let result = parseInt(numero1);
    for (var i = 0;i < exp; i++){
        result *= parseInt(numero1);
    }
    return result;
}
const raiz2 = (numero1)=>{
    return Math.sqrt(parseInt(numero1))
}
const raiz3 = (numero1)=>{
    return Math.cbrt(parseInt(numero1))
}
alert("que queres hacer?")
var desicion = prompt("sumar:1 , restar:2 , multi:3 , divi:4, pot:5 , raizcua:6 , raizcub:7");
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
else if(desicion == 5){
    let resultado = potencia(num1, num2);
    alert(resultado)
}
else if(desicion == 6){
    let resultado = raiz2(num1);
    alert(resultado)
}
else if(desicion == 7){
    let resultado = raiz3(num1);
    alert(resultado)
}
