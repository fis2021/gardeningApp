<template>
    <div class="app">
        
        <div class="main">
            <div class ="title-page">
            <h2>Cart</h2>
            </div>
                <div class="loading" v-if="!$subReady.cart">Loading...</div>
            <table class="products">
                <tr>
                    <th> Name </th>
                    <th> Description </th>
                    <th> Price </th>
                    <th> Delete</th>
                </tr>
                <CartElement 
                class="product"
                v-for="car in cart"
                v-bind:key="car._id"
                v-bind:car="car" 
                />
                
            </table>
            <br><br>
            <div class="item" >
                    <center>  <button class="placeOrder" @click="placeOrder" >Place Order</button> </center>
            </div>
        </div>

    </div>
</template>

<script>

import Vue from "vue";

import CartElement from "./CartElement.vue";

import { CartCollection } from "../../api/collections/CartCollection.js";
import { OrdersCollection } from "../../api/collections/OrdersCollection.js";

export default {
    components: {
        CartElement
    },

    methods: {
            placeOrder() {
            var currentUser =  Meteor.user();

            const userFilter = currentUser ? { userId: currentUser._id } : {};
            var items = CartCollection.find(
            userFilter,{sort: { createdAt: -1 },}).fetch();

            console.log(items);

            items.forEach(item => OrderFunction(item));

            function OrderFunction(item){
                
                
                var toSend = {
                    name:item.name,
                    description:item.description,
                    price:item.price,
                    address:currentUser.profile.address,
                    userId:item.userOfItem

                };
        
            Meteor.call('orders.insert', toSend);
            Meteor.call('cart.remove', item._id);
            }
        },

        
    },
    meteor: {
    $subscribe: {
    'cart': []
    },
    cart() {
        if (!this.currentUser) {
        return [];
        }

        
        const userFilter = this.currentUser ? { userId: this.currentUser._id } : {};

        
        return  CartCollection.find(
            userFilter,{sort: { createdAt: -1 },}).fetch();
        
    },

    
    currentUser() {
        return Meteor.user();
    }
}
};
</script>
