import home from './home.module';

describe('home', () => {

  describe('HomeController', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(home);

      angular.mock.inject(($controller) => {
        ctrl = $controller('HomeController', {});
      });
    });

    it('should contain the starter url', () => {
      expect(ctrl.url).toBe('https://github.com/preboot/angular-webpack');
    });
  });
});
