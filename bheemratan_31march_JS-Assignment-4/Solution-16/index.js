sayHello();
var greet = "Hey";
function sayHello() {
  console.log(greet);
  {
    let greet = "hi";
  }
}
(function () {
  let msg = greet;
  console.log(msg);
})();
