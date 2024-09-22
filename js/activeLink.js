// Obtenir le chemin actuel sans le nom de domaine
var currentPath = window.location.pathname;

// Sélectionner tous les liens de la sidebar
var menuItems = document.querySelectorAll('.sidebar ul li a');

// Boucler sur les liens pour comparer l'URL et ajouter la classe 'active'
menuItems.forEach(function(item) {
    // Comparer le chemin du lien avec le chemin de la page actuelle
    if (item.getAttribute('href') === currentPath) {
        item.parentElement.classList.add('active');
    }
});
