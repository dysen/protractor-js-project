class MyFriends {
    constructor() {
        this.addFriendInput = element(by.id('add'));
        this.addFriendButton = element(by.css('body > form > span.input-append > input.btn.btn-primary'));
        this.searchFriendField = element(by.css('body > form > span.search.input-prepend > input'));
    }

    addFriend(friendName) {
        this.addFriendInput.sendKeys(friendName);
        return this.addFriendButton.click();
    }

    searchFriend(searchText) {
        return this.searchFriendField.sendKeys(searchText);

    }

    getFriends() {
        return element.all(by.repeater('row in rows | filter : search'));
    }

    deleteFriend(friendName) {
        element(by.xpath('//td[text()="'+friendName+'"]/parent::tr//button')).click();
    }

    getFriendByName(friendNAme) {
        return element(by.xpath('//td[text()="Andrii"]'));
    }

}

export default new MyFriends();
