/* 
armar un simulador interactivo la estructura final de tu proyecto integrador
*/

alert("simulador interactivo");
const ESPACIO =(" ");
function taza_del_21(){
    let interes = 21;
    let cualculo_interes = plata / cuotas * interes / 100;
}
let plata = parseInt(prompt("¿cuanto dinero necesitas?"))
let cuotas = parseInt(prompt("¿Cual es la cantidad de cuotas?"));
if (cuotas === 12){
    alert(`tu cuotas mensuales serian de ${ESPACIO}` + taza_del_21)
    
}
else{
    alert(" solo prestamos en 12 , 24 , 36 o 48 cuotas. porfavor ingrese un campo valido");
}