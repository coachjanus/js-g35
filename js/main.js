"use strict";

import Cart from "./modules/cart.js";
// import Store from "./modules/store.js";
import Home from "./modules/home.js";
import Catalog from "./modules/catalog.js";

import Footer from "./components/footer.js";

customElements.define('footer-component', Footer);

const appNav = document.querySelector('.app-nav');
const appNavHide = document.querySelector('.app-nav--hide');
const appNavShow = document.querySelector('.app-nav--show');

const hamburger = document.getElementById('hamburger');




const hideNav = () => {
    appNav.classList.add('app-nav__hide');
    appNav.classList.remove('app-nav__show');
    appNavShow.classList.toggle('hamburger');
}

const showNav = () => {
    appNav.classList.toggle('app-nav__hide');
    appNav.classList.toggle('app-nav__show');
    appNavShow.classList.toggle('hamburger');
}


function initNav() {
    appNavHide.addEventListener('click', hideNav);
    appNavHide.addEventListener('touchted', hideNav);

    hamburger.addEventListener('click', showNav);
    hamburger.addEventListener('touchted', showNav);
}



function main() {
    initNav();

    let shoppingCart = new Cart();
    
    const homePage = document.getElementById("home-page");
    const shopPage = document.getElementById("shop-page");
    const cartPage = document.getElementById("cart-page");

    if(homePage) {
        const home = new Home();
        const productContainer = document.querySelector('.product-container');
        productContainer.innerHTML = home.populateProductList(products);
        const addToCartButtons = productContainer.querySelectorAll('.add-to-cart');
        shoppingCart.addProductToCartButton(addToCartButtons, 1);
    }
    
    if(shopPage) {
        const catalog = new Catalog();
        const productContainer = document.querySelector('.product-container');
        productContainer.innerHTML = catalog.populateProductList(products);
        const addToCartButtons = productContainer.querySelectorAll('.add-to-cart');
        shoppingCart.addProductToCartButton(addToCartButtons, 1);

        const categoryContainer = document.getElementById('category-container');

        catalog.populateCategories(categoryContainer, categories);
        let categoryItems = categoryContainer.querySelectorAll(".categories a");

        categoryItems.forEach(element => element.addEventListener('click', e => {
                e.preventDefault();
                if (e.target.classList.contains('category-item')) {
                    let category = e.target.dataset.id;
                    const categoryFilter = items => items.filter(item => item.category == category);
                    productContainer.innerHTML = catalog.populateProductList(categoryFilter(products));
                } else {
                    productContainer.innerHTML = catalog.populateProductList(products);
                }
        }
        ));

        const showOnly = document.getElementById('show-only');

        showOnly.innerHTML = catalog.populateBadges(products);

        let checkbox = showOnly.querySelectorAll('input[name="badge"]');

        

        let values = [];

        checkbox.forEach(item => {
            item.addEventListener('change', e => {
                if(e.target.checked) {
                    values.push(item.value);
                } else {
                    if(values.length != 0) {
                        values.pop(item.value);
                    }
                }
                productContainer.innerHTML = values.map(
                    value => catalog.renderList(products, value)
                ).join('');
                if (values.length == 0) {
                    productContainer.innerHTML = catalog.populateProductList(products);
                }
            })
        })


    }

    if(cartPage) {
        const shoppingCartItems = document.querySelector(".shopping-cart-items");

        shoppingCartItems.innerHTML = shoppingCart.populateShoppingCart(products);
        shoppingCart.renderCart(shoppingCartItems);

    }
}

(
    () => {
        if (document.readyState === "loading") {
            document.addEventListener('DOMContentLoaded', main);
        } else {
            main();
        }
    }

)();
