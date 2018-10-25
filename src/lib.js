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

const makeFiboGenerator = function(arg1,arg2){
  let startValue = 0;
  let nextValue = 1;

  const generateFibonacci = function(start,nextValue){ 
    return function(){returnVAlue = startValue;nextValue = startValue+nextValue;startValue = nextValue - startValue;return returnVAlue;};
  }

  switch(arg1){
    case 2:return generateFibonacci(0,2);
      break;
    default : return generateFibonacci(0,1);
      break;
  }
  return generateFibonacci(0,1);
}


const makeCycler = undefined;
const curry = undefined;
const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
