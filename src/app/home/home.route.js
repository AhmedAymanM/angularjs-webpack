import HomeController from './home.controller';

  export default function HomeRoute ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        template: require('./home.template.html'),
        controller: HomeController,
        controllerAs: 'ctrl'
      });
  }
