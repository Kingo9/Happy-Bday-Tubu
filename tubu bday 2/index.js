var oak = document.getElementById('persona');
var elm = new Audio('song.mp3');

function playOakAudio() {
    oak.play();
}

function playElmAudio() {
    elm.play();
}

var Element = {
    left: function() {
        setTimeout(function() {
            alert('WOWWWWW, princess TUBU just touched me');
            location.replace("left.html");
        }, 4000);

        playOakAudio();

    },
    right: function() {
        setTimeout(function() {
            alert('Why did you touch me, I am the great Suga');
            location.replace("right.html");
        }, 4000);

        playOakAudio();
    },
    removeEl: function() {
        var element = document.getElementById('jokerLetter');
        element.parentNode.removeChild(element);
    },
    sLetter: function() {
        playElmAudio();

        document.getElementById('jokerLetter').insertAdjacentHTML("beforebegin", "<p id='joker'> Tabassum, <br> <br> &nbsp&nbsp&nbsp&nbsp  happy birthday! 🎂 I hope today brings you all the joy you deserve. You've been amazing, and we’ve prepared a little something special for you—just a small surprise to show how much you mean to us. Keep an eye out for it. Until then, enjoy your day to the fullest! <a href='https://youtu.be/eSY2EzCjYWc' target='_blank'>video</a> and that’s it. Take this and have a good birthday Tabassum! <br><br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp At Your Side, <br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Suga<3 </p>");
        Element.removeEl();

    }
}