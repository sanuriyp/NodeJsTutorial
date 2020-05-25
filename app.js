/*const tutorial =require('./tutorial');
console.log(tutorial);
console.log(tutorial.sum(1,1));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());
*/
const EventEmitter = require('events');
const eventEmitter =new EventEmitter();

eventEmitter.on('tutorial',()=>{
    console.log('tutorial event has occurred');
});

eventEmitter.emit('tutorial');