import { assert } from 'chai'
import { PublicationCollector } from 'meteor/johanbrook:publication-collector'
//import CartPublications from '../collections/CartPublications.js'
import './publications.js'

describe('Publish cart', function () {
  beforeEach(function () {
    CartPublication.remove({})
    CartPublication.insert({
      title: 'meteor homepage',
      url: 'https://www.meteor.com'
    })
  })

  it('sends all cart it', function (done) {
    const collector = new PublicationCollector()
    collector.collect('CartPublications', (collections) => {
      assert.equal(collections.CartPublication.length, 1)
      done()
    })
  })
})