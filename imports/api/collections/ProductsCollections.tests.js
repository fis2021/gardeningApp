import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import ProductsCollection from './ProductsCollection.js';

if (Meteor.isServer) {
  describe('product collection', function () {
    it('insert correctly', function () {
      const productId = ProductsCollection.insert({
        title: 'meteor homepage',
        url: 'https://www.meteor.com',
      });
      const added = ProductsCollection.find({ _id: productId });
      const collectionName = added._getCollectionName();
      const count = added.count();

      assert.equal(collectionName, 'products');
      assert.equal(count, 1);
    });
  });
}
