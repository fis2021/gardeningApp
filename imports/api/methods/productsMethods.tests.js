import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import Links from '../collections/Links.js';
import './methods.js';



if (Meteor.isServer) {
  describe('method: products.insert', function () {
    beforeEach(function () {
      Links.remove({});
    });

    it('can add a new link', function () {
      const addLink = Meteor.server.method_handlers['products.insert'];

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
describe('method: products.remove', function () {
    beforeEach(function () {
      Links.remove({});
    });

    it('can remove product from products', function (){
      assert.equal(Links.find().count(), 0);
        });
  });
