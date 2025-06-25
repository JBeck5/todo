//Handles and Manages Projects
const STORAGE_KEY = "projects";

class ProjectManager {
    constructor() {
        this.projects = this.loadProjects();
    }
    
    saveProjects() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.projects));
    }

    loadProjects() {
        const loadedProjects = localStorage.getItem(STORAGE_KEY);
        return loadedProjects ? JSON.parse(loadedProjects) : [];
    }

    getProjects() {
        return this.projects;
    }

    addProject(name) {
        const project = {
            id: crypto.randomUUID(),
            name: name,
            tasks: [],
        };
        this.projects.push(project);
        this.saveProjects();
        return project;
    }

    removeProject(id) {
        this.projects = this.projects.filter((project) => project.id !== id);
        this.saveProjects();
  }
}

export default new ProjectManager();