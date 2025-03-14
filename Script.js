// Tableau de couleurs
const colors = ['#993434', 'blue', 'green', 'yellow', 'purple', 'orange','#038338','#df8004de','gold','indigo','olive','solomo'];

// Sélectionner l'élément à modifier
const textElement = document.getElementById('text');

// Fonction pour changer la couleur du texte
let colorIndex = 0;
setInterval(() => {
    textElement.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length; // Retourne à 0 lorsque la fin du tableau est atteinte
}, 1000); // Change la couleur toutes les 1 seconde
