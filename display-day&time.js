// find the name of today/ weekday
let today = new Date();
let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

day = day[today.getDay()];
// console.log(day);
const displayer1 = document.getElementById('today');
displayer1.innerHTML = day;

// knowledge : 
// 0=sunday 1=monday 2=tuesday 3=wednesday 4= thursday 5=friday 6=satuday

// from numeric value - try to get the name of the weekday :Home Work

//display the numeric value of the weekday
// const displayer = document.getElementById('today')
// solution 1: using innerHTML
/////displayer.innerHTML = weekday
// solution 2
/// make displayer empty
//solution 1: to make empty
// while (displayer.firstChild) {
//   displayer.removeChild(displayer.firstChild)
// }
///solution 2L to make empty
// displayer.innerHTML = ''
// const txtNode = document.createTextNode(6);
// displayer.appendChild(txtNode);

//display the day name of the weekday


/* for(child of displayer.childNodes){
  displayer.removeChild(child)
} */ // try to explain later.

//

// find the current time

// knowledge - 10PM 22
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
  return strTime;
}

// console.log(formatAMPM(new Date));
let getTime = document.getElementById('time');
getTime.innerHTML = formatAMPM(new Date);