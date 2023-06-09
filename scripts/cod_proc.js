var urlParams = new URLSearchParams(window.location.search);
    var name = urlParams.get('name');
    var address = urlParams.get('address');
    var contactNumber = urlParams.get('contact_number');
    var products = JSON.parse(urlParams.get('products'));
    var total = urlParams.get('total');

    // Display the payment and order details on the page
    document.getElementById('name').textContent = name;
    document.getElementById('address').textContent = address;
    document.getElementById('contact_number').textContent = contactNumber;

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