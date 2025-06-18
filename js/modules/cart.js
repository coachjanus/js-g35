"use strict";

import Store from "./store.js";


class CartItem {
    constructor(id, amount) {
        this.id = id;
        this.amount = amount;
    }
}

export default class Cart {

    cart = [];

    constructor (key = 'basket') {
        this.cart = Store.init(key);
    }

    saveCart(key = 'basket') {
        Store.set(key, this.cart);
    }

    addProductToCart(cartItem, amount = 1) {
        let inCart = this.cart.some(element => element.id==cartItem.id);

        if (inCart) {
            for(let item of this.cart) {
                if (+item.id == cartItem.id) {
                    item.amount += amount;
                    this.saveCart();
                    return;
                }
            }
        }else{
            let newCartItem = {...cartItem};
            this.cart = [...this.cart, newCartItem];
            this.saveCart();
        }
    }

    addProductToCartButton(buttons, amount) {
        buttons.forEach(element => {
            element.addEventListener('click', event => {
                event.preventDefault();
                let productId = event.target.closest('.card').dataset.id;
                let cartItem = new CartItem(productId, amount);
                this.addProductToCart(cartItem, amount);
            })
        });
    }

}