let clickCount = 0
const buttonIncrement = document.getElementById('increment')
const buttonDecrement = document.getElementById('decrement')
const contador = document.getElementById('counter')


buttonIncrement.addEventListener('click',()=>{
    clickCount+=1
    contador.innerHTML = clickCount
})

buttonDecrement.addEventListener('click',()=>{
    clickCount-=1
    contador.innerHTML = clickCount
})