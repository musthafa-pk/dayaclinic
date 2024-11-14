
window.addEventListener('load', function() {
    AOS.init({
        duration:1000,
        once:false,
        offset:50
    },
);
    // Hide the loader
    document.getElementById('loader').style.display = 'none';
    // Show the content
    document.getElementById('content').style.display = 'block';
});

document.addEventListener('click', function(event) {
    var isClickInsideMenu = document.getElementById('navbarNav').contains(event.target);
    var isClickOnToggleButton = document.getElementById('navbarToggler').contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggleButton) {
        var navbarCollapse = new bootstrap.Collapse(document.getElementById('navbarNav'), {toggle: false});
        navbarCollapse.hide();  // Close the menu
    }
});

