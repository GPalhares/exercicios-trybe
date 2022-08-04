const buttonSubmit = document.getElementById("button-submit");
const nome = document.getElementById("nome-input");
const email = document.getElementById("email-input");

// buttonSubmit.addEventListener("click", function (event) {
//   event.preventDefault();
// });

buttonSubmit.addEventListener("click", function (event) {
  console.log(nome.value.length);
  if (
    nome.value.length > 10 &&
    nome.value.length < 40 &&
    email.value.length > 10 &&
    email.value.length < 50
  ) {
    alert("Obrigado por Participar do formulario da trybe ");
  } else {
    event.preventDefault();
    alert("Preencha os dados corretamente por favor! ");
  }
});
