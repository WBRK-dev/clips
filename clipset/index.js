function playpauseclip(elem) {
    if ($(elem).hasClass("enabled")) {
        $(elem).removeClass("enabled");
        elem.parentNode.querySelector("video").pause();
    } else {
        $(elem).addClass("enabled");
        elem.parentNode.querySelector("video").play();
    }
}

$(function() {
    $("hero video").attr("src", `../clips/${setid}/full.mp4`);
    fetch(`../clips/${setid}/metadata.json`)
    .then(r => r.json())
    .then(r => {
        let keys = Object.keys(r);

        keys.forEach(key => {
            let clipfile = r[key].file;

            $("main .grid").append(`<div class="item"><div class="videowrapper"><video src="../clips/${setid}/${clipfile}" loop></video><div class="videobutton nobackground" id="sharebutton" data-pos="top-left"><button class="share" onclick="sharepopup(this)" shareurl-videolink="https://wbrk-dev.github.io/clips/clips/${setid}/${clipfile}"><i class="fi fi-sr-share"></i>Share</button></div><div class="videobutton" id="playbutton" data-pos="center" data-size="big" onclick="playpauseclip(this)"><i class="fi fi-sr-play" id="disabled"></i><i class="fi fi-sr-pause" id="enabled"></i></div></div><p>${r[key].title}</p></div>`);
        });
    });
});