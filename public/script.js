document.addEventListener('DOMContentLoaded', function() {
    let products = [];

    function addProductToTable(product) {
        products.push(product);
        const productList = document.getElementById('productList');
        if (productList) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>${product.price}</td>
                <td>${product.description}</td>
            `;
            productList.appendChild(newRow);
        } else {
            console.error("Elementul 'productList' nu poate fi găsit.");
        }
    }

    function displayProducts() {
        const productList = document.getElementById('productList');
        if (productList) {
            productList.innerHTML = '';
            products.forEach(product => {
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <td>${product.name}</td>
                    <td>${product.category}</td>
                    <td>${product.price}</td>
                    <td>${product.description}</td>
                `;
                productList.appendChild(newRow);
            });
        } else {
            console.error("Elementul 'productList' nu poate fi găsit.");
        }
    }

    const addButton = document.getElementById('addButton');
    if (addButton) addButton.addEventListener('click', () => window.location.href = 'add.html');

    const editButton = document.getElementById('editButton');
    if (editButton) editButton.addEventListener('click', () => window.location.href = 'edit.html');

    const displayButton = document.getElementById('displayButton');
    if (displayButton) displayButton.addEventListener('click', () => window.location.href = 'display.html');

    const backButton = document.getElementById('backButton');
    if (backButton) backButton.addEventListener('click', () => window.location.href = 'index.html');

    if (window.location.pathname.includes('edit.html')) displayProducts();

    if (window.location.pathname.includes('add.html')) {
        const addForm = document.getElementById('addForm');
        if (addForm) {
            addForm.addEventListener('submit', function(event) {
                event.preventDefault();
                const product = {
                    name: addForm.name.value,
                    category: addForm.category.value,
                    price: addForm.price.value,
                    description: addForm.description.value
                };
                addProductToTable(product);
                addForm.reset();
            });
        }
    }
});
