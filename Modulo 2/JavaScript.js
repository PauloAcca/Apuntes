let nombre = "Paulo";
let apellido = "Accardo";
let sueldoActual = 200000;
let porcentajeAumento = 50 ;
let calculoAumento = (sueldoActual * porcentajeAumento)/100;
let nuevoSueldo = sueldoActual + calculoAumento ;

console.log ("Hola, estimad@"+ " " + nombre + " " + apellido + "\nEn base a su sueldo actual:")
console.log ("$"+ sueldoActual)
console.log ("Ha recibido un aumento del " + porcentajeAumento + ":")
console.log ("$"+ calculoAumento)
console.log ("y su nuevo sueldo es de: $" + nuevoSueldo)