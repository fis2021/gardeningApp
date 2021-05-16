import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import Links from '../collections/Links.js';
import './methods.js';



if (Meteor.isServer) {
  describe('method: cart.insert', function () {
    beforeEach(function () {
      Links.remove({});
    });

    it('can add a new link', function () {
      const addLink = Meteor.server.method_handlers['cart.insert'];

      addLink.apply({}, [
      { name:test,
        description:test, 
        price:test,
        userOfItem:test,
        createdAt: new Date,
        userId: test}]);

      assert.equal(Links.find().count(), 1);
    });
  });
}
describe('method: cart.remove', function () {
    beforeEach(function () {
      Links.remove({});
    });

    it('can remove product from cart', function (){
      assert.equal(Links.find().count(), 0);
        });
  });
