document.addEventListener('DOMContentLoaded', function () {
    // Sorting Functionality
    const sortDropdown = document.getElementById('sort-dropdown');
    const bookCards = document.querySelector('.book-cards');

    sortDropdown.addEventListener('change', function () {
        const sortValue = this.value;
        sortBooks(sortValue);
    });

    function sortBooks(criteria) {
        let cardsArray = Array.from(bookCards.children);

        cardsArray.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.buy-btn').textContent.replace('$', ''));
            const priceB = parseFloat(b.querySelector('.buy-btn').textContent.replace('$', ''));

            if (criteria === 'price-low-to-high') {
                return priceA - priceB;
            } else if (criteria === 'price-high-to-low') {
                return priceB - priceA;
            } else {
                return 0; // Default case, no sorting
            }
        });

        // Re-append sorted cards
        bookCards.innerHTML = '';
        cardsArray.forEach(card => bookCards.appendChild(card));
    }

    // Sample Data for Reviews and Ratings (you should replace this with real data)
    const books = [
        { id: 'javascript', rating: 4.5, reviews: 10 },
        { id: 'python', rating: 4.0, reviews: 8 }
        // Add more book data here
    ];

    function displayReviewsAndRatings() {
        books.forEach(book => {
            const bookCard = document.querySelector(`.book-card img[alt="${book.id} Course"]`).parentElement;
            const ratingElement = document.createElement('div');
            const reviewsElement = document.createElement('div');

            ratingElement.className = 'rating-reviews';
            reviewsElement.className = 'rating-reviews';

            ratingElement.innerHTML = `<span class="rating">Rating: ${book.rating} ★</span>`;
            reviewsElement.innerHTML = `<span class="reviews">(${book.reviews} reviews)</span>`;

            bookCard.querySelector('.book-info').append(ratingElement, reviewsElement);
        });
    }

    displayReviewsAndRatings();
});
