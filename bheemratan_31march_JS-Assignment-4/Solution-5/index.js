function countdown(seconds) {
  return function () {
    for (let i = seconds; i >= 0; i--) {
      console.log(i);
    }
  };
}

const startCounter = countdown(5)
startCounter()
