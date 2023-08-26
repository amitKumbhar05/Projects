const text = document.getElementById('text');
const output = document.getElementById('output');
let max_char = text.getAttribute('maxlength')
output.innerText= `0/${max_char}`;
text.addEventListener('input',(a)=>
{
    let textcount = a.target.value;
    output.innerText = `${textcount.length}/${max_char}`;
    if(textcount.length==max_char)
    {
        text.style.borderColor='#4361ee';
    }
    else
    {
        text.style.borderColor='#fff'
    }
});