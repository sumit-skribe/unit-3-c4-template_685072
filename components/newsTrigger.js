/*
    https://masai-mock-api.herokuapp.com/news/top-headlines?country=
    https://masai-mock-api.herokuapp.com/news?q=
*/

const newsTrigger = async ( url ) => 
{

    let response = await fetch(url);
    let {articles} = await response.json();

    return articles;
}

export default newsTrigger;