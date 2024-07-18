// index.js

document.addEventListener('DOMContentLoaded', function() {
    const buyNowButtons = document.querySelectorAll('.btn-secondary');

    buyNowButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Thank you for your interest! Redirecting to purchase page.');
            // You can redirect to a purchase page or handle it as needed
            // window.location.href = 'purchase-page-url';
        });
    });
});
