dinero = 3;
boleto = 0.9;

if (dinero >= boleto && dinero < (boleto*2)){
    alert("compraste un boleto y te sobro" + (dinero-boleto))
}
else if (dinero >= boleto*2 && dinero < (boleto*3)){
    alert("compraste dos boletos y te sobro" + (dinero-(boleto*2)))
}
else if (dinero >= boleto*3){
    alert("compraste dos boletos y te sobro " + (dinero-(boleto*2)) + ",regalarlo")
}
else {
    alert("no tenes money perro")
}