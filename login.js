document.addEventListener('DOMContentLoaded', () => {
    const passwordField = document.querySelector('#password');
    const togglePassword = document.querySelector('#togglePassword');

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
});
