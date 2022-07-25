function checkPalindromo(str) {
  let strReverse = str.split("").reverse().join("");
  if (str === strReverse) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindromo("arara"));
console.log(checkPalindromo("teste"));
console.log(checkPalindromo("banana"));
