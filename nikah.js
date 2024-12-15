document.querySelector("#close").addEventListener
("click", function(){
  document.querySelector(".popup").style.display =
   "none"
});

var musik = new Audio();
musik.src = "love-wte.mp3";
function mainkan(){
  var musikbtn = musik;
  musikbtn.play()
}

var countDownDate = new Date("Jan 17, 2025 07:00:00").getTime();
var x = setInterval(function(){
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance/(1000*60*60*24));
  var hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
  var minutes = Math.floor((distance % (1000*60*60))/(1000*60));
  var seconds = Math.floor((distance%(1000*60))/1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  
 
},1000);
//font-family: "Playwrite US Trad Guides", serif;
//font-weight: 400;
//font-style: normal;
//--------------------------------------------------------------------
