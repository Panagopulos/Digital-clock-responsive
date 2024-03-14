const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');

function updateClock () {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  if(h < 10 ) {
    h = '0' + h;
  }
  if(m < 10 ) {
    m = '0' + m;
  }
  if(s < 10 ) {
    s = "0" + s;
  }
  
  hoursEl.innerText = h;
  minutesEl.innerText = m;
  secondsEl.innerText = s;
  setTimeout(() => {
    updateClock();
  }, 1000)
}

updateClock();
