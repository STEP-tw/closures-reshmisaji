/*.......................Make Constant........................*/

const makeConstant = function(parameter){
  return function(){return parameter;};
}

/*....................... Make Counter from number....................*/

const makeCounterFromN = function(parameter){
  let counter1 = parameter;
  let counter2 = parameter;
  let counter3 = parameter;
  let counter4 = parameter;

  switch(parameter){
    case -1:return function(){return counter4++;};
            break
   
    case 1 :return function(){return counter1 ++;}; 
            break; 
    
    case 2 :return function(){ return counter2 ++;};
            break;
    
    case 3 :return function(){ return counter3 ++;};
            break;
  }
}

/*....................... Make Counter from zero........................*/

const makeCounterFromZero = function(){
  let counter = 0;

  return function(){ return counter++;};
}

/*........................Make delta tracker............................*/

const makeDeltaTracker = function(deltaArg){
  let deltaValue = {old : deltaArg, delta : 0, new : deltaArg};
  return function(passedDelta){
    if(passedDelta){
      deltaValue.old = deltaValue.new;
      deltaValue.delta = passedDelta;
      deltaValue.new = deltaValue.new + passedDelta;
    }
    return deltaValue;
  }
}

/*.....................Make fibonacci generator.........................*/
//
//const makeFiboGenerator = function(arg1,arg2){
//  let startValue = 0;
//  let startValueParameter = arg1;
//
//  const generateFibonacci = function(nextValue){ 
//    return function(){let returnValue = startValue;nextValue = startValue+nextValue;startValue = nextValue - startValue;return returnValue;};
//  }
//
//  switch(arg1){
//    case 2:return generateFibonacci(arg1);
//      break;
//    default : return generateFibonacci(1);
//      break;
//  }
//   
//  const doubleArgumentFibonacci = function(nextValue){ 
//    return function(){let returnValue = startValueParameter;nextValue = startValueParameter+nextValue;startValueParameter = nextValue - startValueParameter;return returnValue;};
//  }
//
//  return doubleArgumentFibonacci(arg2);
//}
//

const makeFiboGenerator = undefined;
///*..............................make cycler.................................*/
//const makeCycler = function(collection){
// let index = 0;
//  let length = collection.length;
//  if(length!=collection.length){index=0;}
// const toggle = function(){ 
//   if(index>=length){index = 0;}
//  let returnValue = collection[index];
//   index++;
//   return returnValue;
// }
// return toggle; 
//}
const makeCycler = undefined;

/*..............................curry maker....................................*/

const curry = function(functionREference,parameter){

  return function(firstArgument,secondArgument){return functionREference(parameter,firstArgument,secondArgument)} ;
}

const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
