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



document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, this, process.env.REACT_APP_EMAILJS_USER_ID)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('message-success').style.display = 'block';
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById('message-error').style.display = 'block';
        });

    // Optionnel : réinitialiser le formulaire après envoi
    this.reset();
});

// Ajoute un scrolling fluide pour les liens du menu qui pointent vers des ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();  // Empêche le comportement par défaut du lien

        // Récupère la section ciblée par le lien
        const target = document.querySelector(this.getAttribute('href'));

        // Active un défilement fluide vers la section
        target.scrollIntoView({
            behavior: 'smooth'  // Comportement de défilement fluide
        });
    });
});
