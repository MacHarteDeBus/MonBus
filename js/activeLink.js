// Obtenir l'URL actuelle
var currentLocation = window.location.href;

// Sélectionner tous les liens dans la sidebar
var menuItems = document.querySelectorAll('.sidebar ul li a');

// Boucler sur les liens pour ajouter la classe 'active' à celui qui correspond à l'URL
menuItems.forEach(function(item) {
    if (item.href === currentLocation) {
        item.parentElement.classList.add('active');
    }
});
