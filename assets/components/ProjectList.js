
class ProjectsList extends HTMLElement {
  constructor() {
    super();
    this.projectsContainer = document.createElement("div");
    this.projectsContainer.classList.add("projects__container");
    this._items = [];
  }

  get items() {
    return this._items;
  }
  set items(items) {
    if (!Array.isArray(items)) throw new Error("Items must be an array");

    this._items = items;

    this.render();
  }

  connectedCallback() {
    this._itemTemplate = this.querySelector("template");
    if (!this._itemTemplate) console.warn("No template found");
    this.render();
  }

  render() {
    this.projectsContainer.innerHTML = "";

    for (const data of this._items) {
      const nodeClone = this._itemTemplate.content.cloneNode(true);

      nodeClone.querySelectorAll("[data-key]").forEach((element) => {
        const key = element.getAttribute("data-key");
        if (key.includes("link")) {
          element.setAttribute("href", data[key]);
        } else if (key.includes("img")) {
          element.setAttribute("src", data[key]);
        } else {
          element.textContent = data[key];
        }
      });

      this.projectsContainer.appendChild(nodeClone);
    }

    this.appendChild(this.projectsContainer);
  }
}

export default ProjectsList;