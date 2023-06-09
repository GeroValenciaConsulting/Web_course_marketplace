var products = JSON.parse(localStorage.getItem('products'));
    var total = localStorage.getItem('total');

    // Display the product details
    var productDetailsContainer = document.getElementById('productDetails');

    products.forEach(function (product, index) {
      var productDetails = document.createElement('div');
      productDetails.classList.add('product-details');

      productDetails.innerHTML = `
        <label>Name:</label>
        <span>${product.name}</span>
        <br>
        <label>Price:</label>
        <span>$${product.price}</span>
        <br>
        <label> Quantity:</label>
        <span>${product.quantity}</span>
        <br><br>
      `;

      productDetailsContainer.appendChild(productDetails);
    });

    // Display the total price
    document.getElementById('totalPrice').textContent = '$' + total;

    // Add event listener to the back button
    document.getElementById('backBtn').addEventListener('click', function () {
      // Redirect back to the product selection page
      window.location.href = 'product.html';
    });

    // Add event listeners to the payment method buttons
    document.getElementById('codBtn').addEventListener('click', function () {
      // Redirect to COD payment page
      window.location.href = 'cod_payment.html';
    });

    document.getElementById('gcashBtn').addEventListener('click', function () {
      // Redirect to GCash payment page
      window.location.href = 'gcash_payment.html';
    });

    document.getElementById('paymayaBtn').addEventListener('click', function () {
      // Redirect to PayMaya payment page
      window.location.href = 'paymaya_payment.html';
    });

    document.getElementById('cardBtn').addEventListener('click', function () {
      // Redirect to Credit/Debit Card payment page
      window.location.href = 'card_payment.html';
    });