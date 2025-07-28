var x = 5;
function demo() {
  console.log(x);
  var x = 10;
  console.log(x);

  inner();

  function inner() {
    console.log(x);
    var x = 15;
    console.log(x);
  }
  console.log(x);
}
demo();
console.log(x);
