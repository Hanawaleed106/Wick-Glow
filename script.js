


const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

const orderButtons = document.querySelectorAll(".order-button");

orderButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();

        const productName = button.parentElement.querySelector("h3").textContent;

        const phoneNumber = "201205672375";
        const message = `Hello! I would like to order ${productName}`;

        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

        window.location.href = whatsappURL;
    });
});


