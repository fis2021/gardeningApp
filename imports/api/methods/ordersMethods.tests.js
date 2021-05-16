import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import Links from '../collections/Links.js';
import './methods.js';

if (Meteor.isServer) {
    describe('method: order.insert', function () {
      beforeEach(function () {
        Links.remove({});
      });
  
      it('can add a new link', function () {
        const addLink = Meteor.server.method_handlers['order.insert'];
  
        addLink.apply({}, [
        {   name:test,
          description:test, 
          price:test,
          userOfItem:test,
          createdAt: new Date,
          userId: test}]);
  
        assert.equal(Links.find().count(), 1);
      });
    });
  }

  describe('method: order.remove', function () {
      beforeEach(function () {
        Links.remove({});
      });
  
      it('can remove orders', function (){
        assert.equal(Links.find().count(), 0);
          });
    });

    describe('method: orders.setIsChecked', function () {
        beforeEach(function () {
          OrdersCollection.remove({});
        });
    
        it('can check orders', function () {
        
        const setIsChecked = Meteor.server.method_handlers['orders.setIsChecked'];
        
         setIsChecked.update(apply, {
            $set: {
            checked : true
            }
        });
          assert.equal(setIsChecked.find().count(), 0);
        });
      });
