var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
]

// FILTER (Te regresa todos los articulos que cumplen la condicion)

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
})

// FIND (Parecido a FILTER pero te regresa el primer articulo que cumple)

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
})

// MAP (Buscar sobre el Array y crea uno nuevo con lo que pedis)

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
})

// ForEach (te devuelve todos los nombres pero no crea otro array solo los filtra y tampoco modifica el principal)

articulos.forEach(function(articulo){
    return(articulo.nombre);
})

// SOME (Te devulve true or false, sobre el parametro que pongas, si se cumple o no)

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
})

// REDUCE (Recorre el array y devuelve un unico valor, recibe dos parametros acumulador y elemento actual
//          el acumulador acumula cada elemento que va pasando)

let suma = articulos.reduce(function(acum,num){
    return acum + num.costo ; 
});

// ------------------TRANSFORMADORES--------------------

pop()
// saca el ultimo elemento del array y lo muestra
shift()
// igual que pop pero elimina el primero
Push()
// agrega un elemento al final del array y te muestra la posicion o la cantidad 
// de elementos que tiene ahora
Reverse( )
// invierte el orden del array
unShift()
// hace lo mismo que push solo que agrega al principio
sort()
// ordena los elementos alfabeticamente o de menor a mayor
splice(posicion-donde-empezar, num-de-elementos-a-borrar, elementos-para-agregar)

// --------------------ACCESORES------------------------

join(con-que-queres-separarlos)
// convierte los elementos en una cadena de texto
slice(inicio, final)
// nos retorna los elementos que estan en el intervalo que pusimos
include()
// igual que index of pero retorna un booleano, true si esta, false si no
indexOf()
// busca un elemento en el array y retorna su posicion sino un -1
lasIndexOF()
// igual que index of pero empieza buscando de atras




