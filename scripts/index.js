// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import searchComp from "../components/searchComp.js";
import navbar from "../components/navbar.js";
import newsDisplay from "../components/newsDisplay.js";

document.querySelector('#navbar').innerHTML = navbar();
newsDisplay(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`);

let queryStringArr = ['in', 'us', 'ch', 'uk', 'nz'];
let btnArr = document.querySelectorAll('#sidebar > center > button');
let lenOfBtnArr = btnArr.length;

for(let i = 0; i < lenOfBtnArr; i += 1)
{

    let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${queryStringArr[i]}`;
    btnArr[i].addEventListener('click',function() 
    {
        newsDisplay(url);
    });

}

searchComp();