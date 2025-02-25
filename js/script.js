$(document).ready(function() {
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I’ll get back to you soon.');
        $(this).trigger('reset');
    });

    // Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);
    });
});
