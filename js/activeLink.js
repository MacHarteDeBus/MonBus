// Obtenir l'URL complète actuelle
var currentURL = window.location.href;

// Sélectionner tous les liens de la sidebar
var menuItems = document.querySelectorAll('.sidebar ul li a');

// Boucler sur tous les liens
menuItems.forEach(function(item) {
    // Comparer l'URL actuelle avec l'URL du lien (href)
    if (currentURL.includes(item.href)) {
        // Ajouter la classe 'active' si l'URL actuelle correspond
        item.parentElement.classList.add('active');
    }
});
