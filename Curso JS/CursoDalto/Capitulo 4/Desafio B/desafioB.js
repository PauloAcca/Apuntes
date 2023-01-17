class Materia {
    constructor(nombre,profesor, alumnos){
        this.nombre = nombre ;
        this.profesor = profesor ;
        this.alumnos = alumnos ;
    } 
    infoMateria(){
        return `
        Nombre: ${this.nombre}<br>
        Profesor: ${this.profesor}<br>
        Alumnos: ${this.alumnos}<br>
        `
    }
}

const algebra = new Materia(algebra)
let materia = (mat) =>{
    let mat = prompt("que clase buscas?")
    document.write(clase.infoMateria)
    
}
materia();
