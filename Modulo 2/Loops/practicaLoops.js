// DESAFIO 1

// let nombrePrecios = [["html5", 4000],["css3" , 5000],["javascript", 10000],["react",7000],["nodejs", 15000]];
// let cursosATomar = ["HTML5" , "CSS3", "JAVASCRIPT","NODEJS"]

// function montoAPagar (cursos , cursosDeseados){ 
//    let precioFinal = 0 ;
//    for (let i = 0 ; i < cursosATomar.length ; i++){
//         for (let j = 0; j < nombrePrecios.length; j++){
//             if (cursosATomar[i] == nombrePrecios[j][0].toUpperCase()) {
//                 precioFinal += nombrePrecios[j][1]
//             }
//         }
//    }
//    return precioFinal ;
// }

// function informacion (nombre,apellido,cursos,cursosDeseados){
//     console.log("Estimado " + nombre +" "+ apellido + ", en funcion de los cursos seleccionados:")
//     for (let i = 0; i < cursosATomar.length; i++) {
//         console.log(i+1 + ".- " + cursosATomar[i])  
//     }
//     console.log("El monto total a pagar es de:" + " $" + montoAPagar(cursos,cursosDeseados))
//     console.log("Bienvenido a la gran aventura Digital House.")
// }

// console.log(informacion("paulo", "accardo", nombrePrecios,cursosATomar))

// ----------------------------------------------------------------------------------------

// DESAFIO 2 
let graduadosdeHTML5 = "30 45 25 34 18 23 16 50 72 70" 
let graduadosdeCSS3 = "50 45 71 34 23 45 65 75 63 43 74 70"
let graduadosdeJAVASCRIPT = "70 65 58 45 23 57 34 17 72"
let graduadosdeNODEJS = "45 56 73 34 65 72 70 32"

let arrayHTML5 = graduadosdeHTML5.split(" ")
let arrayCSS3 = graduadosdeCSS3.split(" ")
let arrayJAVASCRIPT = graduadosdeJAVASCRIPT.split(" ")
let arrayNODEJS = graduadosdeNODEJS.split(" ")
function promedio (array){
    let resultado = 0;
    for (let i = 0; i < array.length; i++) {
        resultado += Number(array[i])
    }
    
    return resultado/array.length
}
function promediosGraduados (html,css,java,node,numero){
    switch (numero) {
        case 1:
            return "El promedio es: " + promedio(html)
            break;
        case 2:
            return "El promedio es: " + promedio(css)
            break;
        case 3:
            return "El promedio es: " + promedio(java)
            break;
        case 4:
            return "El promedio es: " + promedio(node)
            break;
        default:
            return "Los valores asignados son :\n1 = HTML5\n2 = CSS3\n3 = JAVASCRIPT\n4 = NODEJS"
            break;
    }
}

console.log(promediosGraduados(arrayHTML5,arrayCSS3,arrayJAVASCRIPT,arrayNODEJS,2))