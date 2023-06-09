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

      var name = document.getElementById('name').value;
      var address = document.getElementById('address').value;
      var contactNumber = document.getElementById('contact_number').value;
      var paymentMethod = 'COD'; // Assuming COD is selected

      // Display the chosen payment method and redirect to the specific payment page
      alert('Paid Successfully with: ' + paymentMethod);

      // Redirect to the specific payment page based on the payment method
      if (paymentMethod === 'COD') {
        // Redirect to COD payment page with the recorded products and total price
        var url = 'cod_payment_process.html';
        url += '?name=' + encodeURIComponent(name);
        url += '&address=' + encodeURIComponent(address);
        url += '&contact_number=' + encodeURIComponent(contactNumber);
        url += '&products=' + encodeURIComponent(JSON.stringify(products));
        url += '&total=' + encodeURIComponent(total);
        window.location.href = url;
      } else if (paymentMethod === 'GCASH') {
        // Redirect to GCash payment page
        window.location.href = 'gcash_payment_process.html';
      } else if (paymentMethod === 'PAYMAYA') {
        // Redirect to PayMaya payment page
        window.location.href = 'paymaya_payment_process.html';
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