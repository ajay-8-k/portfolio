const container = document.getElementById("project-container");

async function loadProjects() {
  try {
    const response = await fetch("/api/projects");
    const projects = await response.json();

    container.innerHTML = "";

    projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card";

      card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><strong>Tech:</strong> ${project.technologies.join(", ")}</p>
        <a href="${project.githubLink}" target="_blank">
          GitHub Repository
        </a>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error(error);
  }
}

loadProjects();