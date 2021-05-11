const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const getHour = date.getHours();
  const getMinute = date.getMinutes();
  const getSecond = date.getSeconds();
  clockTitle.innerText = `${getHour > 9 ? `${getHour}` : `0${getHour}`}:${
    getMinute > 9 ? `${getMinute}` : `0${getMinute}`
  }:${getSecond > 9 ? `${getSecond}` : `0${getSecond}`}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
