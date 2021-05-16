import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import { Accounts } from 'meteor/accounts-base';


if (Meteor.isServer) {
  describe('method: account.create', function () {
	
	beforeEach(function () {
    Accounts.remove({})
    Accounts.createUser({	
			username: test,
            password: password,
            profile: {
                name:"test",
                address: 'test',
                usertype: 'admin',
            }})
  })

    it('can add a new account', function () {
      const addAccount = Meteor.server.method_handlers['account.create'];

      addAccount.apply({}, [{	
			username: test,
            password: password,
            profile: {
                name:"test",
                address: 'test',
                usertype: 'admin',
            }
      }]);

            assert.equal(addAccount.find().count(), 1 ||3 ||4 );
    });
  });
}