var chai = require('chai');
chai.use(require('chai-as-promised'));
chai.use(require('chai-smoothie'));
const expect = chai.expect;
// var expect = chai.expect;
import friendPage from '../pages/myFriendsPage';

describe('test friends page: ', function () {
    var friendName = 'Andrii';
    it('add friends', function () {
        browser.get('');
        friendPage.addFriend(friendName);
        expect(friendPage.getFriendByName(friendName)).to.be.present;

    });
    it('remove friend by name', () => {
        friendPage.deleteFriend(friendName);
        expect(friendPage.getFriendByName(friendName)).to.be.not.present;
    })

});
