const mainPage = require("./module/html.js");
// html 문자열 가져오고
console.log(mainPage)

const http = require("http");
// "http 가져오고"
const server = http.createServer(function(request, response){
  response.statusCode = 200;
  response.setHeader("Content-type","text/html");
  // html로 만들겠다고 정해주고
  // response.write("test");
  response.end(mainPage);
});

server.listen(2080, function(error){
  if(error){
    console.log("server not working");
  }else{
    console.log("sever on working");
  }
  // 서버 에러 체크하고
})