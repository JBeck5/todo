//Manipulates the DOM
const modal = document.querySelectorAll("modal");
const projectModal = document.getElementById("project-modal");
const projectContent = document.getElementById("modal-content");
const projectForm = document.getElementById("projectForm");
const newProjectBtn = document.getElementById("btn-new-project");
const closeProjectModal = document.getElementById("close-project-modal");
const cancelBtn = document.getElementById("btn-cancel-project");


export function initializeModal() {
    newProjectBtn.addEventListener("click", function() {
        projectModal.style.display = "flex";
    })

    cancelBtn.addEventListener("click", closeProjectWindow)

    closeProjectModal.addEventListener("click", closeProjectWindow)

    window.onclick = function(event) {
        if(event.target == projectModal) {
            closeProjectWindow();
        }
    }
};

function closeProjectWindow() {
        projectModal.style.display = "none";
        projectForm.reset();
}