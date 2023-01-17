personas = [
    {nombre:"Paulo", edad:19, hora:"3AM"},
    {nombre:"Rocio", edad:18, hora:"2AM"},
    {nombre:"Eustaquio", edad:17, hora:"3AM"},
    {nombre:"Marcela", edad:18, hora:"2AM"},
    {nombre:"Alejandro", edad:3, hora:"10AM"},
]

for(persona of personas){
    if(persona.edad>=18){
        alert(persona.nombre);
    }  
};
for(persona of personas){
    if(persona.hora == "2AM" && persona.edad>=18){
        alert("la persona que no paga es: " + persona.nombre)
        break
    }
}
