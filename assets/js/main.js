// Progress bar functionality
const progressBar = $("#progress");

window.onload = function() {
    setTimeout(progressBarSetup, 50);
};

function progressBarSetup() {
    initializeProgressElement();
    $(document).on("scroll", function() {
        progressBar.attr({ value: getCurrentScrollPosition() });
    });
    $(window).on("resize", initializeProgressElement);
}

function getCurrentScrollPosition() {
    return $(window).scrollTop();
}

function initializeProgressElement() {
    let navbarHeight = $("#navbar").outerHeight(true);
    progressBar.attr({
        max: getDistanceToScroll(),
        value: getCurrentScrollPosition(),
    });
}

function getDistanceToScroll() {
    return $(document).height() - $(window).height();
}

// Initialize Bootstrap tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
