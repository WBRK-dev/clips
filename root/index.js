$("hero #audiocontrol").click(function() {
    if ($(this).hasClass("enabled")) {
        $(this).removeClass("enabled");
        document.querySelector("video").muted = true;
    } else {
        $(this).addClass("enabled");
        document.querySelector("video").muted = false;
    }
});

document.querySelector("video").addEventListener("contextmenu", function(e) {e.preventDefault()});

$(function() {
    fetch("clips/metadata.json")
    .then(r => r.json())
    .then(r => {
        let keys = Object.keys(r);
        console.log(keys);
        let selectedFolder = keys[Math.round((keys.length - 1) * Math.random())];

        fetch(`clips/${selectedFolder}/metadata.json`)
        .then(j => j.json())
        .then(j => {
            let clipKeys = Object.keys(j);
            let selectedClip = clipKeys[Math.round((clipKeys.length - 1) * Math.random())];

            $("video").attr("src", `clips/${selectedFolder}/${selectedClip}.mp4`);
        });
    });
});