function detailedNews()
{
    let article = JSON.parse(localStorage.getItem('news'));
    const urlToImage = article.urlToImage;
    const title = article.title;
    const description = article.description;


    let urlToImage_ = document.createElement('img');
    urlToImage_.src = urlToImage;
    let title_ = document.createElement('h3');
    title_.innerText = title;
    let description_ = document.createElement('p');
    description_ = description;

    document.querySelector('#detailed_news').append(urlToImage_, title_, description_);
}


export default detailedNews;