import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import CartCollection from './CartCollection.js';

if (Meteor.isServer) {
  describe('cart collection', function () {
    it('insert correctly', function () {
      const cartId = CartCollection.insert({
        title: 'meteor homepage',
        url: 'https://www.meteor.com',
      });
      const added = CartCollection.find({ _id: cartId });
      const collectionName = added._getCollectionName();
      const count = added.count();

      assert.equal(collectionName, 'cart');
      assert.equal(count, 1);
    });
  });
}
