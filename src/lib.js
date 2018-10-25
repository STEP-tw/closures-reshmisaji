const makeConstant = function(parameter){
  return function(){return parameter;};
}
  let value1 = 1;
const makeCounterFromN = function(parameter){
  let value2 = 1;
  let value3 = 2;
  const counter = function(){
    return function(){return value1 ++;};
  }
  switch(parameter){
    case 1:return counter();
           break; 
    case 2:return function(){ return ++value2;};
           break;
    case 3:return function(){ return ++value3;};
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
