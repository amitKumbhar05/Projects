const btn = document.querySelector('.btn');
const content = document.querySelector('.content')

let arr;
let i=0;
// https://api.quotable.io/quotes
// https://type.fit/api/quotes
fetch('https://api.quotable.io/quotes')
.then((res)=>res.json())
.then((res)=>{
    arr=[...res.results]
})

const cont = ()=>{
    content.innerText = `${arr[i].content}`;
    // console.log(i,"         ",arr[i].text);  
    i++;
    i=i%arr.length
}

const change = ()=>{
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);

    content.style.color = `rgb(${a},${b},${c})`;
    document.querySelector('body').style.backgroundColor = `rgb(${a},${b},${c})`;
    btn.style.color = `rgb(${a},${b},${c})`;
}

btn.addEventListener('click',()=>{
    cont();
    change();
})