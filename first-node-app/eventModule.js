const EventEmitter = require('events')
//When we call require('events') we get Event Emitter CLASS

//Need to create instace of class (object) like,
const emitter= new EventEmitter()

// We need to register a listener to use emitter
emitter.on('messageLogged',(eventArg)=>{
    console.log('Listener called', eventArg.id) //Listener called 1
})

emitter.emit('messageLogged', {id:1, url:'http://'})  //To raise an event with event argument


