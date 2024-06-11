document.addEventListener("DOMContentLoaded", function () {
  const projectDetails = {
    1: {
      title: "Agency",
      description: `
                This project, "Photobomb," part of the Noroff Front-end Developer program year 1, features a photography service website offering indoor and outdoor sessions with preferred photographers and printing services.
                For more info check out our <a href="https://github.com/kanotten/Agency1-frame/blob/main/README.md" target="_blank">ReadMe</a>.
                <br><br><strong>Collaborators:</strong>
                <ul>
                  <li>Project Manager: Panida Paethanom (Panida287)</li>
                  <li>Kenneth Sheikh (kanotten)</li>
                  <li>Helene Flått (helflaa)</li>
                  <li>Berken Ates (BerkenA)</li>
                  <li>Patrick Røthe (PatrickRoethe)</li>
                </ul>`,
      imgSrc: "https://patrickroethe.github.io/project-images/Frames.png",
      netlifyLink: "https://framephotographyfed1.netlify.app/",
      githubLink: "https://github.com/kanotten/Agency1-frame",
    },
    2: {
      title: "Science center",
      description: `
                This project is a website for a science center themed around the universe and space, collaboratively developed by Kenneth Sheikh and Patrick Røthe. The site comprises 4-6 main pages, featuring an engaging animation on the start page and a checkout section. Key features include a start page animation of Earth orbiting the sun, responsive design through media queries, a user-friendly dropdown menu, and seamless button navigation linking to respective pages. The primary technologies used are HTML, CSS, and JavaScript.`,
      imgSrc:
        "https://patrickroethe.github.io/project-images/Sciencecenter.png",
      netlifyLink: "https://sciencecenter.netlify.app/",
      githubLink: "https://github.com/kanotten/science-center-CA",
    },
    3: {
      title: "Blog",
      description: `
              This project is a blog platform that allows users to create, edit, and manage posts. The platform includes functionalities for user authentication, post creation, and content management, leveraging an API for handling blog posts.
              The project is currently under development, with further features such as pagination, sorting and more down the pipeline.`,
      imgSrc: "https://patrickroethe.github.io/project-images/Blog.png",
      netlifyLink: "https://netlifyadjustments--examproject007.netlify.app/",
      githubLink: "https://github.com/PatrickRoethe/Examproject",
    },
  };

  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("project");

  if (projectDetails[projectId]) {
    const project = projectDetails[projectId];
    document.getElementById("project-details").innerHTML = `
              <div class="project-info">
                <img src="${project.imgSrc}" alt="${project.title}">
                <div>
                  <h2>${project.title}</h2>
                  <p>${project.description}</p>
                  <a href="${project.netlifyLink}" class="button netlify">View on Netlify</a>
                  <a href="${project.githubLink}" class="button github">GitHub Repo</a>
                </div>
              </div>
            `;
  } else {
    document.getElementById(
      "project-details"
    ).innerHTML = `<p>Project not found.</p>`;
  }
});
