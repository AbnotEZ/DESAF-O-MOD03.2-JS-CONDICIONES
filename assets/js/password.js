let num1 =  document.querySelector("#num1")
let num2 =  document.querySelector("#num2")
let num3 =  document.querySelector("#num3")
let total = document.querySelector("#total")
let calc = document.querySelector("#calc")
let img = document.querySelector("#img")

calc.onclick = function (){
    let pass = (num1.value + num2.value + num3.value)
    total.innerHTML = pass

if (pass == 911){
    total.innerHTML = 'Password 1 esta correcto !!!'
    audio = new Audio("./assets/mp3/meme1.mp3");
    audio.play();
    img.src = ("https://th.bing.com/th/id/R.dab7ccd86cdfffce0d918612c54e6eae?rik=uQCJ%2bKXQHff5Pw&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fbcy%2fEkL%2fbcyEkLAqi.png&ehk=yl9G33ao5f5VJXFceTFNqTCk1CtzkLjQ3I9lnLMk0JU%3d&risl=&pid=ImgRaw&r=0")

} else if (pass == 714){
    total.innerHTML = 'Password 2 esta correcto !!!'
    audio = new Audio("./assets/mp3/meme1.mp3");
    audio.play();
    img.src = ("https://th.bing.com/th/id/R.dab7ccd86cdfffce0d918612c54e6eae?rik=uQCJ%2bKXQHff5Pw&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fbcy%2fEkL%2fbcyEkLAqi.png&ehk=yl9G33ao5f5VJXFceTFNqTCk1CtzkLjQ3I9lnLMk0JU%3d&risl=&pid=ImgRaw&r=0")
} else{
    total.innerHTML = 'Password incorrecto !!!'
    audio = new Audio("./assets/mp3/meme2.mp3");
    audio.play();
    img.src = ("https://th.bing.com/th/id/R.23a6ff33c10e208f66cddf9124aacae9?rik=hPSvW5yjkuocvQ&riu=http%3a%2f%2fimagenpng.com%2fwp-content%2fuploads%2f2015%2f03%2fcandado-1.png&ehk=2N6r%2bBTPbzeYyD%2fom2KWoREcsvNg%2bnndEhvdMPOnEyE%3d&risl=&pid=ImgRaw&r=0")
}
}

