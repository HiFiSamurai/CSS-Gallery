// Card effects
$(document).on("click", ".cardBox", function (ev) {
    var el = $(this);
    var overlay = $(".cardOverlay")
    var target = overlay.find(".overlayContent");
    target.append(el.clone());                  // Copy contents into new box, which will undergo the transition
    target.css(el.position());                  // Move box to starting position above original box
    overlay.addClass("visible");

    el.addClass("overlayTarget");
    setTimeout(function () { target.addClass("active"); });     // Need to adjust properties in two steps, with slight delay after making visible
});

$(document).on("click", ".cardOverlay", function (ev) {
    var el = $(".overlayTarget");
    if (!el.length) return;

    var overlay = $(".cardOverlay");
    var target = overlay.find(".overlayContent");
    target.css(el.position());                  // Move overlayed box back to starting position
    target.removeClass("active");
    setTimeout(function () {
        el.removeClass("overlayTarget");
        overlay.removeClass("visible");
        target.empty();
        target.css({ top: "", left: "" });      // Reset position for proper transitioning after scrolling
    }, 300);
});
