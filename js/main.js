
const appNav = document.querySelector('.app-nav');
const appNavHide = document.querySelector('.app-nav--hide');
const appNavShow = document.querySelector('.app-nav--show');

const hamburger = document.getElementById('hamburger');


const productContainer = document.querySelector('.product-container');



class Store {


    static get (key) {
        let value = localStorage.getItem(key);
        return value === null ? null : JSON.parse(value);
    }

    static set (key, value) {
        return localStorage.setItem(key, JSON.stringify(value));
    }

    static init(key) {
        if (!Store.isset(key)) {
            Store.set(key, []);
        }
        return Store.get(key);
    }

    static isset(key) {
        return Store.get(key) !== null;
    }
}


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

const productItemTemplate = (product) => `
<div class="card card-badge badge-${product.badge}" data-id="${product.id}">
    <div class="card-figure">
        <div class="icons">
            <a href="#!" class="fas fa-shopping-cart add-to-cart"></a>
            <a href="#" class="fas fa-heart"></a>
            <a href="#" class="fas fa-eye"></a>
        </div>
        <figure class="image">
            <img src="${product.image}" alt="${product.name}">
        </figure>
    </div>
    <div class="card-body" data-title="Black Cat">
        <div class="card-title">${product.name}</div>
        <span class="card-price">${product.price}</span>
    </div>
</div>`;


const populateProductList = () => {
    let content = "";
    products.forEach(item => content += productItemTemplate(item));
    return content;
}

function main() {
    initNav();

    productContainer.innerHTML = populateProductList();

    const addToCartButtons = productContainer.querySelectorAll('.add-to-cart');

    // let shoppingCart = [];
    let shoppingCart = Store.init('basket');


    function saveCart() {
        Store.set('basket', shoppingCart);
    }


    addToCartButtons.forEach(item => {
        item.addEventListener('click', (event) => {
            
            let product = event.target.closest('.card');
            // console.log(product.dataset.id);
            let id = product.dataset.id;
            // console.log(products[id]);
            let item = {
                id: id,
                amount: 1
            };
            shoppingCart.push(item);

            saveCart();
            
        });
    });

    // console.log(shoppingCart);

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
