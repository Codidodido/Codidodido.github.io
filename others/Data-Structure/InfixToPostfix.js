//let infix = document.getElementById("Inifx");
let resultElement = document.getElementById("Result");
let infixElement = document.getElementById("Infix");
var opValue = {
  "^": 1,
  "*": 2,
  "/": 2,
  "+": 3,
  "-": 3,
};

function IsOperation(op) {
  if (op == "+" || op == "-" || op == "*" || op == "/" || op == "^" && op != '(') {
    return true;
  }

  return false;
}

//--- Convert To Postfix ---//

function ConvertToPostfix() {
  let infix = infixElement.value;
  let stack = [];
  let result = "";
  for (let i = 0; i < infix.length; i++) {
    var alph = infix[i];

    if (alph >= "a" && alph <= "z") {
      result += alph;
    } else if (alph == "(") {
      stack.push(alph);
    } else if (IsOperation(alph)) {
      while (
        stack.length != null &&
        opValue[alph] >= opValue[stack[stack.length - 1]]
      ) {
        result += stack.pop();
      }

      stack.push(alph);
    } else if (alph == ")") {
      while (stack[stack.length - 1] != "(") {
        result += stack.pop();
      }
      stack.pop();
    }
  }

  while (stack[stack.length - 1] != null) {
    result += stack.pop();
  }

  resultElement.innerHTML = result;
}

//--- Convert To Prefix ---//

function DoPrefixOperation(opStack,alphStack){
    var num2 = alphStack.pop();
    var num1 = alphStack.pop();
    var op = opStack.pop();
    var result = op + num1 + num2;
    console.log(result);
    alphStack.push(result);
    if(opStack[opStack.length-1]=='('){
        opStack.pop();
    }
}

function ConvertToPrefix() {
  let infix = infixElement.value;

  let opStack = [];
  let alphStack = [];

  for (let i = 0; i < infix.length; i++) {
    var alph = infix[i];

    if (alph >= "a" && alph <= "z") {
      alphStack.push(alph);
    }

    if (IsOperation(alph)) {
      while (
        opStack.length != null &&
        opValue[alph] >= opValue[opStack[opStack.length - 1]]
      ) {
        DoPrefixOperation(opStack,alphStack);
      }

      opStack.push(alph);
    }

    if(alph==')'){
        DoPrefixOperation(opStack,alphStack);
    }

    if(alph=='('){
        opStack.push('(');
    }
  }

  for (let i = 0; i < opStack.length; i++) {
    console.log(opStack[i]);
  }

  while (opStack.length != 0) {
    DoPrefixOperation(opStack,alphStack);
  }

  resultElement.innerHTML = alphStack.pop();
}
