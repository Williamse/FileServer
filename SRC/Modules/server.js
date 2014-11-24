var http = require("http");
var parseRequest = require("./parseRequest.js");

function startServer() {
  function onRequest(request, response) {
    console.log("Recievied Http Request");
    response.writeHead(200, {"Content-Type": "text/plain"});
    var re = "";
    var obj = parseRequest.parseRequest.getParams(request.url)
    for(var key in obj)
    {
        var next = obj[key]
        for(var prop in next)
        {	    
            if(next.hasOwnProperty(prop)){
             re = re + "\n" + "Key: " + key + " = " + next[prop];
            }
        }
    }
    re = re +"\n" + parseRequest.parseRequest.getPath(request.url) + '\n';
    response.write(re);
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.startServer = startServer;
