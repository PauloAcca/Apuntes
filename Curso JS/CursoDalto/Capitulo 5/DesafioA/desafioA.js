const materias = {
    fisica: [90,7,3,"fisica"],
    datos: [20,7,3,"datos"],
    biologia: [90,6,3,"biologia"],
    programacion: [90,7,2,"programacion"],
    analisis: [50,7,3,"analisis"],
    algebra: [90,9,3,"algebra"],
    quimica: [90,7,3,"quimica"]
}

const aprobo = ()=>{
    for (materia in materias){
        
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2]

        console.log(materias[materia][3]);

        if (asistencias >= 90){
            console.log("%c Asistencia Aprobada","color:green");
        } else {
            console.log("%c Asistencia Desaprobada","color:red");
        }
        if (promedio >= 7){
            console.log("%c Promedio Aprobado","color:green");
        } else {
            console.log("%c Promedio Desaprobado","color:red");
        }
        if (asistencias >= 3){
            console.log("%c Tps Aprobados","color:green");
        } else {
            console.log("%c Tps Desprobados","color:red");
        }
    }
}

aprobo()