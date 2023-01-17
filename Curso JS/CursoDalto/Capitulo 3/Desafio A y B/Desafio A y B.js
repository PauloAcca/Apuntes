class celulares {
    constructor(marca,color,peso,resolucion,camara,ram){
        this.marca = marca;
        this.color = color;
        this.peso = peso;
        this.resolucion = resolucion ;
        this.camara = camara ;
        this.ram = ram ;
        this.encendido = false;
    }
    presionarencendido(){
        if(this.encendido == true){
            alert("celular prendido")
            this.encendido = true;
        }
        else{
            alert("celular apagado")
            this.encendido = false;
        }
    }
    reiniciarCelular(){
        if(this.encendido == true){
            alert("celular reiniciado")
        } else {
            alert("el celular esta apagado")
        }
    }
    tomarFoto(){
        alert(`has tomado una foto a una resolucion de: ${this.camara}`)
    }
    grabarVideo(){
        alert(`has grabado un video en ${this.camara}`)
    }
    infoCelular(){
        return `
        marca: ${this.marca}<br>
        color: ${this.color}<br>
        peso: ${this.peso}<br>
        pantalla: ${this.pantalla}<br>
        camara: ${this.camara}<br>
        ram: ${this.ram}<br>
        `
    }
}
const A2100 = new celulares("nokia", "negro",100, 240, 24, 3);
const Redmi6Pro = new celulares("xiaomi", "gris", 110, 240, 32, 4);
const S6 = new celulares("samsung","negro", 90, 300, 24, 4)

class celularesAltaGama extends celulares{
    constructor(marca,color,peso,resolucion,camara,ram,rdce){
        super(marca,color,peso,resolucion,camara,ram);
        this.resolucionCamaraExtra = rdce;
    }
    camaraLenta(){
        alert(`estas grabando super lento a ${this.camara}`);
    }
    reconocimientoFacial(){
        alert(`desbloqueaste tu celular con la cara`);
    }
    infoAltaGama(){
        return this.infocelular + `resolucion Camara Extra: ${this.resolucionCamaraExtra}`;
    }
}

const iphone13 = new celularesAltaGama("iphone", "celeste","50g", "full HD", "100mpx", "8gb", "200mpx")
const zip4 = new celularesAltaGama("samsung", "amarillo","20g", "full HD 4K", "150mpx", "16gb", "400mpx")