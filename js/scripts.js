document.getElementById("hamburger-button").addEventListener('click', function() {
    let element = document.getElementById("hamburger-nav");
    if (element.style.display === 'none' || window.getComputedStyle(element).display === 'none') {
        element.style.display = 'flex';
    } else {
        element.style.display = 'none';
    }
})




/*
$(document).ready(function() {
    $('.menu-toggle').on('click', function() {
        console.log(document.getElementById("hamburger-nav").attributes);
        //$('nav').toggleClass('showing');
        if (document.getElementById("hamburger-nav").hasAttribute("hidden")) {
            console.log("Hidden");
        } else {
            console.log("Showing")
        }
    });
});
*/
