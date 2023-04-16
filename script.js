// Set the date we're counting down to
var countDownDate1 = new Date("June 2, 2023 1:00:00").getTime();
var countDownDate2 = new Date("June 6, 2023 1:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the distance from now to the countdown date
  var distance1 = countDownDate1 - now;
  var distance2 = countDownDate2 - now;

  // Calculate the days, hours, minutes and seconds remaining
  var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
  var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);

  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

  // Display the countdowns
  document.getElementById("countdown1").innerHTML = days1 + "d " + hours1 + "h "
  + minutes1 + "m " + seconds1 + "s ";

  document.getElementById("countdown2").innerHTML = days2 + "d " + hours2 + "h "
  + minutes2 + "m " + seconds2 + "s ";

  // If the countdown is finished, display a message
  if (distance1 < 0) {
    clearInterval(x);
    document.getElementById("countdown1").innerHTML = "EXPIRED";
  }

  if (distance2 < 0) {
    clearInterval(x);
    document.getElementById("countdown2").innerHTML = "EXPIRED";
  }
}, 1000);
