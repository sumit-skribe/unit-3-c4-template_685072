import newsTrigger from "./newsTrigger.js";

const newsDisplay = async ( url ) =>
{
    document.querySelector('#results').innerHTML = null;
    const newsArr = await newsTrigger(url);
    newsArr.forEach(({urlToImage, title, content, description}) =>
    {

        const newsDiv = document.createElement('div');
        newsDiv.setAttribute('class','news');
        newsDiv.style.cursor = 'pointer';

        const imageContainer = document.createElement('div');
        const image = document.createElement('img');
        image.src = urlToImage;
        imageContainer.append(image);

        const titleContentContainer = document.createElement('div');
        const title_ = document.createElement('h3');
        title_.innerText = title;
        const content_ = document.createElement('p');
        content_.innerText = content;
        titleContentContainer.append(title_, content_);

        newsDiv.append(imageContainer, titleContentContainer);
        newsDiv.addEventListener('click', function ()
        {
            
            let news = 
            {
                urlToImage: urlToImage,
                title : title,
                description: description
            };
            localStorage.setItem('news', JSON.stringify(news));
            window.location.href = 'news.html';

        });
        document.querySelector('#results').append(newsDiv);

    });
};

export default newsDisplay;