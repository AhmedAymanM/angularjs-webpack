import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import HomeController from './home.controller';
import HomeRoute from './home.route'
import './home.scss';

export default angular.module('app.home', [uirouter])
  .config(HomeRoute)
  .controller('HomeController', HomeController)
  .name;
