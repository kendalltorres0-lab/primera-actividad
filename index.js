
let num1=document.getElementById("num1")
let num2=document.getElementById("num2")
let num3
let button=document.getElementById("button")
button.addEventListener("click",respuesta)
function respuesta(){

num3= Number(num1.value) +  Number(num2.value)

alert ("El resultado es"+"   " +num3)







}