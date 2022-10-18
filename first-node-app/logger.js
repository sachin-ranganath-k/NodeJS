const EventEmitter = require("events");

var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(msg) {
    //Send HTTP Request
    console.log(msg);
    this.emit("messageLogged", { id: 1, url: "http://" }); //To raise an event with event argument
  }
}

module.exports = Logger;
