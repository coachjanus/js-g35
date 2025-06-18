"use strict";

import Cart from "./modules/cart.js";
// import Store from "./modules/store.js";
import {populateProductList} from "./modules/catalog.js";

const appNav = document.querySelector('.app-nav');
const appNavHide = document.querySelector('.app-nav--hide');
const appNavShow = document.querySelector('.app-nav--show');

const hamburger = document.getElementById('hamburger');


const productContainer = document.querySelector('.product-container');

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

    productContainer.innerHTML = populateProductList();
    const addToCartButtons = productContainer.querySelectorAll('.add-to-cart');
    let shoppingCart = new Cart();
    shoppingCart.addProductToCartButton(addToCartButtons, 1);
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
