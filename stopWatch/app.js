const clk = document.querySelector('.clock');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
let intv;

// Format the time for display
function formatTime(date) {
  const sec = date.getUTCSeconds().toString().padStart(2, '0');
  const min = date.getUTCMinutes().toString().padStart(2, '0');
  const hou = date.getUTCHours().toString().padStart(2, '0');
  return `${hou}:${min}:${sec}`;
}

start.addEventListener('click', () => {
  const date = new Date();
  start.setAttribute('disabled', '');
  intv = setInterval(() => {
    const latestdate = new Date();
    const time = new Date(latestdate - date);
    document.title = formatTime(time);
    clk.innerText = formatTime(time);
  }, 1000);
});

stop.addEventListener('click', () => {
  clearInterval(intv);
  start.removeAttribute('disabled');
});

reset.addEventListener('click', () => {
  clearInterval(intv);
  start.removeAttribute('disabled');
  clk.innerText = '00:00:00';
});
