var count = 1;
function update() {
  if (true) {
    var count = 2;
    function show() {
      return count;
    }
    console.log(show());
  }
  console.log(count);
}
console.log(count);
update();
