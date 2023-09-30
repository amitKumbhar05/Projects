const clk = document.querySelector('.clock');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
let intv;
start.addEventListener('click',()=>{
    const date = new Date();
    start.setAttribute('disabled','');
    intv = setInterval(()=>{
        const latestdate = new Date();
        const time = new Date(latestdate-date);
        const sec = time.getUTCSeconds().toString().padStart(2,'0');
        const min = time.getUTCMinutes().toString().padStart(2,'0');
        const hou = time.getUTCHours().toString().padStart(2,'0');
        clk.innerHTML = `${hou}:${min}:${sec}`
    },1000);
})

stop.addEventListener('click',(e)=>{
    clearInterval(intv);
    start.removeAttribute('disabled');
})

reset.addEventListener('click',()=>{
    clearInterval(intv);
    start.removeAttribute('disabled');
    clk.innerHTML = `00:00:00`
})


// setInterval(()=>{
//     const date = new Date 
//     const time = date.toLocaleTimeString()
//     clk.innerHTML = time;
// },1000)