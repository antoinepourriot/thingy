angular.module('thingie').controller('validateCtrl', function($scope, api) {
  'use strict';

  $scope.campaignecode = 'HQCUH8TD';

  $scope.activatecode = function() {

    console.log({
      '': $scope.campaignecode
    });
    var campaignecode = {
      '': $scope.campaignecode
    };

    api.campaignsvalidate(campaignecode, function() {
      $scope.validation = [
        {
          'isValidated': 'false',
          'isLoan': 'false'
        }
      ];

    }).then(function(data) {
      console.log('toto');
      $scope.validation = [
        {
          'isValidated': 'true',
          'isLoan': data.isLoan
        }
      ];
    });

  };





});