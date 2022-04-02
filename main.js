/* 
armar un simulador interactivo la estructura final de tu proyecto integrador
*/

 alert("simulador interactivo");
const ESPACIO =(" ");

let plata = parseInt(prompt("¿cuanto dinero necesitas?"));
let cuotas = parseInt(prompt("¿Cual es la cantidad de cuotas?"));
let Cuotas_por_mes = plata / cuotas;
let interes = Cuotas_por_mes * 21/100;
let final_por_mes = Cuotas_por_mes + interes;
alert(final_por_mes);

{
    if (cuotas == 12){
        alert(`tu cuotas mensuales serian de ${ESPACIO}` + taza_del_21)
        
    }
    else if(cuotas == 24){
        alert(`tu cuotas mensuales serian de ${ESPACIO}` + taza_del_21)
        
    }
    else if(cuotas == 36){
        alert(`tu cuotas mensuales serian de ${ESPACIO}` + taza_del_21)
        
    }
    else if(cuotas == 48){
        alert(`tu cuotas mensuales serian de ${ESPACIO}` + taza_del_21)
        
    }
    else{
        alert(" solo prestamos en 12 , 24 , 36 o 48 cuotas. porfavor ingrese un campo valido");
    } 
}



