angular.module('thingie').factory('api', function($q, $http) {
  'use strict';

  var apiCall = function(url, options) {
    var deferred, reject, resolve, opts;
    opts = options || {};
    deferred = $q.defer();
    reject = deferred.reject;
    opts.url = url;
    resolve = function(result) {
      deferred.resolve(result.data);
    };

    $http(opts).then(resolve, reject);


    return deferred.promise;
  };

  return {
    login: {
      postForm: function(data) {
        return apiCall('/api/users/login', {
          method: 'POST',
          data: data
        });
      }
    },
    campaigns: {
      postForm: function(data) {
        return apiCall('/api/campaigns', {
          method: 'GET',
          data: data
        });
      }
    },
    customers: {
      postForm: function(data) {
        return apiCall('/api/customers/nearby', {
          method: 'GET',
          data: data
        });
      }
    }
  };
});