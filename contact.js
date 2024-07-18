// contact.js

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the default form submission

            // Collect form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation (you can expand this)
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }

            // Here, you would normally send the data to a server
            // For this example, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been sent.`);

            // Reset the form after submission
            contactForm.reset();
        });
    }
});
