// Initialisation du compteur
let compteur = 0;
// Récupération des éléments du DOM
const pCompteur = document.getElementById('compteur')
const btnIncrement = document.getElementById('increment');
const btnDecrement = document.getElementById('decrement');
// Fonction pour mettre à jour l'affichage du compteur
function updateCompteur() {
	pCompteur.textContent = compteur;
}
// Fonction pour augmenter le compteur
function incrementCompteur() {
	compteur++;
	updateCompteur();
}
// Fonction pour diminuer le compteur
function decrementCompteur() {
	compteur--;
	updateCompteur();
}
// Ajout des événements aux boutons
btnIncrement.addEventListener('click', incrementCompteur);
btnDecrement.addEventListener('click', decrementCompteur);
// Initialisation de l'affichage
updateCompteur();
