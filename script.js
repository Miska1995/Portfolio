// Define projects with title, description, image, link, details, and technologies
const projects = [
  {
    title: "Movie Application",
    description: "Live movie details via APIs. Currently in Finnish only.",
    details: "This project leverages REST APIs from OMDB and Finnkino to fetch and display up-to-date movie informations. ",
    image: "project1.png",
    link: "https://elokuvasovellus.netlify.app/",
    technologies: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square", "fab fa-react"]
  },
  {
    title: "Movie Application (Jquery)",
    description: "Similar to project 1, but in jQuery. Currently in Finnish only.",
    details: "This project is essentially a jQuery version of Project 1, designed to replicate its functionality with a different approach.",
    image: "project2.png",
    link: "https://elokuvasovellus-jquery.netlify.app/",
    technologies: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square", "fab fa-react", "fab fa-bootstrap", "fab fa-jquery"] 
  },
  {
    title: "PuppysSpa Website",
    description: "WordPress site for PuppySpa, Azure-hosted.",
    details: "This website was created for the fictional grooming operator ‘PuppySpa’ to showcase its services with a professional and user-friendly design.",
    image: "project3.png",
    link: "https://tiiaveistamog6-daaaa4gxcmc2hscp.northeurope-01.azurewebsites.net/",
    technologies: ["fab fa-wordpress"]
  }
];

// Dynamically populate the Projects Section
const projectList = document.getElementById("project-list");

projects.forEach((project) => {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");

  const techIcons = project.technologies
    .map((tech) => `<i class="${tech}" title="${tech.replace('fab fa-', '').toUpperCase()}"></i>`)
    .join("");

  projectDiv.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank" class="btn">View Project</a>
    <div class="project-details hidden">
      <p>${project.details}</p>
      <div class="technologies">
        <h4>Technologies Used:</h4>
        <div class="icons">${techIcons}</div>
      </div>
    </div>
  `;

  projectList.appendChild(projectDiv);
});

// Add a single "Show More" button
const showMoreButton = document.createElement("button");
showMoreButton.classList.add("btn");
showMoreButton.textContent = "Show More Details";
projectList.insertAdjacentElement("afterend", showMoreButton);

// Add event listener for the "Show More" button
showMoreButton.addEventListener("click", () => {
  const detailsElements = document.querySelectorAll(".project-details");
  const isHidden = [...detailsElements].some((detail) => detail.classList.contains("hidden"));

  detailsElements.forEach((detail) => {
    if (isHidden) {
      detail.classList.remove("hidden");
    } else {
      detail.classList.add("hidden");
    }
  });

  showMoreButton.textContent = isHidden ? "Hide Details" : "Show More Details";
});

// Select the contact form
const contactForm = document.querySelector(".fancy-form");

if (contactForm) {
  // Add a submit event listener
  contactForm.addEventListener("submit", (event) => {
    // Log the form data to the console for debugging
    const formData = new FormData(contactForm);
    console.log([...formData.entries()]); // Log the form data

    // Show a success message to the user
    alert("Thank you for reaching out! I'll get back to you soon.");

    // Allow the form to submit normally and reset the form after submission
    setTimeout(() => {
      contactForm.reset(); // Clear all fields
    }, 200); // Slight delay to ensure the form submission completes
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = document.querySelector("header").offsetHeight;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Read More functionality in the About section
const readMoreBtn = document.getElementById("read-more-btn");
const aboutMore = document.getElementById("about-more");

if (readMoreBtn && aboutMore) {
  readMoreBtn.addEventListener("click", () => {
    aboutMore.classList.toggle("expanded");
    const isExpanded = aboutMore.classList.contains("expanded");
    readMoreBtn.textContent = isExpanded ? "Show Less Details" : "Show More Details";
  });
}