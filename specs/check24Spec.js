import Check24Page from '../pages/check24Page';
const check = new Check24Page();

describe('left menu', () => {
    beforeEach(() => {
        check.goto();
    });
    it('should open left menu', () => {
        check.openAllMenus();
    });
});