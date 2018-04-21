import BasePage from './basePage';

class Check24Page extends BasePage {
    constructor() {
        super();
        this.leftMenu = element(by.css('div.c24-nav-button.c24-header-hover'));
        this.url = '';
        this.navigation = $$('ul.c24-mainnav-sec.clearfix > li > a');
    }

    // openLeftMenu() {
    //     return this.leftMenu.click();
    // }

    // openNavigation(id){
    //     return this.navigation.elements(by.css('a'))[id+1].click();
    // }

    openAllMenus() {
        this.navigation.count().then(count => {
            for (var i = 0 ; i <= count; i++ ){

                this.navigation.get(i).click();
                browser.sleep(3000);

            }
        });
    }


}

export default  Check24Page;