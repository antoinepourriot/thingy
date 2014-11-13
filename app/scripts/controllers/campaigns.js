angular.module('thingie').controller('campaignsCtrl', function($scope, api) 
 {
  'use strict';

        // need to wait for the login promise
      api.campaigns().then(function(data) 
      {
        $scope.activecampaigns = data;
        $scope.activecampaignscount = data.length;
      });


	 
	$scope.number = 50;
	$scope.getNumber = function(num) {
    return new Array(num);   
	}


     $scope.campaignData = [
        {
          'id': '1',
          'Name': 'Discount for laptops',
          'Type' : 'Bonus',
          'MinAge' : '18',
          'MaxAge' : '35',
          'Description' : '5% discount on laptops for girls 18-35',
          'BeginDate' : '10.11.2014',
          'EndDate' : '25.11.2014',
          'Interests' : 'Laptop, playbook, vaio',
          'Gender' : 'Male'
        }
      ];



});