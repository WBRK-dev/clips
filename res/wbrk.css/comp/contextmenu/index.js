let contextmenu = {
    "asign": (elem, id, callback, click) => {
        let eventListener = "contextmenu";
        if (click) {eventListener = "click"}
        elem.addEventListener(eventListener, function (e) {
            $("contextmenus contextmenu").hide();
            $("contextmenus contextmenu#" + id).show();
            let Y = ((e.clientY + 300) > window.innerHeight) ? (window.innerHeight - 300) : e.clientY;
            let X = ((e.clientX + 300) > window.innerWidth) ? (window.innerWidth - 300) : e.clientX;
            $("contextmenus").css("--top", Y + "px");
            $("contextmenus").css("--left", X + "px");
            $("contextmenus").show();
            e.preventDefault();
            $(`contextmenus contextmenu#${id} contextmenu-item`).off("click");
            $(`contextmenus contextmenu#${id} contextmenu-item`).click(function() {
                callback(elem, $(this).attr("data-action"));
            });
        });
        if (elem.querySelector("[contextmenu-show]")) {
            elem.querySelectorAll("[contextmenu-show]").forEach(element => {element.addEventListener("click", function(e) {
                console.log(e);
                $("contextmenus").hide();
                $("contextmenus contextmenu").hide();
                $("contextmenus contextmenu#" + id).show();
                let Y = ((e.clientY + 300) > window.innerHeight) ? (window.innerHeight - 300) : e.clientY;
                let X = ((e.clientX + 300) > window.innerWidth) ? (window.innerWidth - 300) : e.clientX;
                $("contextmenus").css("--top", Y + "px");
                $("contextmenus").css("--left", X + "px");
                $("contextmenus").show();
                console.log("test", $("contextmenus"));
                $(`contextmenus contextmenu#${id} contextmenu-item`).off("click");
                $(`contextmenus contextmenu#${id} contextmenu-item`).click(function() {
                    callback(elem, $(this).attr("data-action"));
                });
            })});
        }
    },
    "initAutoHider": () => {
        $("body").click(function (e) {
            let target = e.target; let looping = true;
            while (looping) {
                if (target.tagName === "CONTEXTMENUS") {
                    setTimeout(() => {
                        $("contextmenus").hide();
                    }, 100);
                    looping = false;
                } else if (target.tagName === "BODY") {
                    $("contextmenus").hide();
                    looping = false;
                } else if (target.getAttribute("contextmenu-show") === "") {
                    looping = false;
                } else {
                    target = target.parentNode;
                }
            }
        });
    }
}
