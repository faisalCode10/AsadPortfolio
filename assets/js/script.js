'use strict';

// ========== ELEMENT TOGGLE FUNCTION ==========
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// ========== SIDEBAR TOGGLE ==========
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// ========== MODAL FUNCTIONALITY ==========
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

testimonialsItem.forEach(item => {
  item.addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
});

modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// ========== FORM VALIDATION ==========
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
  input.addEventListener("input", function () {
    formBtn.disabled = !form.checkValidity();
  });
});

// ========== PAGE NAVIGATION ==========
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link, index) => {
  link.addEventListener("click", function () {
    pages.forEach((page, i) => {
      const isActive = link.innerHTML.toLowerCase() === page.dataset.page;
      page.classList.toggle("active", isActive);
      navigationLinks[i].classList.toggle("active", isActive);
    });
    window.scrollTo(0, 0);
  });
});

// ========== PROJECT DATA ==========
const projects = [
  // === Project Management ===
  {
    title: "Agile PM Tool",
    category: "project management",
    image: "./assets/images/AI CODE GENERATOR.png",
    link: "https://play.google.com/store/apps/details?id=com.ford9.ai.coding.generator.code.creator.maker.writer.builder.assistant"
  },
  {
    title: "Timeline Tracker",
    category: "project management",
    image: "./assets/images/AI COURSE .png",
    link: "https://play.google.com/store/apps/details?id=com.ford9.courseai.generator.creator.maker.online.syllabus"
  },
  {
    title: "Cover Letter Tool",
    category: "project management",
    image: "./assets/images/AI COVER LETTER.png",
    link: "https://play.google.com/store/apps/details?id=com.ford9.AI.CoverLetter.Generator.Creator.Builder.Maker.Writer"
  },
  {
    title: "Mock Interview App",
    category: "project management",
    image: "./assets/images/AI JOB INTERVIEW.png",
    link: "https://play.google.com/store/apps/details?id=com.ford9.ai.job.mock.interview.preparation.generator.maker.builder.creator"
  },

  // === Prompt Engineering ===
  {
    title: "Prompt Lab",
    category: "prompt engineering",
    image: "./assets/images/PromptEng-1.png",
    link: "#"
  },
  {
    title: "AI Chat Flow",
    category: "prompt engineering",
    image: "./assets/images/PromptEng-2.png",
    link: "#"
  },
  {
    title: "Prompt Studio",
    category: "prompt engineering",
    image: "./assets/images/PromptEng-3.png",
    link: "#"
  },
  {
    title: "Prompt Magic",
    category: "prompt engineering",
    image: "./assets/images/PromptEng-4.png",
    link: "#"
  },
  {
    title: "Prompt Hub",
    category: "prompt engineering",
    image: "./assets/images/PromptEng-5.webp",
    link: "#"
  },
  {
    title: "Prompt Designer",
    category: "prompt engineering",
    image: "./assets/images/PromptEng-6.webp",
    link: "#"
  },
  {
    title: "Prompt Wizard",
    category: "prompt engineering",
    image: "./assets/images/PromptEng-7.webp",
    link: "#"
  },
  {
    title: "Prompt Scripts",
    category: "prompt engineering",
    image: "./assets/images/PromptEng-8.webp",
    link: "#"
  },
  {
    title: "Prompt Scripts",
    category: "prompt engineering",
    image: "./assets/videos/Prompt-Eng-video1.mp4",
    link: "#"
  },
  {
    title: "Prompt Scripts",
    category: "prompt engineering",
    image: "./assets/videos/Prompt-Eng-video2.mp4",
    link: "#"
  },

  // === Digital Marketing ===
  {
    title: "SEO Booster",
    category: "digital marketing",
    image: "./assets/images/Digital-Market-1.png",
    link: "https://www.facebook.com/share/191psSrkLG/?mibextid=wwXIfr"
  },
  {
    title: "Social Pulse",
    category: "digital marketing",
    image: "./assets/images/Digital-Market-2.webp",
    link: "https://www.facebook.com/share/191psSrkLG/?mibextid=wwXIfr"
  },
  {
    title: "Social Pulse",
    category: "digital marketing",
    image: "./assets/images/Digital-Market-3.webp",
    link: "https://www.facebook.com/share/191psSrkLG/?mibextid=wwXIfr"
  },
  {
    title: "Social Pulse",
    category: "digital marketing",
    image:  './assets/videos/AI-Poem.mp4',
    link: "https://play.google.com/store/apps/details?id=com.ford9.ai.poem.generator.poetry.maker.builder.writer.creator&hl=en",
  },
  {
    title: "Social Pulse",
    category: "digital marketing",
    image: './assets/videos/AI-Novel.mp4',
    link: "https://play.google.com/store/apps/details?id=com.ford9.AI.Story.Maker.Novel.Generator.Creator.Writer.Builder&hl=en",
  },
  {
    title: "Social Pulse",
    category: "digital marketing",
    image: "./assets/images/Digital-Market-6.webp",
    link: "https://play.google.com/store/apps/details?id=com.ford9.AI.Story.Maker.Novel.Generator.Creator.Writer.Builder&hl=en"
  },
  {
    title: "Social Pulse",
    category: "digital marketing",
    image: "./assets/images/Digital-Market-7.webp",
    link: "#"
  },
  {
    title: "Social Pulse",
    category: "digital marketing",
    image: "./assets/images/Digital-Market-8.webp",
    link: "#"
  },
  {
    title: "Social Pulse",
    category: "digital marketing",
    image: "./assets/images/Digital-Market-9.webp",
    link: "#"
  },
  {
    title: "Social Pulse",
    category: "digital marketing",
    image: "./assets/images/Digital-Market-10.webp",
    link: "https://play.google.com/store/apps/details?id=com.ford9.AI.Story.Maker.Novel.Generator.Creator.Writer.Builder&hl=en"
  },
  {
    title: "Social Pulse",
    category: "digital marketing",
    image: "./assets/images/Digital-Market-11.webp",
    link: "https://play.google.com/store/apps/details?id=com.ford9.AI.Story.Maker.Novel.Generator.Creator.Writer.Builder&hl=en"
  },
  {
    title: "Social Pulse",
    category: "digital marketing",
    image: "./assets/images/Digital-Marketing-12.png",
    link: "https://www.facebook.com/share/162XYsmWxB/?mibextid=wwXIfr"
  },
  {
    title: "Social Pulse",
    category: "digital marketing",
    image: "./assets/images/Digital-Marketing-13.jpeg",
    link: "https://www.instagram.com/arimmiconnorth/?igsh=dm1hdWwyeGRyazlh&utm_source=qr#"
  },
  {
    title: "Social Pulse",
    category: "digital marketing",
    image: "./assets/images/Digital-Marketing-14.jpeg",
    link: "https://www.instagram.com/ford9institute/?igsh=MXBoNjM0dTByM2F4ZA%3D%3D&utm_source=qr#"
  },
 

];

// ========== RENDER FUNCTION ==========
function capitalizeCategory(str) {
  return str
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

function renderProjects(projectArray) {
  const container = document.getElementById("project-list");
  container.innerHTML = "";

  projectArray.forEach(project => {
    const li = document.createElement("li");
    li.className = "project-item active";
    li.setAttribute("data-filter-item", "");
    li.setAttribute("data-category", project.category.toLowerCase());

    let mediaContent = "";

    if (project.image && project.image.endsWith(".mp4")) {
      mediaContent = `<video controls muted loop autoplay style="width: 100%; height:200px; border-radius: 10px;">
                        <source src="${project.image}" type="video/mp4">
                        Your browser does not support the video tag.
                      </video>`;
    } else {
      mediaContent = `<img src="${project.image}" alt="${project.title}" loading="lazy" style="height: 200px; width: 100%;" />`;
    }

    const content = `
      <figure class="project-img">
        <div class="project-item-icon-box">
          <ion-icon name="eye-outline"></ion-icon>
        </div>
        ${mediaContent}
      </figure>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-category">${capitalizeCategory(project.category)}</p>
    `;

    if (project.link && project.link !== "#") {
      li.innerHTML = `<a href="${project.link}" target="_blank">${content}</a>`;
    } else {
      li.innerHTML = `<div class="project-disabled">${content}</div>`;
    }

    container.appendChild(li);
  });
}


// ========== FILTER FUNCTION ==========
function filterFunc(selectedValue) {
  const filterItems = document.querySelectorAll("[data-filter-item]");

  filterItems.forEach(item => {
    const category = item.getAttribute("data-category").toLowerCase();
    const shouldShow = selectedValue === "all" || selectedValue === category;
    item.classList.toggle("active", shouldShow);
  });
}

// ========== BIND FILTER EVENTS ==========
function bindFilterEvents() {
  const filterBtns = document.querySelectorAll("[data-filter-btn]");
  const selectItems = document.querySelectorAll("[data-select-item]");
  const selectValue = document.querySelector("[data-selecct-value]");
  let lastClickedBtn = filterBtns[0];

  // Desktop filter
  filterBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      const selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  });

  // Mobile dropdown
  selectItems.forEach(item => {
    item.addEventListener("click", function () {
      const selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  });
}

// ========== INITIALIZE ==========
renderProjects(projects);
bindFilterEvents();
