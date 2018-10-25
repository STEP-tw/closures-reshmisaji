const makeConstant = function(parameter){
  return function(){return parameter;};
}
  let value = 1;
const makeCounterFromN = function(parameter){
  const counter = function(){
    return function(){return value++;};
  }
  switch(parameter){
    case 1:return counter();
           break; 
    case 2:return function(){ return parameter;};
           break;
  }
}
const makeCounterFromZero = undefined;
const makeDeltaTracker = undefined;
const makeFiboGenerator = undefined;
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
