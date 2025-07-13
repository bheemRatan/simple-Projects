function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: function (amount) {
      balance += amount;
    },
    withdraw: function (amount) {
      if (balance < amount) {
        console.log("Infflunt Balance");
      }else balance -= amount;
    },
    getBalance: function () {
      console.log(balance);
    },
  };
}

const account = createBankAccount(100);
account.deposit(50);
account.withdraw(30);
account.withdraw(200);
account.getBalance();



//very good quetion
