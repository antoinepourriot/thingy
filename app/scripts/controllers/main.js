'use strict';

/**
 * @ngdoc function
 * @name thingie.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the thingie
 */
angular.module('thingie')
  .controller('MainCtrl', function($scope, api) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var logindata = {
      'password': 123,
      'userName': 'hlegoz'
    };

    api.login(logindata).then(function() {
      // need to wait for the login promise
      api.campaigns().then(function(data) {
        $scope.activecampaigns = data;
        $scope.activecampaignscount = data.length;
      });

      api.customers().then(function(data) {
        $scope.nearbycustomers = data;
      });

    });

  });