// Obtenir le chemin complet de l'URL actuelle
var currentPath = window.location.pathname;

// Sélectionner tous les liens dans la sidebar
var menuItems = document.querySelectorAll('.sidebar ul li a');

// Boucler sur les liens pour comparer l'URL et ajouter la classe 'active'
menuItems.forEach(function(item) {
    // Obtenir le chemin relatif du lien
    var linkPath = item.getAttribute('href');

    // Comparer le chemin de l'URL actuelle avec le chemin relatif du lien
    if (currentPath.includes(linkPath)) {
        // Ajouter la classe 'active' si l'URL actuelle contient le chemin du lien
        item.parentElement.classList.add('active');
    }
});
