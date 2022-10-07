var url="http://mylogger.io/log"

function log(msg){
    //Send HTTP Request
    console.log(msg)
}

//In this, log() and url are scope with only this module. 
//We will be accessing these in app.js by exporting

module.exports.myLog=log; 
// module.exports.endPoint=url;   //No need to export url, since it has implemenntaion detail


