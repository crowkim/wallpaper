const form = document.querySelector(".js-form"),
    input = form.querySelector("input");
    greeting = document.querySelector(".js-greetings")

const userLS = "currentUser";
const show = "showing";

function saveName(text){
    localStorage.setItem(userLS, text)
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(show);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(show)
    greeting.classList.add(show)
    greeting.innerText = `Hello ${text}`
}    

function loadName(){
    const currentUser = localStorage.getItem(userLS);
    if(currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();