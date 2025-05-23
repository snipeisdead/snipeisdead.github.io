document.addEventListener("DOMContentLoaded", () => {
  // Theme toggle functionality
  const themeToggle = document.getElementById("theme-toggle")
  const toggleIcon = document.querySelector(".toggle-icon")
  const body = document.body

  // Check for saved theme preference or use default (light)
  const savedTheme = localStorage.getItem("theme") || "light"

  // Apply saved theme
  if (savedTheme === "dark") {
    body.classList.add("dark-theme")
    toggleIcon.textContent = "🌙"
  }

  // Toggle theme when button is clicked
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme")

    // Update icon and save preference
    if (body.classList.contains("dark-theme")) {
      toggleIcon.textContent = "🌙"
      localStorage.setItem("theme", "dark")
    } else {
      toggleIcon.textContent = "☀️"
      localStorage.setItem("theme", "light")
    }

    // Add a subtle animation to the toggle
    themeToggle.style.transform = "rotate(360deg)"
    setTimeout(() => {
      themeToggle.style.transform = "rotate(0)"
    }, 300)
  })

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        })
      }
    })
  })

  // Add a subtle fade-in effect to sections when they come into view
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  document.querySelectorAll("section").forEach((section) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(20px)"
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(section)
  })
})
