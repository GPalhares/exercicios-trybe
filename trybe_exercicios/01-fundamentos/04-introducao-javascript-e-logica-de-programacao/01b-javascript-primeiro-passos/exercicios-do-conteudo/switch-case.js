let estadoPessoa = 'aprovada';

switch (estadoPessoa) {
  case 'aprovada':
    console.log('Parabéns vôce foi aprovado');
    break;
  case 'lista':
    console.log('Você esta na nossa lista de espera');
    break;
  case 'reprovada':
    console.log('Você foi Reprovado!');
    break;
    default: console.log('Não se Aplica') 
}
