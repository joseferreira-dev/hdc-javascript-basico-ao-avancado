class ShoppingCart {
	constructor(itens, quantity, totalAmount) {
		this.itens = itens;
		this.quantity = quantity;
		this.totalAmount = totalAmount;
	}

	addItem(item) {
		let counter = 0;

		for (let itemCart in this.itens) {
			if (this.itens[itemCart].id == item.id) {
				this.itens[itemCart].quantity += item.quantity;
				counter = 1;
			}
		}

		if (counter == 0) {
			this.itens.push(item);
		}

		this.quantity += item.quantity;
		this.totalAmount += item.price * item.quantity;
	}

	removeItem(item) {
		for (let itemCart in this.itens) {
			if (this.itens[itemCart].id == item.id) {
				let obj = this.itens[itemCart];
				let index = this.itens.findIndex(function(obj) {return obj.id == item.id});

				this.quantity -= this.itens[itemCart].quantity;
				this.totalAmount -= this.itens[itemCart].price * this.itens[itemCart].quantity;

				this.itens.splice(index, 1);
			}
		}
	}

	
}

let newCart = new ShoppingCart([{id: "01", name: "t-shirt", quantity: 2, price: 50}], 2, 100);

console.log(newCart);

newCart.addItem({id: "01", name: "t-shirt", quantity: 3, price: 50});

console.log(newCart);

newCart.addItem({id: "02", name: "jacket", quantity: 1, price: 100});

console.log(newCart);

newCart.removeItem({id: "01", name: "t-shirt"});

console.log(newCart);