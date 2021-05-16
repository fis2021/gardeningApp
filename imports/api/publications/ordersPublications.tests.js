import { assert } from 'chai'
import { PublicationCollector } from 'meteor/johanbrook:publication-collector'
//import ordersPublications from '../collections/ordersPublication.js'
import './publications.js'

describe('Publish orders', function () {
  beforeEach(function () {
    OrdersPublication.remove({})
    OrdersPublication.insert({
      title: 'meteor homepage',
      url: 'https://www.meteor.com'
    })
  })

  it('sends all orders', function (done) {
    const collector = new PublicationCollector()
    collector.collect('OrdersPublications', (collections) => {
      assert.equal(collections.OrdersPublication.length, 1)
      done()
    })
  })
})