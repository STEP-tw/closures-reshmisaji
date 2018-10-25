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

/*..............................curry maker.............................*/

const curry = function(functionREference,parameter){

  return function(firstArgument,secondArgument){return functionREference(parameter,firstArgument,secondArgument)} ;
}

/*............................compose....................................*/

const compose = function(functionReference1,functionReference2){
  return function(argument1,argument2){
    return functionReference1(functionReference2(argument1,argument2))};
}


/*.....................Make fibonacci generator.........................*/

const makeFiboGenerator = function(arg1,arg2){
  let startValue = 0;

  const generateFibonacci = function(nextValue){ 
    return function(){let returnValue = startValue;nextValue = startValue+nextValue;startValue = nextValue - startValue;return returnValue;};
  }

  switch(arg1){
    case 2:return generateFibonacci(arg1);
      break;
    default : return generateFibonacci(1);
      break;
  }
   
}


//const makeFiboGenerator = undefined;
///*..............................make cycler.................................*/

const makeCycler = function(collection){
 let index = 0;
 let set = collection.slice();
 let length = set.length;
 return function(){ 
   if(index>=length){
   index = 0;
   }
  let returnValue = set[index];
   index++;
   return returnValue;
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
