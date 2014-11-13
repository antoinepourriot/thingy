angular.module('thingie').controller('headerCtrl', function($scope, $route, $location) {
  'use strict';

  $scope.refresh = function() {
    $route.reload();
  };
  // highlight tab based on view location
  $scope.getClass = function(path) {
    if ($location.path().substr(0, path.length) === path) {
      return 'active';
    } else {
      return '';
    }
  };

});