const body = document.querySelector(".wrap");

const imgNumber = 6;



function paintImg(imgNumber){
    const img = new Image();
    img.src =`img/${imgNumber+1}.jpg`;
    body.prepend(img); 
    img.classList.add("bgImg");
}

function genRandom(){
    const number = Math.floor(Math.random()*imgNumber)
    return number; 
}

function init(){
    const radomNumber = genRandom();
    paintImg(radomNumber)
}
init();