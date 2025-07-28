var name = "Global";
function showName() {
  console.log(name);
  var name = "Local";
  console.log(name);
}
showName();
console.log(name);


// first is undefined because
// when var name  = ' local'
// that whole scope use that var name = 'local'
// not global variable so that
// undefind
//local
//global