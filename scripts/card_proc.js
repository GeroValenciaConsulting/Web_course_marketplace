var urlParams = new URLSearchParams(window.location.search);
    var bankName = urlParams.get('bank_name');
    var accountName = urlParams.get('account_name');
    var accountNumber = urlParams.get('account_number');
    var email = urlParams.get('email');
    var products = JSON.parse(urlParams.get('products'));
    var total = urlParams.get('total');

    // Display the payment and order details on the page
    document.getElementById('bank_name').textContent = bankName;
    document.getElementById('account_name').textContent = accountName;
    document.getElementById('account_number').textContent = accountNumber;
    document.getElementById('email').textContent = email;

    var orderDetails = document.getElementById('orderDetails');
    var table = document.createElement('table');
    table.innerHTML = '<tr><th>Name</th><th>Price</th><th>Quantity</th></tr>';

    products.forEach(function (product) {
      var row = table.insertRow();
      row.innerHTML = '<td>' + product.name + '</td><td>' + product.price + '</td><td>' + product.quantity + '</td>';
    });

    orderDetails.appendChild(table);
    
    // Display the total price
    var totalPrice = document.getElementById('totalPrice');
    totalPrice.textContent = 'Total Price: $' + total;