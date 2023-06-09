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

      var accountName = document.getElementById('account_name').value;
      var accountNumber = document.getElementById('account_number').value;
      var email = document.getElementById('email').value;
      var paymentMethod = 'PAYMAYA'; // Assuming PayMaya is selected

      // Display the chosen payment method and redirect to the specific payment page
      alert('Paid Successfully with: ' + paymentMethod);

      // Redirect to the specific payment page based on the payment method
      if (paymentMethod === 'COD') {
        // Redirect to COD payment page
        window.location.href = 'cod_payment_process.html';
      } else if (paymentMethod === 'GCASH') {
        // Redirect to GCash payment page
        window.location.href = 'gcash_payment_process.html';
      } else if (paymentMethod === 'PAYMAYA') {
        // Redirect to PayMaya payment page with the recorded details, products, and total price
        var url = 'paymaya_payment_process.html';
        url += '?account_name=' + encodeURIComponent(accountName);
        url += '&account_number=' + encodeURIComponent(accountNumber);
        url += '&email=' + encodeURIComponent(email);
        url += '&products=' + encodeURIComponent(JSON.stringify(products));
        url += '&total=' + encodeURIComponent(total);
        window.location.href = url;
      } else if (paymentMethod === 'CARD') {
        // Redirect to card payment page
        window.location.href = 'card_payment_process.html';
      }
    });

    var chooseMethodBtn = document.getElementById('chooseMethodBtn');
chooseMethodBtn.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent form submission

  // Redirect back to the payment method selection page
  window.location.href = 'payment_method_selection.html';
});