//Renders 
const listContainer = document.querySelector(".project-board");

//Clears the Project List
export function clearProjectList() {
    projectBoard.innerHTML = "";
}

export function renderProjectList(project) {
    const item = document.createElement("div");
    item.classList.add("project-item");
    item.dataset.id = project.id;

    const name = document.createElement("p");
    name.classList.add("project-item-name");
    name.textContent = project.name;
    name.title = project.name;

    listContainer.appendChild(item);
}