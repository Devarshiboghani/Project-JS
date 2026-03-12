let products = [];
let editId = null;

const productForm = document.getElementById('product-form');
const productList = document.getElementById('product-list');
const submitBtn = document.getElementById('submit-btn');

window.onload = function() {
    loadData();
};

productForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    if (editId) {
        saveEdit(); 
    } else {
        addProduct(); 
    }
});

function addProduct() {

    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;
    const category = document.getElementById('category').value;

    if (title.trim() === "" || price <= 0) {
        alert("Please enter a valid Product Name and Price!");
        return; 
    }

    const newProduct = {
        id: Date.now(),
        title: title,
        price: parseFloat(price).toFixed(2), 
        image: image,
        category: category
    };

    products.push(newProduct);
    saveData();
    renderList();
    productForm.reset();
}

function addProductToList(product) {

    const productCard = document.createElement('div');
    productCard.className = "col-md-4 mb-4"; 
     productCard.id = `card-${product.id}`;
    
    productCard.innerHTML = `
        <div class="card h-100 shadow-sm border-0">
            <img src="${product.image}" class="card-img-top" alt="${product.title}">
            <div class="card-body text-center">
                <span class="badge bg-secondary mb-2">${product.category}</span>
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text text-primary fw-bold fs-5">$${product.price}</p>
                <button class="btn btn-warning btn-sm" onclick="editProduct(${product.id})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteProduct(${product.id})">Delete</button>
            </div>
        </div>
    `;

    productList.appendChild(productCard);
}

function editProduct(id) {

    const product = products.find(p => p.id === id);
     if (!product) return;
    
    document.getElementById('title').value = product.title;
    document.getElementById('price').value = product.price;
    document.getElementById('image').value = product.image;
    document.getElementById('category').value = product.category;

    editId = id;
    submitBtn.innerText = "Update Product"; 
    submitBtn.classList.remove('btn-warning');
    submitBtn.classList.add('btn-primary');
}

function saveEdit() {

    products = products.map(p => {
        if (p.id === editId) {
            return {
                ...p,
                title: document.getElementById('title').value,
                price: parseFloat(document.getElementById('price').value).toFixed(2),
                image: document.getElementById('image').value,
                category: document.getElementById('category').value
            };
        }
        return p;
    });

    saveData();
 renderList();

    editId = null;
    submitBtn.innerText = "Add Product";
    submitBtn.classList.remove('btn-warning');
    submitBtn.classList.add('btn-primary');
    productForm.reset();
}

function deleteProduct(id) {
    products = products.filter(item => item.id !== id);
    saveData();
    const cardToRemove = document.getElementById(`card-${id}`);
    if(cardToRemove) cardToRemove.remove();
}

function saveData() {
    localStorage.setItem("myProductList", JSON.stringify(products));
}

function loadData() {
    const storedData = localStorage.getItem("myProductList");
    if (storedData) {
        products = JSON.parse(storedData);
        renderList();
    }
}

function handleFilters() {
    let filtered = [...products]; 

    // 1. Searching by Title
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(p => p.title.toLowerCase().includes(searchTerm));
    }

    // 2. Filtering by Category
    const categoryTerm = document.getElementById('filter-category').value;
    if (categoryTerm !== "all") {
        filtered = filtered.filter(p => p.category === categoryTerm);
    }

    // 3. Sorting by Price
    const sortTerm = document.getElementById('sort-select').value;
    if (sortTerm === "low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortTerm === "high") {
        filtered.sort((a, b) => b.price - a.price);
    }

    renderFilteredList(filtered);
}

function renderFilteredList(data) {
    productList.innerHTML = "";
    if (data.length === 0) {
        productList.innerHTML = `<p class="text-center mt-4">No products found!</p>`;
        return;
    }
    data.forEach(product => addProductToList(product));
}

function renderList() {
    handleFilters();
}