
angular.module('thingie').controller('newCampaignCtrl', function($scope, api) 
 {
  'use strict';



        // need to wait for the login promise
      api.campaigns().then(function(data) 
      {
        $scope.activecampaigns = data;
        $scope.activecampaignscount = data.length;
      });


});


     