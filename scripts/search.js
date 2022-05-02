// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import newsDisplay from "../components/newsDisplay.js";
import navbar from "../components/navbar.js";

document.querySelector('#navbar').innerHTML = navbar();

newsDisplay(`https://masai-mock-api.herokuapp.com/news?q=${localStorage.getItem('searchKeyword')}`);


let search_input = document.querySelector('#search_input');
search_input.addEventListener('keypress', function(event)
{

    if (event.key === "Enter") 
    {
        event.preventDefault();
        newsDisplay(`https://masai-mock-api.herokuapp.com/news?q=${search_input.value}`);
    }
});