// Obtenir le chemin complet de l'URL actuelle
var currentPath = window.location.pathname;

// Sélectionner tous les liens dans la sidebar
var menuItems = document.querySelectorAll('.sidebar ul li a');

// Boucler sur les liens pour ajouter la classe 'active' à celui qui correspond au chemin actuel
menuItems.forEach(function(item) {
    // Obtenir le chemin relatif du lien
    var linkPath = new URL(item.href).pathname;

    // Comparer les chemins relatifs et ajouter la classe 'active' si c'est une correspondance
    if (currentPath === linkPath) {
        item.parentElement.classList.add('active');
    }
});
