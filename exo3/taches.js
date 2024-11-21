// Récupération des éléments du DOM
const inputTask = document.getElementById('taskInput');
const btnAddTask = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
// Fonction pour ajouter une tâche
function addTask() {
    const taskValue = taskInput.value.trim(); // Je récupère la valeur du champ et supprime les espaces inutiles

    if (taskValue !== "") { // Je vérifie juste si le champ n'est pas vide...
        // Création d'un nouvel élément <li></li>
        const newTask = document.createElement('li');
        newTask.textContent = taskValue; // Je défini le contenu texte de la tâche avec ce qui a été saisi dans le champ

        // Ajoute la nouvelle tâche à la liste
        taskList.appendChild(newTask);

        // Réinitialise le champ
        taskInput.value = "";
    } else {
        // Tape une tâche ducon
        alert("Veuillez rentrer une tâche !");
    }
}
// Ajout de l'événement au bouton "Ajouter"
btnAddTask.addEventListener('click', addTask);
// Ajout de la tâche en appuyant sur "Entrée"
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask(); // Appele la fonction addTask() si la touche entrée est pressé
    }
});
