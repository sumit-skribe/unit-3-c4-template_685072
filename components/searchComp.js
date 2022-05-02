function searchComp()
{
    let search_input = document.querySelector('#search_input');
    search_input.addEventListener('keypress', function(event)
    {

        if (event.key === "Enter") 
        {
            event.preventDefault();
            localStorage.setItem('searchKeyword', search_input.value);
            window.location.href = './search.html';
        }
    });
}


export default searchComp;