export function asign(elem, state, callback) {
    if (state) {elem.classList.add("active")}
    elem.addEventListener("click", function() {
        if (this.classList.contains("active")) {
            this.classList.remove("active");
            callback(elem, false);
        } else {this.classList.add("active"); callback(elem, true)}
    });
}