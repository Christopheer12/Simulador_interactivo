/* 
armar un simulador interactivo la estructura final de tu proyecto integrador
*/

 
const ESPACIO =(" ");
function tazaDel21(){
let plata = parseInt(prompt("¿cuanto dinero necesitas?"));
let cuotas = parseInt(prompt("¿Cual es la cantidad de cuotas?"));
let cuotas_por_mes = plata / cuotas;
let interes = cuotas_por_mes * 21/100;
let final_por_mes = cuotas_por_mes + interes;

    if (cuotas == 12){
        alert(`tu cuotas mensuales serian de ${ESPACIO}` + final_por_mes);
        
    }
    else if(cuotas == 24){
        alert(`tu cuotas mensuales serian de ${ESPACIO}` + taza_del_21);
        
    }
    else if(cuotas == 36){
        alert(`tu cuotas mensuales serian de ${ESPACIO}` + taza_del_21);
        
    }
    else if(cuotas == 48){
        alert(`tu cuotas mensuales serian de ${ESPACIO}` + taza_del_21);
        
    }
    else{
        alert(" solo prestamos en 12 , 24 , 36 o 48 cuotas. porfavor ingrese un campo valido");
    } 
}


alert("simulador interactivo");


tazaDel21();
