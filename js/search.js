const searchForm = document.querySelector(".js-searchForm");
const searchInput = searchForm.querySelector("input");


function searchResult(event){
    event.preventDefault();
    const searchText = searchInput.value; 
    const googleUrl = `https://www.google.co.kr/search?q=${searchText}&ei=zXmbYM-ME92Hr7wPiM-s8AM&oq=${searchText}&gs_lcp=Cgdnd3Mtd2l6EANQAFgAYKgJaAFwAHgAgAGFAYgBhQGSAQMwLjGYAQCqAQdnd3Mtd2l6wAEB&sclient=gws-wiz&ved=0ahUKEwiPp7T6xcPwAhXdw4sBHYgnCz4Q4dUDCA4&uact=5`;
    window.open(googleUrl, "_self");
}

function startSearch(){
    searchForm.addEventListener("submit", searchResult);
}

function init(){
    startSearch();
};
init();