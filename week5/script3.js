let cart = [];

function addToCart(productName, price) {
    // Check if product already exists in the cart
    const product = cart.find(item => item.name === productName);
    
    if (product) {
        // If product already in cart, increase quantity
        product.quantity++;
    } else {
        // If not, add new product to the cart
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    updateCart();
}

function updateCart() {
    const cartDiv = document.getElementById('cart');
    const cartTotalDiv = document.getElementById('cart-total');
    
    if (cart.length === 0) {
        cartDiv.innerHTML = "<p>Your cart is empty.</p>";
        cartTotalDiv.innerHTML = "<p>Total: $0.00</p>";
    } else {
        let cartHTML = '<ul>';
        let total = 0;

        cart.forEach(item => {
            cartHTML += `
                <li>${item.name} - $${item.price} x ${item.quantity}
                    <input type="number" id="remove-quantity-${item.name}" value="1" min="1" max="${item.quantity}">
                    <button onclick="removeFromCart('${item.name}')">Remove</button>
                </li>`;
            total += item.price * item.quantity;
        });

        cartHTML += '</ul>';
        cartDiv.innerHTML = cartHTML;
        cartTotalDiv.innerHTML = `<p>Total: $${total.toFixed(2)}</p>`;
    }
}

function removeFromCart(productName) {
    const removeInput = document.getElementById(`remove-quantity-${productName}`);
    const quantityToRemove = parseInt(removeInput.value);
    
    // Find the product in the cart
    const product = cart.find(item => item.name === productName);
    
    if (product) {
        // Reduce the quantity of the product or remove the product entirely
        if (product.quantity > quantityToRemove) {
            product.quantity -= quantityToRemove;
        } else {
            // Remove the product entirely if quantity to remove exceeds or equals available quantity
            const productIndex = cart.findIndex(item => item.name === productName);
            cart.splice(productIndex, 1);
        }
    }

    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty! Add items before checking out.');
    } else {
        let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        alert(`Your total is $${total.toFixed(2)}. Thank you for shopping!`);
        cart = []; // Clear the cart
        updateCart();
    }
}
