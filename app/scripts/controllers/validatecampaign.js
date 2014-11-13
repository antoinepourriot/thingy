angular.module('thingie').controller('validateCtrl', function($scope) {
  'use strict';

  $scope.validation = [
      {
        'campaignID': '1',
        'isValidated': 'true',
        'isLoan' : 'true'
      }
    ];

});