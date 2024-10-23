const inputTodo = document.getElementById('inputTodo');
const inputModal = document.getElementById('inputModal');
const inputModalEdit = document.getElementById('inputModalEdit');
const modal = document.getElementById('modal');
const modalEdit = document.getElementById('modalEdit');
let currentTache = null;   


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
    const input = document.createElement('input');
    const newText = document.createElement('span');
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');
    

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
        modalEdit.style.display = 'block';
        inputModalEdit.value = newText.textContent; 
        currentTache = newText; 
    };

    newLi.appendChild(input);
    newLi.appendChild(newText);
    newLi.appendChild(deleteButton);
    newLi.appendChild(editButton);
    liste.appendChild(newLi);

    cancelModal(); 
}

function editTache() {
    if (currentTache) {
        currentTache.textContent = inputModalEdit.value.trim();  
        modalEdit.style.display = 'none'; 
    }
}

function tacheFaite(e) {
    e.target.parentNode.classList.toggle('finDeTache');
}

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