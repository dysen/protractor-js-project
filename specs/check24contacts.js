describe('check contacts number', function () {

    xit('on main page', function () {
        // browser.waitForAngularEnabled(false);
        browser.get("");
        expect(browser.getTitle()).toBe('CHECK24 - Versicherungen, Kredit, Strom, DSL & Reisen im Vergleich');
        var phoneNumber = element(by.css('div.c24-phone'));
        expect(phoneNumber.getText()).toContain('089 - 24 24 12 34');
    });
    xit('extended', function () {
        var departmentList = $$('div.c24-contact.c24-header-hover.clearfix ul li');
        expect(departmentList.count()).toBe(7);
    })


});
describe('check phone plans', function () {
    it('on main page I go to phone plan', function () {
        browser.get("/konto-kredit");
        element(by.id('kp')).sendKeys('50000');
        // element(by.css('#pupo > div > div')).click;
        // selectDropDown(element(by.css('#pupo > div > div'), 2, 1000);

        browser.driver.executeScript("document.querySelectorAll('.icon-double-angle-down').forEach(function(a) {\n" +
            "  a.remove()\n" +
            "})");
        browser.sleep(10000);
        element(by.css('#pupo > div > div')).click();
        browser.sleep(10000);
        element(by.cssContainingText('option', 'Motorrad')).click();
        browser.sleep(4000);

        var parent = document.getElementsByClassName('#pupo > div > ul > div');
        var child = document.getElementsByClassName('icon-double-angle-down');
        parent.remote(child)
    })


});
