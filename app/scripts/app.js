'use strict';

/**
 * @ngdoc overview
 * @name thingie
 * @description
 * # thingie
 *
 * Main module of the application.
 */
angular
  .module('thingie', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngResource',
    'ngTouch',
    'ui.bootstrap',
    'nvd3ChartDirectives'
    ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/trendanalysis', {
        templateUrl: 'views/trendanalysis.html',
        controller: 'trendanalysisCtrl'
      })
      .when('#/campaigns', {
        templateUrl: 'views/campaigns.html',
        controller: 'campaignsCtrl'
      })
      .when('/nvd3example', {
        templateUrl: 'views/nvd3example.html',
        controller: 'nvd3exampleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });