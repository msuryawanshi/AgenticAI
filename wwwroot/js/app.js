document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.getElementById("content");

    // Function to load content dynamically
    async function loadPage(page) {
        try {
            const response = await fetch(`${page}`) //fetch(`/../../Pages/${page}`);
            if (response.ok) {
                const html = await response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");
                const mainContent = doc.querySelector("main");
                contentDiv.innerHTML = mainContent ? mainContent.innerHTML : "<p>Page not found.</p>";
            } else {
                contentDiv.innerHTML = "<p>Error loading page.</p>";
            }
        } catch (error) {
            contentDiv.innerHTML = "<p>Error loading page.</p>";
            console.error("Error:", error);
        }
    }

    // Attach click event listeners to navigation links
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const page = event.target.getAttribute("data-page");
            if (page) {
                loadPage(page);
            }
        });
    });
});
