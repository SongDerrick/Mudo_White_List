const http = require("http");

const server = http.createServer(function(req, res){
  const url = req.url;
  console.log(req);
});

server.listen(3000);
