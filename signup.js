document.addEventListener('DOMContentLoaded', () => {
    const passwordField = document.querySelector('#password');
    const togglePassword = document.querySelector('#togglePassword');
    const confirmPasswordField = document.querySelector('#confirm-password');
    const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');

    // Show/Hide password
    togglePassword.addEventListener('click', () => {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            togglePassword.textContent = 'Hide';
        } else {
            passwordField.type = 'password';
            togglePassword.textContent = 'Show';
        }
    });

    // Show/Hide confirm password
    if (toggleConfirmPassword) {
        toggleConfirmPassword.addEventListener('click', () => {
            if (confirmPasswordField.type === 'password') {
                confirmPasswordField.type = 'text';
                toggleConfirmPassword.textContent = 'Hide';
            } else {
                confirmPasswordField.type = 'password';
                toggleConfirmPassword.textContent = 'Show';
            }
        });
    }
});


const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66986f7f00392f100da2');
