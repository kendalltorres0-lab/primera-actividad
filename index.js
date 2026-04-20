
let num1=document.getElementById("num1")
let num2=document.getElementById("num2")
let num3=document.getElementById("num3")
let num4=document.getElementById("num4")
let num5
let button=document.getElementById("button")
button.addEventListener("click",respuesta)
function respuesta(){

num5= Number(num1.value) +  Number(num2.value) + Number(num3.value) + Number(num4.value) 

if (num5>=100){

alert ("El numero es mayor o igual a 100")



}

else {
    
    alert ("el numero es menor a 100")
}








}