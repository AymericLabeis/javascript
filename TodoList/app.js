const inputTodo = document.getElementById('inputTodo');
const inputModal = document.getElementById('inputModal');
const modal = document.querySelector('.modal');


function addModal() {
    modal.style.display = 'block';
    inputModal.value = "";
}

function cancelModal() {
    modal.style.display = 'none';
    inputModal.value = "";
}

function addTache() {
    const newTache = inputModal.value.trim();
    const liste = document.querySelector('.liste');
    const newLi = document.createElement('li');
    const newText = document.createElement('span');
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');
    const input = document.createElement('input');


    if (newTache === "") {
        alert("Veuillez entrer une tâche.");
        return;
    }

    newText.className = 'span-text';
    newText.textContent = newTache;

    // input checkbox
    input.setAttribute('type', 'checkbox');
    input.addEventListener('click', tacheFaite);
    
    // Bouton supprimer
    deleteButton.textContent = 'Supr';
    deleteButton.onclick = function () {
        newLi.remove();
    };

    // Bouton modifier
    editButton.textContent = 'Modif';
    editButton.onclick = function () {
        modal.style.display = 'block';
        inputModal.value = newText.textContent;
        newLi.remove();
    };

    newLi.appendChild(input);
    newLi.appendChild(newText);
    newLi.appendChild(deleteButton);
    newLi.appendChild(editButton);
    liste.appendChild(newLi);

    cancelModal(); 
}
function tacheFaite(e){
    e.target.parentNode.classList.toggle('finDeTache')
  }
// Recherche de tâches
inputTodo.addEventListener('input', recherche);

function recherche() {
    const filter = inputTodo.value.trim().toUpperCase();
    const allLi = document.querySelectorAll('.liste li');
    const allTitles = document.querySelectorAll('.liste li .span-text');

    allLi.forEach((li, i) => {
        const searchLi = allTitles[i].innerText.toUpperCase();
        if (searchLi.includes(filter)) {
            li.style.display = "flex";
        } else {
            li.style.display = "none";
        }
    });
}
