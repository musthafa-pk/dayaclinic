
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


function redirectToWhatsApp() {
    const phoneNumber = "919207229966"; // Replace with your clinic's WhatsApp number
    const message = `Hello, I would like to book an appointment. Here are my details:
Name: [Your Name]
Contact: [Your Phone]
Date: [Preferred Date]
Time: [Preferred Time]`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

function whatsappappointment(button) {
    const phoneNumber = "919207229966"; // Replace with your clinic's WhatsApp number
    
    const doctorName = button.getAttribute("data-doctor");

    const appointmentTime = button.getAttribute("data-time");

    const message = `Hello, I would like to book an appointment. Here are my details:
Doctor: ${doctorName}
Time: ${appointmentTime}
Name: [Your Name]
Contact: [Your Phone]
Date: [Preferred Date]`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');

}