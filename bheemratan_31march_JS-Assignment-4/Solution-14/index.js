var a = 1;
function testScope() {
  console.log(a);
  if (true) {
    let a = 2;
    console.log(a);
  }
  console.log(a);
}
testScope();
console.log(a);
