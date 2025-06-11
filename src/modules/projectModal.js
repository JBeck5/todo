
class Project {
    constructor(projectName) {
        this.name = projectName;
        this.tasks = [];
        this.id = crypto.randomUUID();

    }

}

function initializeModal() {
    const projectModal = document.getElementById("project-modal");
    
    const addNewProject = document.getElementById("btn-new-project");
    projectModal.style.display = "block";
}

function submitProjectHandler() {

}