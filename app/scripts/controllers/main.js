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

      api.trends().then(function(data) {
        $scope.trends = data;
      });

    });


    $scope.sd = [
      {
        'Name': 'beats',
        'Count': 1
      }, {
      'Name': 'creative',
      'Count': 1
      }, {
      'Name': 'earphone',
      'Count': 1
      }, {
      'Name': 'iphone',
      'Count': 1
      }, {
      'Name': 'macbook',
      'Count': 1
    }];
    // function for the donut chart
    $scope.xFunction = function() {
      return function(d) {
        return d.Name;
      };
    };
    $scope.yFunction = function() {
      return function(d) {
        return d.Count;
      };
    };
    $scope.toolTipContentFunction = function() {
      return function(key, x, y) {
        return 'Super New Tooltip' +
          '<h1>' + key + '</h1>' +
          '<p>' + y + ' at ' + x + '</p>';
      };
    };
  });