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
    .state('public.about',{
      abstract: true,
      templateUrl:'src/public/about/about.tpl.html'
    })
    .state('public.about.mision', {
      url: '/about/mision',
      templateUrl: 'src/public/about/mision.tpl.html'
    })
    .state('public.about.politica', {
      url: '/about/politica',
      templateUrl: 'src/public/about/politica.tpl.html'
    })
    .state('public.about.vision', {
      url: '/about/vision',
      templateUrl: 'src/public/about/vision.tpl.html'
    })
    .state('public.about.who', {
      url: '/about/who',
      templateUrl: 'src/public/about/who.tpl.html'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'src/common/contact.tpl.html'
    })
    .state('public.projects', {
      abstract: true,
      templateUrl: 'src/public/projects/projects.tpl.html'
    })
    .state('public.projects.civil', {
      url: '/projects/civil',
      templateUrl: 'src/public/projects/civil.tpl.html'
    })
    .state('public.projects.electrical', {
      url: '/projects/electrical',
      templateUrl: 'src/public/projects/electrical.tpl.html'
    })
    .state('public.projects.systems', {
      url: '/projects/systems',
      templateUrl: 'src/public/projects/systems.tpl.html'
    })
    .state('public.services', {
      abstract: true,
      templateUrl: 'src/public/services/services.tpl.html'
    })
    .state('public.services.electrical', {
      url: '/services/electrical',
      templateUrl: 'src/public/services/electrical.tpl.html'
    })
    .state('public.services.civil', {
      url: '/services/civil',
      templateUrl: 'src/public/services/civil.tpl.html'
    })
    .state('public.services.systems', {
      url: '/services/systems',
      templateUrl: 'src/public/services/systems.tpl.html'
    });

  }

})();
