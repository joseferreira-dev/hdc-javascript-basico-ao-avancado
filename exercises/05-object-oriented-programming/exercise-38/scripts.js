class ClientAddress {
	constructor(street, district, city, state) {
		this.street = street;
		this.district = district;
		this.city = city;
		this.state = state;
	}

	set setStreet(value) {
		this.street = value;
	}

	set setDistrict(value) {
		this.district = value;
	}

	set setCity(value) {
		this.city = value;
	}

	set setState(value) {
		this.state = state;
	}
}

let newAddress = new ClientAddress("Rua Antônio Alves Mangabeira", "Centro", "Triunfo", "Paraíba");

console.log(newAddress);

newAddress.setStreet = "Rua Projetada";
newAddress.setCity = "Cajazeiras";

console.log(newAddress);