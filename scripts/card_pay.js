var products = JSON.parse(localStorage.getItem('products'));
    var total = localStorage.getItem('total');

    // Use the retrieved data to populate the cart section
    var cartContainer = document.getElementById('cartContainer');
    var cartTotal = document.getElementById('cartTotal');

    if (products && total) {
      var table = document.createElement('table');
      table.innerHTML = '<tr><th>Name</th><th>Price</th><th>Quantity</th></tr>';

      products.forEach(function (product) {
        var row = table.insertRow();
        row.innerHTML = '<td>' + product.name + '</td><td>' + product.price + '</td><td>' + product.quantity + '</td>';
      });

      cartContainer.appendChild(table);
      cartTotal.innerHTML = 'Total: ' + total;
    }

    var paymentForm = document.getElementById('paymentForm');
    paymentForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form submission

      var bankName = document.getElementById('bank_name').value;
      var accountName = document.getElementById('account_name').value;
      var accountNumber = document.getElementById('account_number').value;
      var email = document.getElementById('email').value;

      // Process the card payment with the entered details
      // You can add your payment processing logic here

      // Display a success message
      alert('Card payment successful!');

      // Redirect back to the payment method selection page
      window.location.href = 'card_payment_process.html?bank_name=' + bankName + '&account_name=' + accountName + '&account_number=' + accountNumber + '&email=' + email + '&products=' + JSON.stringify(products) + '&total=' + total;
    });

    var chooseMethodBtn = document.getElementById('chooseMethodBtn');
    chooseMethodBtn.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent form submission

  // Redirect back to the payment method selection page
  window.location.href = 'payment_method_selection.html';
});