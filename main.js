var files = ['unsplash1.jpg', 'Foggy%20Forest.jpg', 'Forest%20in%20Mist.jpg', 'Isles.jpg', 'Lake.jpg', 'unsplash2.jpg', 'unsplash3.jpg', 'unsplash4.jpg'];

var body = document.getElementById("body");
var mirror = document.getElementById("mirror");
var bg = "url(photos/" + files[Math.floor(Math.random() * files.length)] + ")";
body.style.backgroundImage = bg;
mirror.style.backgroundImage = bg;
