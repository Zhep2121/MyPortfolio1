var productInterface = [
    {
      "id": 1,
      "name": "Uniqlo T-shirt",
      "category": "Clothing",
      "brand": "Uniqlo",
      "quantity": 1,
      "price": 10.00,
      "image": "image/uniqlo.avif",
    },
    {
      "id": 2,
      "name": "Levi's Jeans",
      "category": "Clothing",
      "brand": "Levi's",
      "quantity": 1,
      "price": 50.00,
      "image": "image/jeans.avif",
    },
    {
      "id": 3,
      "name": "Nike Sneakers",
      "category": "Shoes",
      "brand": "Nike",
      "quantity": 1,
      "price": 60.00,
      "image": "image/shoesnike.webp",
    },
    {
      "id": 4,
      "name": "Adidas Sandals",
      "category": "Shoes",
      "brand": "Adidas",
      "quantity": 1,
      "price": 40.00,
      "image": "image/sandals.png",
    },
    {
      "id": 5,
      "name": "Zara Dress",
      "category": "Clothing",
      "brand": "Zara",
      "quantity": 1,
      "price": 30.00,
      "image": "image/dress.avif",
    },
    {
      "id": 6,
      "name": "H&M Skirt",
      "category": "Clothing",
      "brand": "H&M",
      "quantity": 1,
      "price": 20.00,
      "image": "image/skirt.avif",
    },
    {
      "id": 7,
      "name": "Mango Blouse",
      "category": "Clothing",
      "brand": "Mango",
      "quantity": 1,
      "price": 15.00,
      "image": "image/blouse.avif",
    },
    {
      "id": 8,
      "name": "Christian Louboutin Heels",
      "category": "Shoes",
      "brand": "Christian Louboutin",
      "quantity": 1,
      "price": 70.00,
      "image": "image/sandalsgirl.jpg",
    },
    {
      "id": 9,
      "name": "The North Face Jacket",
      "category": "Clothing",
      "brand": "The North Face",
      "quantity": 1,
      "price": 40.00,
      "image": "image/jacket.avif",
    },
    {
      "id": 10,
      "name": "Gucci Hat",
      "category": "Accessories",
      "brand": "Gucci",
      "quantity": 1,
      "price": 10.00,
      "image": "image/hat.avif",
    }
  ]
  
  
  function renderProducts(products) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
  
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.className = 'product';
  
      const productDetailsElement = document.createElement('div');
      productDetailsElement.className = 'product-details';
      productDetailsElement.innerHTML = `
        <h3>${product.name}</h3>
        <p>Category: ${product.category}</p>
        <p>Brand: ${product.brand}</p>
        <p>Price: $${product.price.toFixed(2)}</p>
      `;
  
      const productImageElement = document.createElement('img');
      productImageElement.src = product.image || ''; // Added this line to handle the image property
      productImageElement.alt = product.name;
  
      productElement.appendChild(productDetailsElement);
      productElement.appendChild(productImageElement);
      productsContainer.appendChild(productElement);
    });
  }
  
  function filterProducts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const categoryFilter = document.getElementById('category').value;
    const maxPrice = parseFloat(document.getElementById('price').value) || Infinity;
  
    const filteredProducts = productInterface.filter(product => {
      const nameMatch = product.name.toLowerCase().includes(searchTerm);
      const categoryMatch = !categoryFilter || product.category === categoryFilter;
      const priceMatch = product.price <= maxPrice;
  
      return nameMatch && categoryMatch && priceMatch;
    });
  
    renderProducts(filteredProducts);
  }
  
  renderProducts(productInterface); 
  