
// console.log(document.domain); // localhost
// console.log(document.URL); // http://localhost:1234/
// console.log(document.title); // Shopping cart
// console.log(document.doctype); // <!DOCTYPE html>
// console.log(document.head); 
// console.log(window.login)

let hero = document.getElementById('hero');
let user = document.getElementById('user');
// console.log(user)
// console.log(hero)

let first_element = document.querySelector('nav a');
// console.log(first_element)

let h1 = document.querySelector('h1')
// console.log(h1)

h1.addEventListener('click', function(){
    h1.style.color = "red"
    h1.textContent = "Hey I am changed" ;
})
// h1.style.color = "red"
// h1.textContent = "Hey I am changed" ;

let card = document.querySelector('.card')
console.log(card.classList)
// h1.style.cssText = "color:rgb(177, 7, 146); font: 300 18px/1.6 'Source Sans Pro',sans-serif; margin:0; padding: 5em 0 2em; text-align: center;";

// let chimg = document.querySelector("figure img")

// chimg.setAttribute( 'src', '/images/product-11.jpg')
function messageShow() {
    console.log("DOM Content Loaded") 
}

document.addEventListener("DOMContentLoaded", messageShow)


let shopping_cart = document.querySelector(".card-figure .fa-shopping-cart")


shopping_cart.addEventListener("click", function(e) {
    console.log(shopping_cart)
    console.log(e)
    console.log(e.target)
})