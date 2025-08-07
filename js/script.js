// Show alert when contact form is submitted
function submitForm() {
  alert("Thank you for your message!");
  return false; // Prevent actual form submission
}

// Highlight portfolio section with animated background color
function highlightPortfolio(color) {
  const portfolioSection = document.getElementById("portfolio");

  // Apply smooth transition (if not already in CSS)
  portfolioSection.style.transition = "background-color 0.6s ease-in-out";
  portfolioSection.style.backgroundColor = color;

  // Reset background after 4 seconds
  setTimeout(() => {
    portfolioSection.style.backgroundColor = "";
  }, 4000);
}


// Attach event listeners after DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  const projectTitles = document.querySelectorAll(".project-title");

  const colors = [
    "#e3f2fd", "#fce4ec", "#e8f5e9", "#fff3e0", "#f3e5f5",
    "#ede7f6", "#e0f2f1", "#f1f8e9", "#ffebee", "#f9fbe7",
    "#fbe9e7", "#edeef0", "#e1f5fe", "#fff8e1", "#f0f4c3",
    "#dcedc8", "#c8e6c9", "#ffecb3", "#ffe0b2", "#d7ccc8",
    "#cfd8dc", "#ffe082", "#b2ebf2", "#b3e5fc", "#d1c4e9",
    "#b39ddb", "#ffccbc", "#ffab91", "#ce93d8", "#a5d6a7",
    "#90caf9", "#80deea", "#ffcc80", "#bcaaa4"
  ];

  projectTitles.forEach((title) => {
    title.addEventListener("click", () => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      highlightPortfolio(randomColor);
    });
  });
});

const modeToggle = document.getElementById("modeToggle");
  const body = document.body;

  modeToggle.addEventListener("change", function () {
    body.classList.toggle("dark-mode");

    // Save mode in localStorage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  // Restore theme on load
  window.addEventListener("DOMContentLoaded", () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      body.classList.add("dark-mode");
      modeToggle.checked = true;
    }
  });

  let lastScrollY = window.scrollY;
  const header = document.querySelector(".header-main");

  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      header.classList.add("header-hidden");
    } else {
      // Scrolling up
      header.classList.remove("header-hidden");
    }
    lastScrollY = window.scrollY;
  });


