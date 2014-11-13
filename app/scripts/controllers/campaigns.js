angular.module('thingie').controller('campaignsCtrl', function($scope, api) 
 {
  'use strict';

        // need to wait for the login promise
      api.campaigns().then(function(data) 
      {
        $scope.activecampaigns = data;
        $scope.activecampaignscount = data.length;
      });


	 



     $scope.campaignData = [
        {
          'id': '1',
          'Name': 'Discount for laptops',
          'Type' : 'Bonus',
          'MinAge' : '2',
          'MaxAge' : '4',
          'Description' : '5% discount on laptops for girls 18-35',
          'BeginDate' : '10.11.2014',
          'EndDate' : '25.11.2014',
          'Interests' : 'Laptop, playbook, vaio',
          'Gender' : 'Male'
        }
      ];



});