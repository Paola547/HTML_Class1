let numero = parseFloat(prompt("Dame un número"));
let numero2 = parseFloat(prompt("Dame otro número"));

//console.log(typeof (numero + numero2));
// alert(numero + numero2);

let _suma = numero + numero2;

let numeros =[_suma,"Paola",true,false,"Hola" ];
//Los arrays tienen un indice y comienza en 0
console.log(numeros[0]);

for (let index = 0; index <numeros.length; index++){
    
    console.log (numeros[index])
    document.write (numeros[index]+ "<br>");


    const element = numeros[index];
}

let variable = true;
if (variable) { 
document.write(variable);
}
if (variable) {
    document.write("Mi variable es true");
}else{
    document.write("Mi variable es false")
}
   

if(condition) {

} else {
   
        switch(dia) {
            case "Lunes":
                console.log("El día es lunes");
                break;
            case "Martes":
                console.log("El día es marte");
                break;
                
                default:
                    console.log("Es otro día de la semana")
        }
    
}
//el ciclo "for" es un bucle. El scoup es el alcance, se marca con llaves
