var countDownDate = new Date("Feb 19, 2022 15:55:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  //var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var hours = Math.floor(distance  / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("conteo").innerHTML = "La transmisión en vivo iniciará aquí en " + hours + ":"
  + minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0') + " horas.";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("conteo").innerHTML = '<iframe src="https://players.brightcove.net/1872491369001/default_default/index.html?videoId=6131589653001" allowfullscreen="" allow="encrypted-media" width="100%" height="400"></iframe>';
  }
}, 1000);