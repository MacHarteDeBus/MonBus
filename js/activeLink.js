document.addEventListener('DOMContentLoaded', function() {
    // Obtenir le chemin complet de l'URL actuelle
    var currentURL = window.location.href;

    console.log("URL actuelle:", currentURL); // Log de l'URL actuelle pour débogage

    // Sélectionner tous les liens dans la sidebar
    var menuItems = document.querySelectorAll('.sidebar ul li a');

    // Boucler sur les liens pour comparer l'URL et ajouter la classe 'active'
    menuItems.forEach(function(item) {
        // Obtenir l'URL complète du lien
        var linkURL = new URL(item.href).href;

        console.log("URL du lien:", linkURL); // Log de l'URL du lien pour débogage

        // Comparer l'URL complète du lien avec l'URL actuelle
        if (currentURL === linkURL) {
            // Ajouter la classe 'active' si les URL correspondent
            item.parentElement.classList.add('active');
            console.log("Classe 'active' ajoutée à:", item.href); // Confirmation de l'ajout
        }
    });
});
