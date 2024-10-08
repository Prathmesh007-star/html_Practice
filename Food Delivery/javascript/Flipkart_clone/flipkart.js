const products = [
    { id: 1, name: "Product 1", price: 29.99, image: "images/product1.jpg" },
    { id: 2, name: "Product 2", price: 19.99, image: "images/product2.jpg" },
    { id: 3, name: "Product 3", price: 39.99, image: "images/product3.jpg" },
    // Add up to 1000 products
];

function displayProducts() {
    const productList = document.getElementById('productList');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

document.addEventListener('DOMContentLoaded', displayProducts);
