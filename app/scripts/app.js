'use strict';

/**
 * @ngdoc overview
 * @name thingyApp
 * @description
 * # thingyApp
 *
 * Main module of the application.
 */
angular
  .module('thingyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'nvd3ChartDirectives'
    ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/nvd3example', {
        templateUrl: 'views/nvd3example.html',
        controller: 'nvd3example'
      })
      .otherwise({
        redirectTo: '/'
      });
  });