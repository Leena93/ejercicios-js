//const = 'Godofredo';
function getFullName (name, lastName) {
    return `${name} ${lastName}`;
}
console.log(getFullName('pepito', 'gonzalez'));



//
//
function isItCharging (batteryLevel, isCharging){
    if (isCharging){
       return 'cargando' (batteryLevel);
    }

}//ejercicio corregido

const batteryLevel = 100;
const isCharging = true;

if (isCharging){
    console.log('cargando (${batteryLevel}%));
} else if (!isCharging && batteryLevel <=5){
    console.log('Batería crítica: el móvil se apagará pronto');
    else if (!isCharging && batteryLevel <=20) {

    }
}

function phoneIsCharging (isCharging, batteryLevel){
    phoneIsCharging (true, 100)
}


//Ejercicio 2

const age = 10; // edad
const withAdult = false; //booleano
const rating = 'TP'; //otros valores
if (rating === 'TP'){
    console.log('Puede entrar');
}else if(rating === '+12' && age >= (12 || age >7 && withAdult)){
 } else if(rating ==='+16' && age>= 16){
    console.log('puede entrar');
 }else if(rating === '+18'){
    console.log('puede entrar');
} else if (rating !== 'TP' && rating !=='+12' && rating !=='+16' && rating !=='+18'){


}else {
    console.log ('No puede entrar');

}
function checkMovieEntrance (age, withAdult, rating){
    checkMovieEntrance (10, false, 'TP')
}

