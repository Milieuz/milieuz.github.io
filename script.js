const username = "Milieuz"; // Replace with your GitHub username
const projectsContainer = document.getElementById("projects"); // The container in your HTML

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch repositories");
    }
    return response.json();
  })
  .then(repos => {
    repos.forEach(repo => {
      const projectEl = document.createElement("div");
      projectEl.classList.add("project");

      projectEl.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
        <p>${repo.description || "No description available."}</p>
      `;

      projectsContainer.appendChild(projectEl);
    });
  })
  .catch(error => {
    console.error("Error fetching repos:", error);
    projectsContainer.innerHTML = "<p>Unable to load projects at this time.</p>";
  });