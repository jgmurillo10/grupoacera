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
    .state('public.services.electricalConsulting', {
      url: '/services/electricalConsulting',
      templateUrl: 'src/public/services/electricalConsulting.tpl.html'
    })
    .state('public.services.fotocopy', {
      url: '/services/outsourcing',
      templateUrl: 'src/public/services/fotocopy.tpl.html'
    })
    .state('public.services.electricalProjects', {
      url: '/services/electricalProjects',
      templateUrl: 'src/public/services/electricalProjects.tpl.html'
    })
    .state('public.services.electricalSupplies', {
      url: '/services/electricalSupplies',
      templateUrl: 'src/public/services/electricalSupplies.tpl.html'
    }).state('public.services.electromechanic', {
      url: '/services/electromechanic',
      templateUrl: 'src/public/services/electromechanic.tpl.html'
    })
    .state('public.services.telco', {
      url: '/services/telco',
      templateUrl: 'src/public/services/telco.tpl.html'
    })
    .state('public.services.civilConsulting', {
      url: '/services/civilConsulting',
      templateUrl: 'src/public/services/civilConsulting.tpl.html'
    }).state('public.services.civilHidro', {
      url: '/services/civilHidro',
      templateUrl: 'src/public/services/civilHidro.tpl.html'
    })
    .state('public.services.urbanProjects', {
      url: '/services/urbanProjects',
      templateUrl: 'src/public/services/urbanProjects.tpl.html'
    })
    .state('public.services.institutionalProjects', {
      url: '/services/institutionalProjects',
      templateUrl: 'src/public/services/institutionalProjects.tpl.html'
    })
    .state('public.services.civilTransport', {
      url: '/services/civilTransport',
      templateUrl: 'src/public/services/civilTransport.tpl.html'
    })
    .state('public.customers', {
      url: '/customers',
      templateUrl:'src/public/customers/customers.tpl.html'
    });

  }

})();
