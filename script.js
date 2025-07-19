document.addEventListener('DOMContentLoaded', function() {
    // --- Bootstrap Scrollspy Initialization ---
    // This will automatically update the nav links based on scroll position.
    // The `data-bs-spy="scroll"` and `data-bs-target=".navbar"` attributes in the HTML body tag handle this.

    // --- Close Navbar on Link Click (for mobile view) ---
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Check if the navbar is currently collapsed (mobile view)
            if (navbarCollapse.classList.contains('show')) {
                // Programmatically click the navbar-toggler button to close the menu
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false // We are just closing it, not toggling
                });
                bsCollapse.hide();
            }
        });
    });

    // --- Dynamic Navbar Background on Scroll ---
    const header = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            // Add a class to make the background more solid when scrolled
            header.classList.add('scrolled');
        } else {
            // Remove the class when at the top
            header.classList.remove('scrolled');
        }
    });
});
