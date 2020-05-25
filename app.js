/*const tutorial =require('./tutorial');
console.log(tutorial);
console.log(tutorial.sum(1,1));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());
*/
const EventEmitter = require('events');
const eventEmitter =new EventEmitter();

eventEmitter.on('tutorial',(num1,num2)=>{
    console.log(num1+num2);
});

eventEmitter.emit('tutorial',1,2);

//event emitter class
class Person extends EventEmitter{
    constructor(name){
        super();
        this._name=name;
    }
    get name(){
        return this._name;
    }
}

let sanuri=new Person('sanuri');
sanuri.on('name',()=>{
    console.log('My name is '+sanuri.name);
});

//exicute the emitter class
sanuri.emit('name');
