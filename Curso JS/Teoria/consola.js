--------------Funciones de registro------------------------
console.  :

assert();
// aparece un mensaje de error en la consola si la afirmacion es falsa. si la afirmacion es verdadera, no aparecera nada.

clear();
// limpia la consola

error();
// muestra msj de error en la consola

info();
// emite un msjs informativo en la consola. (i)

log();
// Muestra un msj en la consola.

table();
// esta funcion toma un argumento obligatorio: Data, que debe ser un array o un objeto.

warm(); 
// imprime un msj de advertencia en la consola

dir():
// despliega una lista interactiva de las propiedades del objeto javascrip especificado


-----------Funciones de conteo-------------------------------------

count()
// Registra el numero numero de veces que se llama a count()

countReset()
// Resetea el contador de count

-----------Funciones de agrupacion------------------------------

group() 
// Crea un nuevo grupo en linea en el registro de la consola web.

groupEnd()
// Remueve un grupo en linea en el registro de la consola web.

groupCollapsed()
// Crea un grupo en lienea pero contraido, el usuario debe expandirlo para verlo.

------------Funciones de temporizacion-----------------------------

time()
// Inicia un temporizador

timeLog()
// Registra el valor actual del temporizador

timeEnd()
// Detiene y Registra el valor final del temporizador



----------Darle estilos a la consola-----------

Por ejemplo:
console.log("%crancio", "color:red; background:black;")