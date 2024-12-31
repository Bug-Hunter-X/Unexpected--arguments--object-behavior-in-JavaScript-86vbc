function myFunc() {
  // Convert arguments to a real array
  const argsArray = Array.from(arguments);
  console.log(argsArray);
  // Now you can use array methods
  const doubled = argsArray.map(x => x * 2);
  console.log(doubled);
}

myFunc(1, 2, 3); 