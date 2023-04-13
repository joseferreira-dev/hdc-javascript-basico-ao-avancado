class BankAccount {
	constructor(balanceSaving, balanceCurrent, savingInterest) {
		this.balanceSavings = balanceSaving;
		this.balanceCurrent = balanceCurrent;
		this.savingInterest = savingInterest;
	}

	depositSaving(value) {
		this.balanceSavings += value;
	}

	draftSaving(value) {
		this.balanceSavings -= value;
	}

	depositCurrent(value) {
		this.balanceCurrent += value;
	}

	draftCurrent(value) {
		this.balanceCurrent -= value;
	}

	transferSavingToCurrent(value) {
		this.balanceSavings -= value;
		this.balanceCurrent += value;
	}

	transferCurrentToSaving(value) {
		this.balanceCurrent -= value;
		this.balanceSavings += value;
	}

	birthdayBonus() {
		this.balanceSavings = parseFloat((this.balanceSavings * (1 + (this.savingInterest/100))).toFixed(2));
	}
}

class SpecialBankAccount extends BankAccount {
	constructor(balanceSaving, balanceCurrent, savingInterest) {
		super(balanceSaving, balanceCurrent, savingInterest * 2);
	}
}

let myAccount = new BankAccount(200, 500, 10);
let mySpecialAccount = new SpecialBankAccount(200, 500, 10);

console.log(myAccount);
console.log(mySpecialAccount);

myAccount.birthdayBonus();
mySpecialAccount.birthdayBonus();

console.log(myAccount);
console.log(mySpecialAccount);

mySpecialAccount.depositSaving(300);
mySpecialAccount.draftSaving(350);
console.log(mySpecialAccount);
mySpecialAccount.depositCurrent(125);
mySpecialAccount.draftCurrent(275);
console.log(mySpecialAccount);
mySpecialAccount.transferSavingToCurrent(100);
console.log(mySpecialAccount);