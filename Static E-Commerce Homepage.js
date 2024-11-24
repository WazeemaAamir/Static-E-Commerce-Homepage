function filterProducts(category) {
     console.log(`Filtering products by category: ${category}`);
     // Implement logic to filter products
   }
    let cart = [];

function addToCart(product) {
  cart.push(product);
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';  // Clear the current cart display
  cart.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price}`;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = () => removeFromCart(index);
    listItem.appendChild(removeBtn);
    cartItems.appendChild(listItem);
  });
}
function addReview() {
  const reviewText = document.getElementById('review-text').value;
  if (reviewText) {
    const reviewList = document.querySelector('#reviews ul');
    const newReview = document.createElement('li');
    newReview.textContent = reviewText;
    reviewList.appendChild(newReview);
    document.getElementById('review-text').value = ''; // Clear the textarea
  } else {
    alert('Please enter a review!');
  }
}
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
    alert('Login successful!');
  } else {
    alert('Please fill in both fields!');
  }
});
function processPayment() {
  const paymentSuccess = Math.random() > 0.5; // Mock payment success/failure
  
  if (paymentSuccess) {
    showOrderConfirmation();
  } else {
    alert('Payment failed! Please try again.');
  }
}

function showOrderConfirmation() {
  alert('Payment successful! Order confirmed.');
  // Redirect to confirmation page
}
