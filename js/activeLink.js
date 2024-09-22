// Obtenir le chemin de l'URL actuelle sans le domaine
var currentPath = window.location.pathname;

// Sélectionner tous les liens dans la sidebar
var menuItems = document.querySelectorAll('.sidebar ul li a');

// Boucler sur les liens pour ajouter la classe 'active' à celui qui correspond au chemin actuel
menuItems.forEach(function(item) {
    // Comparer uniquement les chemins des URLs
    if (item.getAttribute('href') === currentPath) {
        item.parentElement.classList.add('active');
    }
});
