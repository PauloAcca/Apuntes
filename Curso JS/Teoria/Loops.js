let estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]

function saludarEstudiantes(estudiante){
    return("Hola, ${estudiante}");
}

// FOR

for (let i = 0; i< estudiante.lenght; i++){
    saludarEstudiantes(estudiantes[i])
}

// FOR OF

for(let estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

//FOR IN (recorre el array pero nos muetra la pociscion no el valor como el of)

for (estudiante in estudiantes){
    saludarestudaintes(estudiante);
}

// WHILE

while(estudiantes.lenght > 0){
    let estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}

// DO WHILE

do {
    saludarEstudiantes(estudiante)
    let estudiante = estudiantes.shift();
}
while(estudiantes.lenght > 0)