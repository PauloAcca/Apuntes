let numeroalumnos = prompt ("Cuantos alumnos son?") 
let alumnos = [];

for(i = 0;i < numeroalumnos; i++){
    alumnos[i] = [prompt("Nombre del alumno "+ (i+1)),0]
}
const tomarAsistencias = (nombre,p)=>{
    let presencia = prompt(nombre);
    if(presencia == "p" || presencia == "P"){
        [alumnos[p][1]++]
    }
}

for(i = 0; i < 30; i++){
    for (alumno in alumnos){
        tomarAsistencias(alumnos[alumno][0],alumno);
    }
}

for (alumno in alumnos){
    let resultado = `${alumnos[alumno][0]}:<br>
    _____asistencias:${alumnos[alumno][1]} <br>
    _____inasistencias:${30 - alumnos[alumno][1]}`;
    if ((30 - alumnos[alumno][1]) > 18){
        resultado += "REPROBADO POR INASISTENCIAS<br><br>";
    }
    else {
        resultado += "<br><br>"
    }

    document.write(resultado)
}

