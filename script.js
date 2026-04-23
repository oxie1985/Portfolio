var i = 0;
var txt = 'projects'; /* The text */
var speed = 300; /* The speed/duration of the effect in milliseconds */

function typeWriter(){
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


typeWriter();

