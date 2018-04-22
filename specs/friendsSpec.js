var chai = require('chai');
chai.use(require('chai-as-promised'));
var expect = chai.expect;

describe('test friends page: ', function () {

    it('add friends', function () {
        // browser.waitForAngularEnabled(false);
        browser.get('');
        element(by.id('add')).sendKeys('Alina');
        element(by.css('body > form > span.input-append > input.btn.btn-primary')).click();
        var friendsList = element.all(by.repeater('row in rows | filter : search'));
        console.log('Adding new friend "Alina"');
        expect(friendsList.count()).to.eventually.equal(4);
        console.log('New friend added succesfully');
        console.log("Cheking that name is displayed in the table correctly");
        expect(friendsList.get(3).getText()).to.eventually.contains('Alina');
        console.log('Name is displayed correctly');
    });
    it('delete friend by name', function () {
        element(by.css('body > form > span.search.input-prepend > input')).sendKeys('John');
        var friendsList = element.all(by.repeater('row in rows | filter : search'));
        expect(friendsList.count()).to.eventually.equal(1);
        expect(friendsList.get(0).getText()).to.eventually.contains('John');
        friendsList.get(0).element(by.css('button.btn.btn-danger.btn-mini')).click();
        element(by.css('button.btn.btn-inverse')).click();
        friendsList = element.all(by.repeater('row in rows | filter : search'));
        expect(friendsList.count()).to.eventually.equal(3);
        //expect(friendsList.get(3).getText()).toContain('Alina');
        var isPresent = false;
        friendsList.count().then(function (count) {
            for (var i = 0; i < count; i++) {
                friendsList.get(i).getText().then(function (rowContent) {
                    console.log('Row content: ' + rowContent);
                });
                expect(friendsList.get(i).getText()).to.eventually.not.contains('John');
            }
        });
    });

    it('add 3 friends and search', function() {
        browser.get('');
        var friends = ['Persik', 'Persiik', 'Persiiik'];

        friends.forEach(function(friend) {
            console.log('Adding friend: ' + friend);
            element(by.id('add')).sendKeys(friend);
            element(by.css('body > form > span.input-append > input.btn.btn-primary')).click();
        });
        //browser.driver.sleep(5000);
    })
});
