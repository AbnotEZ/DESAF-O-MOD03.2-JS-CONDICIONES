

let cant1 = document.querySelector("#cantidad1")
let cant2 = document.querySelector("#cantidad2")
let cant3 = document.querySelector("#cantidad3")
let calc = document.querySelector("#calc")
let total = document.querySelector("#total")

calc.onclick = function (){
    let suma =  (Number(cant1.value) + Number(cant2.value) + Number(cant3.value))
    total.innerHTML = suma
    let faltan = (Number(10) - suma)
    let muchos = (suma - Number(10))


    if(suma == 10){ total.innerHTML = "Perfecto! llevas 10 stickers 😀"; }
    else if (suma < 10 && suma != 0){ total.innerHTML = `❌ Te falta una cantidad de ${faltan} para poder llevartelos !!! ❌`  }
    else if (suma > 10){ total.innerHTML = `HEYYYY! elegiste ${muchos} stickes más de los permitidos 😡😡😡` }
    else if (suma == 0){ total.innerHTML = "No te gusta ninguno 😭😭😭?"; }
}
