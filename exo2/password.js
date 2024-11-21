// Mot de passe correct
const correctPassword = "kenzasuck13122004";
// Récupération des éléments du DOM
const checkBtn = document.getElementById('checkButton');
const message = document.getElementById('message');
// Fonction pour vérifier le mot de passe
function checkPassword() {
	const mdp = document.getElementById('passwordInput').value;

	// Si le superbe mot de passe est correct
	if (mdp === correctPassword) {
		message.textContent = "Mot de passe correct !";
		message.style.color = "green";
	} else {
		// Sinon il est renié du Nirvana
		message.textContent = "Mot de passse incorrect..."
		message.style.color = "red";
	}
}
// Ajout de l'événement au bouton
checkBtn.addEventListener('click', checkPassword);