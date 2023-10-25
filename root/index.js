$("hero #audiocontrol").click(function() {
    if ($(this).hasClass("enabled")) {
        $(this).removeClass("enabled");
        document.querySelector("video").muted = true;
    } else {
        $(this).addClass("enabled");
        document.querySelector("video").muted = false;
    }
});

document.querySelector("video").addEventListener("contextmenu", function(e) {e.preventDefault()})