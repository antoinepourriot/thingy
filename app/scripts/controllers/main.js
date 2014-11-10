'use strict';

/**
 * @ngdoc function
 * @name thingyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the thingyApp
 */
angular.module('thingyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
