// Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Merci pour votre message. Je vous répondrai bientôt.');
});

// Scroll to Top Button
let scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// Display current date and time
function updateClock() {
    const now = new Date();
    const clockDiv = document.getElementById('clock');
    clockDiv.innerHTML = now.toLocaleDateString() + " " + now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
