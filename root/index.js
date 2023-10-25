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
            $("hero button").attr("shareurl-videolink", `https://wbrk-dev.github.io/clips/clips/${selectedFolder}/${selectedClip}.mp4`);
        });

        fetch(`clips/channels.json`)
        .then(j => j.json())
        .then(j => {
            console.log(keys);
            keys.forEach(key => {
                channelLabel = j[r[key].channel].label;

                $("main .grid").append(`<a class="item" href="clipset/?set=${key}"><img src="clips/${key}/thumbnail.png"><p>${r[key].label}</p><p class="author">${channelLabel}</p></a>`);
            });
        });
    });
});