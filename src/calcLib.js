const formatArgs = function(args) {
  const userArgs = args.slice(2);
  return userArgs;
};

const add = function(value1, value2, end) {
  return (+value1) + (+value2);
};

const generateFIbo = function(end) {
  let lastTerm = -1;
  let secondLastTerm = 1;
  let fibo = [];
  for(let i=0; i<=end; i++){
    let cTerm = lastTerm + secondLastTerm;
    lastTerm = secondLastTerm;
    secondLastTerm = cTerm;
    fibo.push(cTerm);
  }
  return fibo;
};

const fact = function(count, result, end) {
  fibonacci = generateFIbo(end);
  return fibonacci[count-2];
};

const getOperation = function(operatorName) {
  const operatorTable = {
    sum: add,
    factorial: fact
  };
  const operation = operatorTable[operatorName];
  return operation
};

const swap = function(value1, value2) {
  let temp = value1;
  value1 = value2;
  value2 = temp;
  return [value1, value2];
};

const operationOverRange = function(operation, begin, end, inc) {
  if(operation == undefined || inc == 0){
    return 0;
  }

  if(inc == undefined){
    inc = 1;
  }

  if(begin > end){
    const swapped = swap(begin, end);
    begin = swapped[0];
    end = swapped[1];
  } 

  let result = 0;
  for(let count=begin; count<=end; count=((+count)+(+inc))){
    result = operation(count, result, end);
  }
  return result;
};

const evaluate = function(args) {
  const userArgs = formatArgs(args);
  const operatorName = userArgs[0];
  const operation = getOperation(operatorName);
  const value1 = userArgs[1];
  const value2 = userArgs[2];
  let increment = userArgs[3];
  const result = operationOverRange(operation, value1, value2, increment);
  return result;
};

exports.formatArgs = formatArgs;
exports.add = add;
exports.getOperation = getOperation;
exports.swap = swap;
exports.operationOverRange = operationOverRange;
exports.evaluate = evaluate;
