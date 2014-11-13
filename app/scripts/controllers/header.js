angular.module('thingie').controller('headerCtrl', function($scope, $route) {
  'use strict';

  $scope.refresh = function() {
    $route.reload();
  };

});