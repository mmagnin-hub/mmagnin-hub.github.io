document.addEventListener("DOMContentLoaded", function () {
    const readMoreButtons = document.querySelectorAll(".read-more");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function () {
            const fullContent = this.previousElementSibling; // Select the full content
            if (fullContent.classList.contains("hidden")) {
                fullContent.classList.remove("hidden");
                this.textContent = "Read Less";
            } else {
                fullContent.classList.add("hidden");
                this.textContent = "Read More";
            }
        });
    });
});
