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
                      </ul>
                      <br><strong>Experiences</strong>
                      <p>I worked on the "About Us" page for a group project creating a photography website. We chose this project because a team member had preexisting ideas and content. Despite initial overcomplications with JavaScript, I learned to simplify my approach. We faced challenges like coordinating schedules and aligning coding styles. Effective communication and regular SPRINT meetings improved our workflow, revealing that team members are valuable resources and great aids. This project highlighted the importance of planning, communication, collaboration, and balancing ambition with practicality. Moving forward, I aim to enhance my efficiency, task management, and planning skills in web development.</p>
                      `,
      imgSrc: "https://patrickroethe.github.io/project-images/Frames.png",
      netlifyLink: "https://framephotographyfed1.netlify.app/",
      githubLink: "https://github.com/kanotten/Agency1-frame",
    },
    2: {
      title: "Science center",
      description: `
                      This project is a website for a science center themed around the universe and space, collaboratively developed by Kenneth Sheikh and Patrick Røthe. The site comprises 4-6 main pages, featuring an engaging animation on the start page and a checkout section. Key features include a start page animation of Earth orbiting the sun, responsive design through media queries, a user-friendly dropdown menu, and seamless button navigation linking to respective pages. The primary technologies used are HTML, CSS, and JavaScript.
                      <br><strong>Experiences</strong>
                      <p>Developing this science center website has been an enriching experience in web development. I gained hands-on experience with key aspects of modern web design, including aiding in creating responsive layouts, engaging animations, and intuitive navigation systems. Collaborating with Kenneth Sheikh, we each handled at least two pages, ensuring a cohesive final product. Thoughtful design decisions aimed at a kid-friendly, educational platform were essential. While the current version meets our initial goals, we plan further enhancements post-delivery. This project significantly broadened my skills, especially in collaborative development and dynamic design.</p>
                      `,
      imgSrc:
        "https://patrickroethe.github.io/project-images/Sciencecenter.png",
      netlifyLink: "https://sciencecenter.netlify.app/",
      githubLink: "https://github.com/kanotten/science-center-CA",
    },
    3: {
      title: "Blog",
      description: `
                    This project is a blog platform that allows users to create, edit, and manage posts. The platform includes functionalities for user authentication, post creation, and content management, leveraging an API for handling blog posts. The project is currently under development, with further features such as pagination, sorting, and more down the pipeline. Additionally, it includes a function that detects login status and adjusts the navigation bar accordingly.
                    <br><strong>Experiences</strong>
                    <p>Developing this blog platform has been an enriching learning experience in web development. The project incorporates several key functions, including user authentication, post creation, and content management, as well as implementing secure user login mechanisms. Working extensively with APIs has been a critical component, enhancing my understanding of dynamic data interactions. These functions are widely used in modern web applications, making this project a valuable addition to my portfolio. I will continue to revisit and refine the code to ensure my skills and knowledge remain up to date.</p>
                    `,
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
