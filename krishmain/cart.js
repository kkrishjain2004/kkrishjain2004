// Get the 'Add to Cart' buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Array for products (or you can use an object to represent your products)
const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 }
];

// Function to update the cart (store it in localStorage)
function updateCart() {
  // Get cart data from localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let total = 0;

  // Update the total price and cart display
  const cartItemsList = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  // Clear the cart items list first
  cartItemsList.innerHTML = '';

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartItemsList.appendChild(li);
    total += item.price;
  });

  // Update the total price
  totalPriceElement.textContent = total;
}

// Event listener for "Add to Cart" buttons
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.parentElement.getAttribute('data-id');
    const product = products.find(p => p.id === parseInt(productId));

    // Get existing cart data from localStorage or initialize as empty
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add product to the cart
    cart.push(product);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${product.name} has been added to your cart!`);
  });
});
