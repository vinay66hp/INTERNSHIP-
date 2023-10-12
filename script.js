document.addEventListener('DOMContentLoaded', function () {
    const addToCartButton = document.getElementById('addToCart');

    addToCartButton.addEventListener('click', function () {
        alert('Product added to the cart.');
        // Implement actual cart functionality here (e.g., adding the product to a shopping cart).
    });
});