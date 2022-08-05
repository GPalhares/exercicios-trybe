const buttonSubmit = document.getElementById("button-submit");
const nome = document.getElementById("nome-input");
const email = document.getElementById("email-input");

const data = document.getElementById("data-input").DatePickerX.init();

const validation = new JustValidate("#formulario");

validation
  .addField("#nome-input", [
    {
      rule: "required",
      errorMessage: "Name is required",
    },
    {
      rule: "minLength",
      value: 3,
    },

    {
      rule: "maxLength",
      value: 30,
    },
  ])
  .addField("#email-input", [
    {
      rule: "required",
      errorMessage: "Email is required",
    },
    {
      rule: "email",
      errorMessage: "Email is invalid!",
    },
  ]);
