'use strict';
/*
Simple connect middleware that server the content of the dynamic API.
*/

// Modules imorts
var http = require('http'),
  url = require('url');

/*
Proxify a HTTP request
- options : Parameters of the HTTP request sent to the targeted server,
- request : Incoming http request to the proxy,
- response : Outgoing HTTP response of the proxy,
- callbacks.rewriteHeaders (optional) : callback that modify the HTTP headers of the targeted server response,
*/
function proxyRequest(options, request, response, callbacks) {
  // Call to the targeted server
  var targetRequest = http.request(options, function(targetResponse) {
    var headers = targetResponse.headers;
    if (callbacks && callbacks.rewriteHeaders) {
      headers = callbacks.rewriteHeaders(headers);
    }

    // copy the targeetd server response in the proxy response
    response.writeHead(targetResponse.statusCode, headers);
    targetResponse.on('data', function(chunk) {
      response.write(chunk, 'binary');
    });
    targetResponse.on('end', function() {
      response.end();
    });
  });

  // copy the proxy request into the targeted server request
  request.on('data', function(chunk) {
    targetRequest.write(chunk, 'binary');
  });

  request.on('end', function() {
    targetRequest.end();
  });

  targetRequest.on('error', function(e) {
    console.error('Problem with request: ' + e.message);
  });
}


/* Handle a request to the API */
function handleAPIRequest(apiURL, apiPrefix, request, response) {
  var requestAPI = url.parse(request.url).pathname.substring(apiPrefix.length);
  var options = {
    host: apiURL.hostname,
    port: 8080,
    path: apiURL.pathname + requestAPI + (url.parse(request.url).search || ''),
    method: request.method,
    headers: request.headers
  };
  options.headers.host = apiURL.hostname;

  proxyRequest(options, request, response, {
    // Replace the content of the set-Cookie header
    rewriteHeaders: function(headers) {
      var result = {};

      // Copy of all the headers
      for (var headerName in headers) {
        if (headerName === 'set-cookie') {
          // Rewrite the set-cookie header
          var cookie = headers[headerName][0].split('; ');
          var jsessionId = cookie[0].split('=')[1];
          //          result[headerName] = ['ASP.NET_SessionId=' + jsessionId + '; Path=' + apiPrefix];
          result[headerName] = ['ASP.NET_SessionId=' + jsessionId + '; Path=/'];
        } else {
          result[headerName] = headers[headerName];
        }
      }

      return result;
    }
  });
}

exports.apiProxy = function(options) {

  var apiURL = url.parse(options.url),
    apiPrefix = options.localPrefix;

  // Connect middleware that handle the requests to the API
  var apiProxyMiddleware = function(request, response, next) {
    var uri = url.parse(request.url).pathname;

    if (uri.substring(0, apiPrefix.length) === apiPrefix) {
      // If URI start with API prefix -> API
      console.log('Reverse Proxy Request:', request.method, '\t' + uri);
      handleAPIRequest(apiURL, apiPrefix, request, response);
    } else {
      // Do nothing
      next();
    }
  };

  return apiProxyMiddleware;
};