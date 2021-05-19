<template>
    <div class="app">
        
        <div class="main">
            <div class ="title-page">
                <h2>Products</h2>
            </div>
            <div v-if="this.currentUser.profile.usertype === 'Seller' ">
                <ProductForm/>
            </div>
            <table class="products">
                <tr>
                    <th> Name </th>
                    <th> Description </th>
                    <th> Price </th>
                    <th></th>
                </tr>
                <Product 
                class="product"
                v-for="product in products"
                v-bind:key="product._id"
                v-bind:product="product" 
                />
                
            </table>
            <ul >
                
            </ul>
        </div>
    </div>
</template>

<script>
import Vue from "vue";

import Product from "./Product.vue";
import ProductForm from "./ProductForm.vue";

import { ProductsCollection } from "../../api/collections/ProductsCollection.js";


export default {
    components: {
        Product,
        ProductForm
    },
    data() {
        return {
        };
    },
    methods: {
        toggleHideCompleted() {
        this.hideCompleted = !this.hideCompleted;
    }
    },
    meteor: {
    $subscribe: {
    'products': []
    },
    products() {
        const currentUser = Meteor.user();

        const SellerFilter = currentUser? { userId: currentUser._id } : {};
        
        if(currentUser.profile.usertype === 'Seller'){
            return ProductsCollection.find(
                        SellerFilter,
                        {
                        sort: { createdAt: -1 },
                        }
                    ).fetch();
        } else {
            return ProductsCollection.find().fetch();
        }

    },

    currentUser() {
        return Meteor.user();
    }
}
};
</script>