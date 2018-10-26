/*.......................Make Constant........................*/

const makeConstant = function(parameter){
  return function(){
    return parameter;
  };
}

/*....................... Make Counter from number....................*/

const makeCounterFromN = function(count){
  return function(){
    return count++;
  }
}

/*....................... Make Counter from zero........................*/

const makeCounterFromZero = function(){
  return makeCounterFromN(0);
}

/*........................Make delta tracker............................*/

const makeDeltaTracker = function(deltaArg){
  let returnObject = {};
  let deltaState = {old: deltaArg, delta: 0,new: deltaArg};

  return function(passData){
    if(passData!= undefined){
      deltaState.old = deltaState.new;
      deltaState.delta = passData;
    }
    deltaState.new=deltaState.old + deltaState.delta;
    Object.assign(returnObject,deltaState);
    return returnObject;
  }
}

/*..............................curry maker.............................*/

const curry = function(functionREference,parameter){

  return function(firstArgument,secondArgument){
    return functionREference(parameter,firstArgument,secondArgument)
  };
}

/*............................compose....................................*/

const compose = function(functionReference1,functionReference2){
  return function(argument1,argument2){
    return functionReference1(functionReference2(argument1,argument2))};
}


/*.....................Make fibonacci generator.........................*/

const makeFiboGenerator = function(start,next){
  let startValue = 0;
  let nextValue = 1;
   
  if((start!=undefined) && (next == undefined)){
    nextValue = start;
  }
  if(next!=undefined){
    startValue = start;
    nextValue = next;
  }
  const generateFibonacci = function(){
    return function(){
      let returnValue = startValue;
      nextValue = startValue + nextValue;
      startValue = nextValue - startValue;
      return returnValue;
    };
  }
  return generateFibonacci();
}


/*..............................make cycler.................................*/

const makeCycler = function(collection){
 let index = 0;
 let set = collection.slice();
 let length = set.length;
 return function(){ 
   return set[index++ % length];
 }
}

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
