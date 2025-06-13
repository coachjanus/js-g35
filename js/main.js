


// document.addEventListener("DOMContentLoaded", messageShow)




const appNav = document.querySelector('.app-nav');
const appNavHide = document.querySelector('.app-nav--hide');
const appNavShow = document.querySelector('.app-nav--show');

const hamburger = document.getElementById('hamburger');


const productContainer = document.querySelector('.product-container');

const addToCartButtons = productContainer.querySelectorAll('.add-to-cart');

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

    // console.dir(addToCartButtons);

    // for (let i=0; i<addToCartButtons.length; i++) {
    //     console.log(addToCartButtons[i]);
    // }

    addToCartButtons.forEach(item => {
        item.addEventListener('click', (event) => {
            // console.log(item);

            // console.log(event.target);
            let product = event.target.closest('.card');
            // console.log(product);
            console.log(product.children[1].children[1].innerHTML);
            console.log(product.children[1].children[1].innerText);
            console.log(product.children[1].children[0]);
            console.log(product.children[1].dataset.title);
        });
    });

}

(
    () => {
        if(document.readyState === "loading") {
            document.addEventListener('DOMContentLoaded', main);
        }else{
            main();
        }
    }

)();
