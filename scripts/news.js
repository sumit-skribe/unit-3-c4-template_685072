// Ude Import export (MANDATORY)

import searchComp from "../components/searchComp.js";
import navbar from "../components/navbar.js";
import detailedNews from "../components/detailedNews.js";


document.querySelector('#navbar').innerHTML = navbar();
detailedNews();


searchComp();

