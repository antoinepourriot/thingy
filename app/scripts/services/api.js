angular.module('thingie').factory('api', function($q, $http) {
  'use strict';

  var apiCall = function(url, options) {
    var deferred, reject, resolve, opts;
    opts = options || {};
    deferred = $q.defer();
    reject = deferred.reject;
    opts.url = url;
    // Passing Credentials in Cross-Origin Requests
    // http://www.asp.net/web-api/overview/security/enabling-cross-origin-requests-in-web-api
    opts.withCredentials = true;
    resolve = function(result) {
      deferred.resolve(result.data);
    };

    $http(opts).then(resolve, reject);


    return deferred.promise;
  };

  var backend = 'http://thingy-ing.azurewebsites.net';

  return {
    login: function(data) {
      return apiCall(backend + '/api/users/login', {
        method: 'POST',
        data: data
      });
    },
    campaigns: function() {
      return apiCall(backend + '/api/campaigns', {
        method: 'GET'
      });
    },
    customers: function() {
      return apiCall(backend + '/api/customers/nearby', {
        method: 'GET'
      });
    },
    trends: function() {
      return apiCall(backend + '/api/trends/nearby', {
        method: 'GET'
      });
    }
  };
});