const btn = document.querySelector('.btn');
const name = document.querySelector('.name')
const email = document.querySelector('.email');
const num = document.querySelector('.num');
const list = document.querySelector('.list');

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    const newele = document.createElement('li');
    newele.innerHTML = 
    `<div class=" bg-red-400 my-10 p-3 rounded-md text-xl font-semibold">
    ${name.value} <br>
    ${num.value} <br>
    ${email.value}
    </div>`;
    // console.log(newele);
    list.appendChild(newele);

})
