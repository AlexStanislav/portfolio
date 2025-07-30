import { projects } from "./data.js";
import ProjectsList from "../components/ProjectList.js";

function defineComponents(components) {
  for (const component of components) {
    customElements.define(component.name, component.class);
  }
}

const components = [
  {
    name: "projects-list",
    class: ProjectsList,
  },
];

defineComponents(components);

const projectsList = document.querySelector("#projects");
projectsList.items = projects;

function animatePersonalDetails(elements) {
  elements.forEach((elementClass, index) => {
    const element = document.querySelector(`.${elementClass}`);
    setTimeout(() => {
      element.classList.add(`${elementClass}--animate`);
    }, 500 * index + 1);
  });
}

const elements = [
  "initials",
  "full-name",
  "about__title",
  "about__description",
];
animatePersonalDetails(elements);

