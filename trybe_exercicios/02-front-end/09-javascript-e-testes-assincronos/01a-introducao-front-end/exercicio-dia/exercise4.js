const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = (callback1) =>`A temperatura de Marte é: ${callback1()}`; // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo

setTimeout(()=>console.log(sendMarsTemperature(getMarsTemperature)),messageDelay())