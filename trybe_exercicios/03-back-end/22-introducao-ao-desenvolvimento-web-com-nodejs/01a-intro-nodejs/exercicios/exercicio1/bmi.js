const readLine = require('readline-sync')

const calcIMC = ()=>{
    const weight = readLine.question("What’s your weight?");
 const height = readLine.question("What’s your height?");
 
 const imc = weight/(height*100*2)
 console.log(imc*100)
}
calcIMC()

 module.exports = (calcIMC)