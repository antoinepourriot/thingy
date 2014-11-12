'use strict';

/**
 * @ngdoc function
 * @name thingie.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the thingie
 */
angular.module('thingie')
  .controller('MainCtrl', function($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });