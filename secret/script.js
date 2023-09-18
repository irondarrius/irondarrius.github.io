document.addEventListener("DOMContentLoaded", function() {
    var backgroundImage = document.getElementById("background-image");
    var jumpScareImage = document.getElementById("jump-scare-image");
    var jumpScareAudio = document.getElementById("jump-scare-audio");

    function showScare() {
        jumpScareImage.style.display = "block";
        jumpScareAudio.muted = false; // Unmute before playing
        jumpScareAudio.play(); // Play the audio

        window.setTimeout(function() {
            jumpScareAudio.muted = true;
            jumpScareImage.style.display = "none";
        }, 7000);
    }

    backgroundImage.addEventListener("click", function(event) {
        var clickX = event.clientX;
        var clickY = event.clientY;

        if ((clickX >= 500 && clickY <= 534) && (clickY >= 461 && clickY <= 491)) {
            window.setTimeout(function() {
                showScare();
            }, 1000);
        }
    });

/*    // Attach the click event listener
    window.setTimeout(function() {
        showScare();
    }, 45000);
    */
});