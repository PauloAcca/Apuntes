class App{
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.instalada = false;
        this.iniciada = false;
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert(`app instalada correctamente`)
        }else{
            alert(`app no instalada`)
        } 
    }
    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert(`app desinstalada correctamente`)
        }else{
            alert(`error en la desinstalacion`)
        }
    }
    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert(`app abierta correctamente`)
        }else{
            alert(`no se puede abrir`)
        }
    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert(`app cerrada correctamente`)
        }else{
            alert(`error al cerrar`)
        }
    }
    appInfo(){
        return `
        descargas: ${this.descargas}<br>
        puntuacion: ${this.puntuacion}<br>
        peso:${this.peso}<br>
        `
    }
}

app = new App("16.000","5 estrellas","900mb");
app2 = new App("1.000","4 estrellas","400mb");
app3 = new App("6.000","4.5 estrellas","100mb");
app4 = new App("23.000","4.8 estrellas","1gb");
app5 = new App("900","5 estrellas","250");
app6 = new App("17","3.7 estrellas","522mb");
app7 = new App("42.981","2.9 estrellas","723mb");

document.write(`
	${app.appInfo()} <br>
	${app2.appInfo()} <br>
	${app3.appInfo()} <br>
	${app4.appInfo()} <br>
	${app5.appInfo()} <br>
	${app6.appInfo()} <br>
	${app7.appInfo()} <br>
	`);