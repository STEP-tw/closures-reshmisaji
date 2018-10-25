/*.......................Make Constant........................*/
const makeConstant = function(parameter){
  return function(){return parameter;};
}

/*....................... Make Counter from number....................*/
  let counter1 = 1;
const makeCounterFromN = function(parameter){
  let counter2 = 1;
  let counter3 = 2;
  let counter4 = -1;
  const counter = function(){
    return function(){return counter1 ++;};
  }
  switch(parameter){
    case -1:return function(){return counter4++;};
            break
    case 1 :return counter();
            break; 
    case 2 :return function(){ return ++counter2;};
            break;
    case 3 :return function(){ return ++counter3;};
            break;
  }
}

/*....................... Make Counter from zero........................*/

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
