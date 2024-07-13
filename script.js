const buttonDraw = document.querySelector(".draw-button")


function generateNumber () {

const min = Math.ceil(document.querySelector(".input-min").value)
const max = Math.floor(document.querySelector(".input-max").value)
const numberResult = document.querySelector(".result")


if(min >= max){

    alert("O valor minimo tem que ser MENOR que o valor máximo")
}
else{
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    numberResult.innerHTML = result
}





}


buttonDraw.addEventListener("click",generateNumber )


