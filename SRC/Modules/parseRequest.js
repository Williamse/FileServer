var url = require("url");
var querystring = require("querystring");
var parseRequest = {

  //Returns an object containg the request parameters
  getParams : function getParams(requestUrl) {
    return querystring.parse(url.parse(requestUrl).query);
  }
  ,
  getPath : function getPath(requestUrl)
  {
    return url.parse(requestUrl).pathname;
  }
};

exports.parseRequest = parseRequest;
