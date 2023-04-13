class BankAccount {
	constructor() {
		this.balance = 0;
	}

	deposit(value) {
		this.balance += value;
	}

	draft(value) {
		this.balance -= value;
	}
}

let myAccount = new BankAccount();

myAccount.deposit(1000);
console.log(myAccount.balance);
myAccount.draft(300);
console.log(myAccount.balance);