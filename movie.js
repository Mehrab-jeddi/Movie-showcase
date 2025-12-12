document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".movie-grid");
  const select = document.getElementById("sortOption");

  select.addEventListener("change", (e) => {
    const cards = Array.from(container.querySelectorAll(".movie-card"));
    
    cards.sort((a, b) => {
      if (e.target.value === "year") {
        const yearA = parseInt(a.querySelector("p:nth-of-type(2)").textContent.replace(/\D/g,""));
        const yearB = parseInt(b.querySelector("p:nth-of-type(2)").textContent.replace(/\D/g,""));
        return yearB - yearA;
      }
      if (e.target.value === "rating") {
        const ratingA = parseFloat(a.querySelector("p:nth-of-type(3)").textContent.replace(/[^\d.]/g,""));
        const ratingB = parseFloat(b.querySelector("p:nth-of-type(3)").textContent.replace(/[^\d.]/g,""));
        return ratingB - ratingA;
      }
      if (e.target.value === "title") {
        const titleA = a.querySelector("h2").textContent;
        const titleB = b.querySelector("h2").textContent;
        return titleA.localeCompare(titleB);
      }
    });

    container.innerHTML = "";
    cards.forEach(card => container.appendChild(card));
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".movie-grid");
  const select = document.getElementById("sortOption");
  const searchBox = document.getElementById("searchBox");
  const darkToggle = document.getElementById("darkModeToggle");

  // Sorting
  select.addEventListener("change", (e) => {
    const cards = Array.from(container.querySelectorAll(".movie-card"));
    cards.sort((a, b) => {
      if (e.target.value === "year") {
        const yearA = parseInt(a.querySelector("p:nth-of-type(2)").textContent.replace(/\D/g,""));
        const yearB = parseInt(b.querySelector("p:nth-of-type(2)").textContent.replace(/\D/g,""));
        return yearB - yearA;
      }
      if (e.target.value === "rating") {
        const ratingA = parseFloat(a.querySelector("p:nth-of-type(3)").textContent.replace(/[^\d.]/g,""));
        const ratingB = parseFloat(b.querySelector("p:nth-of-type(3)").textContent.replace(/[^\d.]/g,""));
        return ratingB - ratingA;
      }
      if (e.target.value === "title") {
        const titleA = a.querySelector("h2").textContent;
        const titleB = b.querySelector("h2").textContent;
        return titleA.localeCompare(titleB);
      }
    });
    container.innerHTML = "";
    cards.forEach(card => container.appendChild(card));
  });

  // Search
  searchBox.addEventListener("input", () => {
    const query = searchBox.value.toLowerCase();
    const cards = container.querySelectorAll(".movie-card");
    cards.forEach(card => {
      const title = card.querySelector("h2").textContent.toLowerCase();
      card.style.display = title.includes(query) ? "block" : "none";
    });
  });

  // Dark Mode toggle
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkToggle.textContent = document.body.classList.contains("dark-mode") 
      ? "Light Mode" 
      : "Dark Mode";
  });
});