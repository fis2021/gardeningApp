import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import OrdersCollection from './OrdersCollection.js';

if (Meteor.isServer) {
  describe('orders collection', function () {
    it('insert correctly', function () {
      const orderId = OrdersCollection.insert({
        title: 'meteor homepage',
        url: 'https://www.meteor.com',
      });
      const added = OrdersCollection.find({ _id: orderId });
      const collectionName = added._getCollectionName();
      const count = added.count();

      assert.equal(collectionName, 'orders');
      assert.equal(count, 1);
    });
  });
}
