'use strict';

var app = angular
  .module('rentify', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ]);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginController'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'signupController'
      })
      .when('/mysites', {
        templateUrl: 'views/mysites.html',
        controller: 'mysitesController'
      })
      .when('/configuresite', {
        templateUrl: 'views/configuresite.html',
        controller: 'configureSiteController'
      })
      .when('/configuresitetheme', {
        templateUrl: 'views/configuresitetheme.html',
        controller: 'configureSiteThemeController'
      })
      .when('/configuresiteproperties', {
        templateUrl: 'views/configuresiteproperties.html',
        controller: 'configureSitePropertiesController'
      })
      .when('/configuresitepages', {
        templateUrl: 'views/configuresitepages.html',
        controller: 'configureSitePagesController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
