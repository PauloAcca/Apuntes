dineroRoberto = prompt("How much money you have Roberto?")


if (dineroRoberto >= 0.6 && dineroRoberto < 1){
    alert("Buy water ice cream")
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6){
    alert("Buy cream ice cream")
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    alert("Buy heladix ice cream")
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    alert("Buy heladovich ice cream")
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    alert("Buy helardo ice cream")
}
else if (dineroRoberto >= 2.9) {
    alert("Buy sprinkles ice cream or 1/4 ")
}
else {
    alert("No podes comprar nada")
}

dineroPedro = prompt("How much money you have Pedro?")

if (dineroPedro >= 0.6 && dineroPedro < 1){
    alert("Buy water ice cream")
}
else if (dineroPedro >= 1 && dineroPedro < 1.6){
    alert("Buy cream ice cream")
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7){
    alert("Buy heladix ice cream")
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8){
    alert("Buy heladovich ice cream")
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9){
    alert("Buy helardo ice cream")
}
else if (dineroPedro >= 2.9) {
    alert("Buy sprinkles ice cream or 1/4 ")
}
else {
    alert("No podes comprar nada")
}

dineroCofla = prompt("How much money you have Cofla?")
dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1){
    alert("Buy water ice cream")
    alert("And you have" + (dineroCofla - 0.6) + "left over")
}
else if (dineroCofla >= 1 && dineroCofla < 1.6){
    alert("Buy cream ice cream")
    alert("And you have" + (dineroCofla - 1) + "left over")
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("Buy heladix ice cream")
    alert("And you have" + (dineroCofla - 1.6) + "left over")
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert("Buy heladovich ice cream")
    alert("And you have" + (dineroCofla - 1.7) + "left over")
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert("Buy helardo ice cream")
    alert("And you have" + (dineroCofla - 1.8) + "left over")
}
else if (dineroCofla >= 2.9) {
    alert("Buy sprinkles ice cream or 1/4 ")
    alert("And you have " + (dineroCofla - 2.9) + " left over")
}
else {
    alert("No podes comprar nada")
}