function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDaysOfTheMonth() {
  const decemberDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const monthDaysList = document.querySelector("#days");
  for (let i = 0; i < decemberDaysList.length; i += 1) {
    const days = decemberDaysList[i];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    //usei parte do código do gabarito pois estava confuso se realmente era pra fazer multiplos ifs

    if (days === 24 || days === 31) {
      // Caso o dia for 24 ou 31
      dayListItem.className = "day holiday"; // Atribua a classe 'day holiday' ao li criado
      monthDaysList.appendChild(dayListItem); // Anexe o li criado como elemento filho do ul
    } else if (days === 4 || days === 11 || days === 18) {
      // Caso o dia for 4, 11 ou 18
      dayListItem.className = "day friday"; // Atribua a classe 'day friday' ao li criado
      monthDaysList.appendChild(dayListItem);
    } else if (days === 25) {
      // Caso o dia for 25
      dayListItem.className = "day holiday friday"; // Atribua a classe 'day holiday friday' ao li criado
      monthDaysList.appendChild(dayListItem);
    } else {
      // Caso seja qualquer outro dia adicione a classe day ao li criado
      dayListItem.className = "day";
      monthDaysList.appendChild(dayListItem);
    }
  }
}
createDaysOfTheMonth();

const botaoPai = document.getElementsByClassName("buttons-container");
const botaoFeriado = document.createElement("button");
botaoFeriado.innerHTML = "Feriados";
botaoFeriado.id = "btn-holiday";

botaoPai[0].appendChild(botaoFeriado);

const feriados = document.getElementsByClassName("holiday");

let count = feriados.length;

botaoFeriado.addEventListener("click", function () {
  if (count == feriados.length) {
    for (let i = 0; i < feriados.length; i += 1) {
      feriados[i].style.color = "red";

      count = 0;
    }
  } else {
    for (let i = 0; i < feriados.length; i += 1) {
      feriados[i].style.color = "#666";

      count = feriados.length;
    }
  }
});

const botaoFriday = document.createElement("button");
botaoFriday.innerHTML = "Sexta-Feira";
botaoFriday.id = "btn-friday";
botaoPai[0].appendChild(botaoFriday);

const fridays = document.getElementsByClassName("friday");
let count1 = 0;
botaoFriday.addEventListener("click", function () {
  if (count1 == fridays.length) {
    for (let i = 0; i < fridays.length; i += 1) {
      fridays[i].style.color = "blue";

      count1 = 0;
    }
  } else {
    for (let i = 0; i < fridays.length; i += 1) {
      fridays[i].style.color = "#666";

      count1 = fridays.length;
    }
  }
});
