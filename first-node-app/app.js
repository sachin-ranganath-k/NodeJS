const loggerInApp=require('./logger')   //require() is used to import the modules which are exported from other modules
// console.log(loggerInApp) //{ myLog: [Function: log] }


//Now we can use exported data from other module i.e., logger module
// loggerInApp.myLog("Hello world..!")  //myLog is exported function from logger.js

//Call just function, not like object
loggerInApp('hi');
