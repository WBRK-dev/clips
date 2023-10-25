// function show() {
//     if ($("popups").css("display") !== "none") {
//         $("popups popup").addClass("hide");
//         setTimeout(() => {
//             $("popups popup").hide();
//             $("popups popup").removeClass("hide");
//             $("popups popup#" + id).show();
//         }, 500);
//     } else {
//         $("popups popup").hide();
//         $("popups popup#" + id).show();
//         $("popups").show();
//     }
// }
//
// export function hide() {
//     $("popups popup").hide();
//     $("popups").hide();
// }
//
// export function initHideButtons() {
//     $("popups popup [popups-hide]").click(() => { popups() });
// }

let popups = {
    "show": (id) => {
        if ($("popups").css("display") !== "none") {
            $("popups popup").addClass("hide");
            setTimeout(() => {
                $("popups popup").hide();
                $("popups popup").removeClass("hide");
                $("popups popup#" + id).show();
            }, 500);
        } else {
            $("popups popup").hide();
            $("popups popup#" + id).show();
            $("popups").show();
        }
    },
    "hide": () => {
        $("popups popup").hide();
        $("popups").hide();
    }
}

$(function() {
    document.querySelector("popups").addEventListener("click", function(e) {
        if (e.target.tagName === "POPUPS") {
            popups.hide();
        }
    })
});