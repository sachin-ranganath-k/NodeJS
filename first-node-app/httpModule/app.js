//Generally http module won't be used for applications.
//Instead express framework will be used
const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    // console.log("requestt", request);
    // console.log("response", response);
    response.write("Hello..!");
    response.end();
    //The res.end() method ends the current response process. This method is used to quickly end the response without any data.
  }

  if (request.url === "/api/details") {
    //Visit localhost:3000/api/details
    response.write(JSON.stringify([10, 20, 30])); //Type: string
    response.end();
  }
});
server.listen(3300);

console.log("Listening 3300..!");
