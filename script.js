fetch('products.json')
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById('product-list');
    products.forEach(p => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <h3>${p.title}</h3>
        <p>₹${p.price}</p>
        <p>${p.category}</p>
      `;
      container.appendChild(div);
    });
  });
