// && == and
// || == or
// ! == not

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

const currentHour = 20;
let message = "";

if (currentHour >= 22){
    message = "Não deveriamos Comer nada está tarde"
} 

else if(currentHour >= 18 && currentHour < 22){
    message = "Rango da noite vamos jantar :D"}

else if (currentHour >= 14 && currentHour < 18){
    message = "Vamos fazer um bolo para o café da tarde?"
}

else if (currentHour > 11 && currentHour < 14){
    message = "Hora do Almoço! IHUUU"
}

else if (currentHour > 4 && currentHour < 11){
    message = "Hmm cheiro de café recém passado"
}

// console.log(message)


// weekDay = "quarta-feira"

// if(weekDay == "segunda-feira"|| weekDay == "terça-feira"|| weekDay =="quarta-feira"|| weekDay =="quinta-feira"|| weekDay == "sexta-feira"){
//     console.log("Oba ,mais um dia de aprendizado na trybe !")
// }

// else{
//     console.log("Ufaa Descanso merecido!!")
// }

const squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false
