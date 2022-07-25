function compararFinalString(word, ending) {
  let wordCortada = word.split("").reverse();
  let endingInversed = ending.split("").reverse();
  let boleanu = false;

  for (index = 0; index < ending.length; index += 1) {
    if (wordCortada[index] == endingInversed[index]) {
      boleanu = true;
    } else {
      boleanu = false;
    }
  }
  if (boleanu == true) {
    return true;
  } else {
    return false;
  }
}

console.log(compararFinalString("trybe", "be"));
