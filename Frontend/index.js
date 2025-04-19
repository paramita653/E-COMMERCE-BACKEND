const products = [];
    const loggedIn = false;

    function login(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Dummy validation
      if (username === 'user' && password === 'pass') {
        document.getElementById('auth').classList.add('hidden');
        document.getElementById('content').classList.remove('hidden');
      } else {
        alert('Invalid credentials');
      }
    }

    function addProduct() {
      const productName = prompt('Enter product name:');
      if (productName) {
        products.push(productName);
        displayProducts();
      }
    }

    function displayProducts() {
      const productContainer = document.getElementById('products');
      productContainer.innerHTML = '';
      products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerText = `Product ${index + 1}: ${product}`;
        productContainer.appendChild(productDiv);
      });
    }

    function placeOrder(event) {
      event.preventDefault();
      const orderDetails = document.getElementById('orderDetails').value;
      document.getElementById('orderConfirmation').innerText = `Order placed: ${orderDetails}`;
    }
