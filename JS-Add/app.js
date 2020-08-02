document.addEventListener("DOMContentLoaded", () => {
    function addName() {
        let nameValue = document.getElementById('name-field').value;
        let nameString = nameValue.toLowerCase();
        if (nameValue.value === '') {
            alert('Please enter your name');
        }
        return document.getElementById("name-display").innerText = `Witaj, ${nameString.charAt(0).toUpperCase() + nameString.slice(1)}` + ".";
    }
    document.getElementById('add-name-btn').addEventListener('click', addName);
    class ListItem {
        constructor(products, categories, selector) {
            this.products = products;
            this.categories = categories;
            this.selector = selector;
        }
        updateProduct() {
            let prodVal = document.getElementById('products').value;
            const productItem = document.createElement("li");
            productItem.setAttribute("class", "product-item");
            productItem.innerText = prodVal + ".";
            document.querySelector(".product-list").appendChild(productItem);
            const rmvBtn = document.createElement("button");
            rmvBtn.addEventListener("click", newListItem.removeProduct);
            rmvBtn.setAttribute("class", "remove-button");
            rmvBtn.innerText = "usun";
            document.querySelector(".product-list").appendChild(rmvBtn);
        }
        removeProduct() {
            document.querySelector(".product-item").remove();
            document.querySelector(".remove-button").remove();
        }
        updateCategory() {
            let categoryVal = document.getElementById('categories').value;
            console.log(categoryVal);
            const categoryItem = document.createElement('li');
            categoryItem.setAttribute('class', 'category-item');
            categoryItem.innerText = categoryVal + ".";
            document.querySelector('.category-list').appendChild(categoryItem);
        }
    }
    const newListItem = new ListItem("products", "categories", "selector");
    class Products extends ListItem {
        constructor(...params) {
            super(...params);
        }
    }
    class Category extends ListItem {
        constructor(...params) {
            super(...params);
        }
    }
    console.table(newListItem);
    document.getElementById("add-product-btn").addEventListener("click", newListItem.updateProduct);
    document.getElementById("add-category-btn").addEventListener("click", newListItem.updateCategory);
});