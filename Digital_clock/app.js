const clk = document.querySelector('.clock')

setInterval(()=>{
    const date = new Date 
    const time = date.toLocaleTimeString()
    clk.innerHTML = time;
},1000)