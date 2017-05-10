import angular from 'angular';

import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngSanitize from 'angular-sanitize';
import ngCookies from 'angular-cookies';
import ngMessages from 'angular-messages';
import 'angular-ui-router';

import './app.css';
import './styles.scss';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
    /* Angular Modules */
    'ngMaterial',
    'ngAnimate',
    'ngAria',
    'ngSanitize',
    'ngCookies',
    'ngMessages',
    /* 3rd Party Modules */
    'ui.router'
  ])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
