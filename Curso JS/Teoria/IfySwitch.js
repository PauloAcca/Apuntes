var op1 = "tijera";
var op2 = "papel";
var op3 = "piedra";

function resultado (player, computer){
    if (player == op1 && computer == op2){
        return ("ganaste")
    }
    else if (player == op1 && computer == op3) {
        return ("perdiste")
    }
    else if (player == op2 && computer == op1){
        return ("perdiste")
    }
    else if (player == op2 && computer == op3){
        return ("ganaste")
    }
    else if (player == op3 && computer == op1){
        return ("ganaste")
    }
    else if (player == op3 && computer == op2){
        return ("perdiste")
    }
    else {
        return (empate)
    }
}

var numero = 1;

switch (numero){
    case 1:
        return("Soy un uno");
        break;
    case 10:
        return("soy un 10");
        break;
    case 100:
        return("soy un 100")
        break;
    default:
        return("no soy nada");


}