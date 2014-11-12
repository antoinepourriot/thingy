angular.module('thingie').controller('loginCtrl', function($scope, api) {
  'use strict';

  var logindata = {
    'password': 123,
    'userName': 'hlegoz'
  };

  api.login.postForm(logindata).then(function(data) {
    console.log('logged' + data);
  });

  api.campaigns.postForm().then(function(data) {
    console.log('logged' + data);
  });

  api.customers.postForm().then(function(data) {
    console.log('logged' + data);
  });

});