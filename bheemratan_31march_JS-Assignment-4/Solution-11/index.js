function outer() {
  console.log(innerVar);
  var innerVar = 20;
  inner();
  function inner() {
    console.log(innerVar);
    let innerValue = 45;
  }
}

outer();

// because of hoising function is on top so
// we can run function before initilization
