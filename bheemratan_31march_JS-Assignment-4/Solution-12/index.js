{
  let a = 18;
  console.log(a);
}
{
  console.log(b);
  var b = 45;
}
console.log(a);
console.log(b);

//a is block scoping variable
// so we can`t acces outside the block(a) or curli braces

//b is global scoping so first we get undefined but second we got value of b either b is console outside the block
