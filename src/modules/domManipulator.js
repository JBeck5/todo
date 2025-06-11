//Manipulates the DOM

export function initializeModal() {
    const projectModal = document.getElementById("project-modal");
    const newProjectBtn = document.getElementById("btn-new-project");

    console.log("HERE");

    newProjectBtn.addEventListener("click", function () {
        projectModal.style.display = "block";
    })
};