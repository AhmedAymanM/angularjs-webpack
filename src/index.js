import angular from 'angular';

import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngSanitize from 'angular-sanitize';

import uirouter from '@uirouter/angularjs';

import routing from './index.route';
import home from './app/home/home.module'
// import './app/app.css';
import './app/styles.scss';

angular.module('app', [
    /* Angular Modules */
    ngMaterial,
    ngAnimate,
    ngAria,
    ngSanitize,
    /* 3rd Party Modules */
    uirouter,
    home
  ])
  .config(routing)
