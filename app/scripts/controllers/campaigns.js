angular.module('thingie').controller('campaignsCtrl', function($scope, api) {
  'use strict';

  api.campaigns().then(function(data) {
    $scope.activecampaigns = data;
    $scope.activecampaignscount = data.length;
  });

  $scope.addCampaign = function() {
    $scope.activecampaignscount++;
    $scope.addingacampaigne = true;
    $scope.activecampaigns.push(
      {
        'Id': $scope.activecampaignscount,
        'Name': '',
        'DaysAgo': 0
      }
    );


  };


  $scope.getcampdetails = function(camp) {

    if (camp.Name !== '' && !$scope.addingacampaigne) {
      api.campaigndetails(camp.Id).then(function(data) {
        $scope.campaigndetails = data;
        $scope.addingacampaigne = false;
      });
    } else {
      $scope.campaigndetails = {
        'Id': '',
        'Name': '',
        'DaysAgo': 0
      };
    }
  };

  $scope.editcampaign = function(campaigndetails) {
    var opts = {
      'Name': $scope.campaigndetails.Name,
      'BeginDate': $scope.campaigndetails.BeginDate,
      'EndDate': $scope.campaigndetails.EndDate,
      'Interests': $scope.campaigndetails.Interests
    };
    console.log(campaigndetails.Name);
    console.log('opts');

    if (!$scope.addingacampaigne) {
      api.editcampaign(campaigndetails.Id, opts).then(function(data) {
        $scope.campaigndetails = data;
      });
    } else {
      $scope.campaigndetails.BeginDate = '2014-11-01T00:00:00';
      $scope.campaigndetails.EndDate = '2014-12-01T00:00:00';
      api.addcampaign(campaigndetails).then(function(data) {
        console.log(data);
      });
    }


  };

  /*
  UpdatableCampaignDetailedInfo {
    Name (string, optional),
    BeginDate (string, optional),
    EndDate (string, optional),
    Type (string, optional),
    MinAge (integer, optional),
    MaxAge (integer, optional),
    Description (string, optional),
    Gender (string, optional),
    Interests (string, optional)
  }
  */



});