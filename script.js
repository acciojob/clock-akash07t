//your JS code here. If required.

let clock = document.getElementById('timer');
let info = new Date();
let day = info.getDate();
let month = info.getMonth()+1;
let year = info.getFullYear();
var time = info.getHours() + ":" + info.getMinutes() + ":" + info.getSeconds();

clock.innerHTML = `${day}/${month}/${year},${time}`;

