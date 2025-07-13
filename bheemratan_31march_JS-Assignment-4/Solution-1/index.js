function Outer(num) {
  const number = num;

  return function Inner(num2) {
    console.log(number + num2);
  };
}

let add5 = Outer(5);
add5(10)
