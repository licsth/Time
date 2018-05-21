var files = ['unsplash1.jpg', 'Foggy%20Forest.jpg', 'Forest%20in%20Mist.jpg', 'Isles.jpg', 'Lake.jpg', 'Yosemite%203.jpg', 'unsplash2.jpg', 'unsplash3.jpg', 'unsplash4.jpg'];

var body = document.getElementById("body");
body.style.backgroundImage = "url(../photos/" + files[Math.floor(Math.random() * files.length)] + ")";

var inp = document.getElementById('dest');

// Set the date we're counting down to
var countDownDate;

function setDest(){
    countDownDate = new Date(document.getElementsByTagName("input")[0].value).getTime();
}

// Update the count down every 1 second
var x = setInterval(function() {
    
    if(countDownDate == null){
        document.getElementById("timer").innerHTML = "";
    }
    else{
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    document.getElementById("timer").innerHTML = "0d 0h 0m 0s";
  }
    }
}, 1000);