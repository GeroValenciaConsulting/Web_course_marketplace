// Sample product data
var products = [
    { name: 'Full Stack Web Development', price: 500, image: '../images/kodegofulltack.jpg' },
    { name: 'Front End Web Development', price: 30, image: '../images/kodego_frontend.jpg' },
    { name: 'Back End Web Development', price: 300, image: '../images/kodego_backend.jpg' },
    { name: 'Node JS', price: 200, image: '../images/kodego_node.jpg' },
    { name: 'Fundamentals to Javascript', price: 200, image: '../images/kodego_js.jpg' }
  ];
  
  var cart = []; // Array to store added products with quantity
  
  window.addEventListener('DOMContentLoaded', function () {
    viewProducts();
  });
  
  function viewProducts() {
    var tableBody = document.getElementById('productTableBody');
    tableBody.innerHTML = '';
  
    products.forEach(function (product) {
      var row = tableBody.insertRow();
  
      var imageCell = row.insertCell();
      var productImage = document.createElement('img');
      productImage.src = product.image;
      productImage.alt = product.name;
      productImage.className = 'product-image';
      imageCell.appendChild(productImage);
  
      var nameCell = row.insertCell();
      nameCell.innerHTML = product.name;
  
      var priceCell = row.insertCell();
      priceCell.innerHTML = product.price;
  
      var quantityCell = row.insertCell();
      var quantityInput = document.createElement('input');
      quantityInput.type = 'number';
      quantityInput.min = '1';
      quantityInput.value = '1';
      quantityCell.appendChild(quantityInput);
  
      var addToCartCell = row.insertCell();
      var addToCartBtn = document.createElement('button');
      addToCartBtn.innerHTML = 'Add to Cart';
      addToCartBtn.className = 'btn';
      addToCartBtn.addEventListener('click', function () {
        addToCart(product, parseInt(quantityInput.value));
      });
      addToCartCell.appendChild(addToCartBtn);
    });
  
    // Hide the "View Products" button
    var viewProductsBtn = document.getElementById('viewProductsBtn');
    viewProductsBtn.style.display = 'none';
  }
  
  function addToCart(product, quantity) {
    var existingProduct = cart.find(function (item) {
      return item.product === product;
    });
  
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.push({ product: product, quantity: quantity });
    }
  
    updateCart(); // Update the cart display
  }
  
  function updateCart() {
    var cartContainer = document.getElementById('cartContainer');
    cartContainer.innerHTML = '';
  
    if (cart.length === 0) {
      cartContainer.innerHTML = '<p>Your cart is empty.</p>';
      return;
    }
  
    var cartTotal = 0;
    var cartTable = document.createElement('table');
    cartTable.innerHTML = '<tr><th>Name</th><th>Price</th><th>Quantity</th></tr>';
  
    cart.forEach(function (item) {
      var product = item.product;
      var quantity = item.quantity;
  
      var row = cartTable.insertRow();
  
      var nameCell = row.insertCell();
      nameCell.innerHTML = product.name;
  
      var priceCell = row.insertCell();
      priceCell.innerHTML = product.price;
  
      var quantityCell = row.insertCell();
      quantityCell.innerHTML = quantity;
  
      var totalProductPrice = product.price * quantity;
      cartTotal += totalProductPrice;
    });
  
    cartContainer.appendChild(cartTable);
  
    var totalRow = cartTable.insertRow();
    totalRow.innerHTML = '<td colspan="2"><strong>Total</strong></td><td><strong>' + cartTotal + '</strong></td>';
  
    // Show the "Checkout" and "Reset Cart" buttons
    var checkoutBtn = document.getElementById('checkoutBtn');
    var resetCartBtn = document.getElementById('resetCartBtn');
    checkoutBtn.style.display = 'block';
    resetCartBtn.style.display = 'block';
  }
  
  function checkout() {
    var checkoutModalContent = document.getElementById('checkoutModalContent');
    checkoutModalContent.innerHTML = '';
  
    if (cart.length === 0) {
      checkoutModalContent.innerHTML = '<p>Your cart is empty.</p>';
      return;
    }
  
    var checkoutTitle = document.createElement('h3');
    checkoutTitle.className = 'checkout-title';
    checkoutTitle.textContent = 'Checkout';
    checkoutModalContent.appendChild(checkoutTitle);
  
    cart.forEach(function (item) {
      var product = item.product;
      var quantity = item.quantity;
  
      var checkoutItem = document.createElement('div');
      checkoutItem.className = 'checkout-item';
  
      var itemName = document.createElement('span');
      itemName.className = 'checkout-item-name';
      itemName.textContent = product.name;
      checkoutItem.appendChild(itemName);
  
      var itemPrice = document.createElement('span');
      itemPrice.className = 'checkout-item-price';
      itemPrice.textContent = 'Price: $' + product.price;
      checkoutItem.appendChild(itemPrice);
  
      var itemQuantity = document.createElement('span');
      itemQuantity.textContent = '  X ' + quantity;
      checkoutItem.appendChild(itemQuantity);
  
      checkoutModalContent.appendChild(checkoutItem);
    });
  
    var checkoutTotal = document.createElement('p');
    checkoutTotal.className = 'checkout-total';
    checkoutTotal.textContent = 'Total: $' + calculateTotal();
    checkoutModalContent.appendChild(checkoutTotal);
  
    // Show the checkout modal
    var modal = document.getElementById('checkoutModal');
    modal.style.display = 'block';
  }
  
  function calculateTotal() {
    var total = 0;
    cart.forEach(function (item) {
      var product = item.product;
      var quantity = item.quantity;
      total += product.price * quantity;
    });
    return total;
  }
  
  function proceedToPayment() {
    var productDetails = cart.map(function (item) {
      return {
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity
      };
    });
  
    localStorage.setItem('products', JSON.stringify(productDetails));
    localStorage.setItem('total', calculateTotal());
  
    // Redirect to the payment method selection page
    window.location.href = 'payment_method_selection.html';
  }
  
  function closeModal() {
    var modal = document.getElementById('checkoutModal');
    modal.style.display = 'none';
  }
  
  function resetCart() {
    cart = [];
    updateCart();
  }
  