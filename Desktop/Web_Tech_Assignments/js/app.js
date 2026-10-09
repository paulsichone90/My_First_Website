"use strict";

// ===== CONTACT FORM ELEMENTS =====
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const formFeedback = document.getElementById("formFeedback");
const formPreview = document.getElementById("formPreview");

const previewName = document.getElementById("previewName");
const previewEmail = document.getElementById("previewEmail");
const previewMessage = document.getElementById("previewMessage");
const validationConfirmation = document.getElementById(
    "validationConfirmation"
);

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        // Stop the browser from reloading the page
        event.preventDefault();

        // Read and remove unnecessary surrounding whitespace
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // Start with no error messages
        const errors = [];

        // Validate the name
        if (name === "") {
            errors.push("Please enter your name.");
        }

        // Validate the email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            errors.push("Please enter a valid email address.");
        }

        // Validate the message
        if (message === "") {
            errors.push("Please enter a message.");
        }

        // Display validation errors
        if (errors.length > 0) {
            formFeedback.textContent = errors.join(" ");
            formFeedback.style.color = "#B91C1C";
            formPreview.hidden = true;
            return;
        }

        // Display a safe local preview
        previewName.textContent = name;
        previewEmail.textContent = email;
        previewMessage.textContent = message;

        validationConfirmation.textContent =
            "Your details passed the browser validation checks.";

        formFeedback.textContent =
            "Validation successful. Review your message preview below.";
        formFeedback.style.color = "#15803D";

        formPreview.hidden = false;
    });
}   
/* ===== PROJECT SEARCH ===== */

const projectSearch = document.getElementById("projectSearch");
const resetProjectSearch = document.getElementById("resetProjectSearch");
const searchMessage = document.getElementById("searchMessage");

const projectCards = document.querySelectorAll(".project-card");

if (projectSearch && resetProjectSearch && searchMessage) {

    function filterProjects() {
        const searchTerm = projectSearch.value.trim().toLowerCase();
        let visibleProjects = 0;

        projectCards.forEach(function (card) {
            const searchableText = (
                card.textContent + " " + card.dataset.search
            ).toLowerCase();

            const matches = searchableText.includes(searchTerm);

            card.hidden = !matches;

            if (matches) {
                visibleProjects++;
            }
        });

        if (visibleProjects === 0) {
            searchMessage.textContent = "No matching projects found.";
        } else {
            searchMessage.textContent =
                visibleProjects + " project(s) found.";
        }
    }

    // Filter whenever the visitor types
    projectSearch.addEventListener("input", filterProjects);

    // Restore all project cards
    resetProjectSearch.addEventListener("click", function () {
        projectSearch.value = "";

        projectCards.forEach(function (card) {
            card.hidden = false;
        });

        searchMessage.textContent =
            "All projects are displayed.";
    });
}


/* ===== LIGHT / DARK THEME ===== */

const themeBtn = document.getElementById("themeToggle");
let isdark = false
function ThemeToggle(){
    const body = document.querySelector("body")
    if(isdark===false){
          body.classList.toggle("light")
          body.classList.toggle("dark") 
           themeBtn.innerHTML= "Change to Dark Mode"
           isdark = true
    }else{
    body.classList.toggle("light")
    body.classList.toggle("dark") 
    themeBtn.innerHTML= "Change to Light Mode"
    isdark = false
    }

}

themeBtn.addEventListener("click",ThemeToggle)