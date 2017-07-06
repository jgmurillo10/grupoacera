(function () {
  'use strict';
  angular.module('public')
  .config(routeConfig);

  /**
  * Configures the routes and the views
  */
  routeConfig.$inject = ['$stateProvider','$urlRouterProvider'];

  function routeConfig($stateProvider,$urlRouterProvider) {
    //default route
    $urlRouterProvider.otherwise("/");
    //pretty urls
    $locationProvider.html5Mode(true);
    //Routes
    $stateProvider
    .state('public', {
      abstract: true,
      templateUrl:'src/public/public.tpl.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl:'src/public/home/home.tpl.html'
    });

  }

})();
