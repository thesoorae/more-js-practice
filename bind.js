Function.prototype.myBind  = function (context) {
  // return this.apply(context);
    return () => {
      this.apply(context);
  };
};
//
// Function.prototype.myBind = function(context){
//   const current_func = this;
//   // console.log(this);
//   const newFunc = function(){
//     // console.log(this);
//     current_func.apply(context);
//   };
//   return newFunc;
// };




class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {

   console.log("Turning on " + this.name);
};

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"
