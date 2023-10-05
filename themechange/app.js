const svg = document.querySelector('.svg');

if(localStorage.getItem('darkth'))
{
    document.body.classList.add('change-theme');
}

svg.addEventListener('click',()=>{
    if(!document.body.classList.contains('change-theme'))
    {
        document.body.classList.add('change-theme');
        localStorage.setItem('darkth','change-theme')
    }
    else if(document.body.classList.contains('change-theme'))
    {
        document.body.classList.remove('change-theme');
        localStorage.removeItem('darkth');
    }
})
