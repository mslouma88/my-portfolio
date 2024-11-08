document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Récupère le bouton
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Affiche ou cache le bouton en fonction du défilement de la page
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = 'block'; // Affiche le bouton
    } else {
        scrollToTopBtn.style.display = 'none'; // Cache le bouton
    }
};

// Fonction de défilement vers le haut
scrollToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Défilement fluide
    });
};



/*
// Display current date and time
function updateClock() {
    const now = new Date();
    const clockDiv = document.getElementById('clock');
    clockDiv.innerHTML = now.toLocaleDateString() + " " + now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
*/