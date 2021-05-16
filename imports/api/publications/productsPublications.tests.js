import { assert } from 'chai'
import { PublicationCollector } from 'meteor/johanbrook:publication-collector'
//import ProductsPublications from '../collections/ProductsPublication.js'
import './publications.js'

describe('Publish products', function () {
  beforeEach(function () {
    ProductsPublication.remove({})
    ProductsPublication.insert({
      title: 'meteor homepage',
      url: 'https://www.meteor.com'
    })
  })

  it('sends all products', function (done) {
    const collector = new PublicationCollector()
    collector.collect('ProductsPublications', (collections) => {
      assert.equal(collections.ProductsPublication.length, 1)
      done()
    })
  })
})