function verificarNota(notaCanditada) {
  if (notaCanditada >= 80) {
    console.log("Parabéns vôce foi aprovado");
  } else if (notaCanditada < 80 && notaCanditada >= 60) {
    console.log("Você esta na nossa lista de espera");
  } else {
    console.log("Você foi Reprovado!");
  }
}

verificarNota(20);
verificarNota(80);
verificarNota(60);
