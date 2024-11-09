function makeCounter() {
  let count = 0;
  return function () {
    count++; // This inner function can access `count`
    return count;
  };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
// console.log(counter());

// const counter2 = makeCounter();
// console.log(counter2()); // Outputs: 1 (new count for counter2)
// console.log(counter2());

//Practical Use Cases for Closures
// 1.Data Privacy - Closures can be used to encapsulate private data.
function createBankAccount() {
  let balance = 0;

  return {
    deposit(amount) {
      balance += amount;
      console.log(`Deposited: $${amount}. New balance: $${balance}`);
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`Withdrew: $${amount}. New balance: $${balance}`);
      } else {
        console.log(`Insufficient funds`);
      }
    },
    getBalance() {
      return balance;
    },
  };
}

const myAccount = createBankAccount();
myAccount.deposit(100);
myAccount.deposit(100);
myAccount.withdraw(50);
console.log(myAccount.getBalance());

// 2.Function Factory - You can create specialized functions using closures.
function multiplier(factor) {
  return function (val) {
    return val * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5));
console.log(triple(5));
