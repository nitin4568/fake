// ============================
// SELECT ELEMENTS
// ============================
const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');
const sidebar = document.querySelector('#sidebar');
const themeToggle = document.querySelector('#theme-toggle');
const bookingForm = document.querySelector('#bookingForm');
const faqBox = document.querySelectorAll('.faq-box');


// ============================
// MENU + SIDEBAR TOGGLE
// ============================
if (menuBtn) {
    menuBtn.addEventListener('click', () => {

        // icon toggle
        menuBtn.classList.toggle('fa-times');

        // navbar toggle (mobile)
        if (navbar) {
            navbar.classList.toggle('active');
        }

        // sidebar toggle
        if (sidebar) {
            sidebar.classList.toggle('active');
        }
    });
}


// ============================
// CLOSE MENU ON SCROLL
// ============================
window.addEventListener('scroll', () => {
    if (menuBtn) menuBtn.classList.remove('fa-times');
    if (navbar) navbar.classList.remove('active');
    if (sidebar) sidebar.classList.remove('active');
});


// ============================
// DARK / LIGHT MODE
// ============================
if (themeToggle) {
    themeToggle.addEventListener('click', () => {

        document.body.classList.toggle('dark');

        // Font Awesome icon toggle
        if (document.body.classList.contains('dark')) {
            themeToggle.classList.replace('fa-moon', 'fa-sun');
        } else {
            themeToggle.classList.replace('fa-sun', 'fa-moon');
        }
    });
}


// ============================
// FAQ TOGGLE
// ============================
faqBox.forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('active');
    });
});


// ============================
// BOOKING FORM
// ============================
if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();

        alert("✅ Your Bus Ticket Booking Has Been Confirmed Successfully!");

        bookingForm.reset();
    });
}