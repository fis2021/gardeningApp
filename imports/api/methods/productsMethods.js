import { check } from 'meteor/check';
import { ProductsCollection } from '../collections/ProductsCollection';
    
Meteor.methods({
    'products.insert'(toSend) {
    check(toSend.name, String);
    
    if (!this.userId) {
    throw new Meteor.Error('Not authorized.');
    }
    
    ProductsCollection.insert({
    name:toSend.name,
    description:toSend.description, 
    price:toSend.price,
    createdAt: new Date,
    userId: this.userId,
    })
    },
    
    'products.remove'(productId) {
    check(productId, String);
    
    if (!this.userId) {
        throw new Meteor.Error('Not authorized.');
    }
    
    ProductsCollection.remove(productId);
    },
    
    'products.setIsChecked'(productId, isChecked) {
    check(productId, String);
    check(isChecked, Boolean);
    
    if (!this.userId) {
    throw new Meteor.Error('Not authorized.');
    }
    
    ProductsCollection.update(productId, {
        $set: {
        isChecked
        }
    });
    }
});