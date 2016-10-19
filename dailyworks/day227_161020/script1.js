var scope = "Global";

function getValue() {
  var scope;
  console.log(scope);
  scope = "Local";
  return scope;
}

console.log(getValue());
console.log(scope);
