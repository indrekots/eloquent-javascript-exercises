var http = require('http');
var url = require('url');

function get(urlString, headers) {
  var getUrl = url.parse(urlString);
  var opt = {
    hostname : getUrl.host,
    path: getUrl.pathname,
    method: 'GET',
    headers: headers || {'Accept' : 'text/plain'}
  }
  var req = http.request(opt, function(response) {
    response.on('data', function(chunk) {
      console.log(chunk.toString());
    });
  });
  req.end();
}

get('http://eloquentjavascript.net/author', {'Accept': 'text/plain'});
get('http://eloquentjavascript.net/author', {'Accept': 'text/html'});
get('http://eloquentjavascript.net/author', {'Accept': 'application/json'});
