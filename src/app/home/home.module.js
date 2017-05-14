import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import HomeController from './home.controller';

import './home.scss';

export default angular.module('app.home', [uirouter])
  .config(homeRoute)
  .controller('HomeController', HomeController)
  .name;

  function homeRoute ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        template: require('./home.template.html'),
        controller: 'HomeController',
        controllerAs: 'ctrl'
      });
  }
