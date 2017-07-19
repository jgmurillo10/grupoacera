(function () {
  'use strict';
  angular.module('public')
  .config(routeConfig);

  /**
  * Configures the routes and the views
  */
  routeConfig.$inject = ['$stateProvider', '$locationProvider'];
  function routeConfig($stateProvider, $locationProvider) {
    console.log('routeConfig');
    //pretty urls
    //$locationProvider.html5Mode(true);
    //Routes
    $stateProvider
    .state('public', {
      abstract: true,
      templateUrl:'src/public/public.tpl.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl:'src/public/home/home.tpl.html'
    })
    .state('one',{
      url: '/one',
      templateUrl:'src/public/home/home.tpl.html'
    });

  }

})();
