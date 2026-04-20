
let edad=document.getElementById("edad")
let button=document.getElementById("button")
button.addEventListener("click",respuesta)
function respuesta(){   

if (edad.value>=18){

alert ("Usted es mayor de edad")



}

else{
    alert ("Usted es menor de edad")
}

}
