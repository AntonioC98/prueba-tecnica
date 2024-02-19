export class UserEntity {
  id: number;
  name: string;
  username: string;
  email: string;
  address = new AddressEntity();
  phone: string;
  website: string;
  company = new CompanyEntity()

  constructor() {
    this.id = 0;
    this.name = '';
    this.username = '';
    this.email = '';
    this.phone = '';
    this.website = '';
  }
}

export class AddressEntity {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo = new GeoEntity();

  constructor() {
    this.street = '';
    this.suite = '';
    this.city = '';
    this.zipcode = '';
  }
}

export class GeoEntity {
  lat: string;
  lng: string;

  constructor() {
    this.lat = '';
    this.lng = '';
  }
}

export class CompanyEntity {
  name: string;
  catchPhrase: string;
  bs: string;

  constructor() {
    this.name = '';
    this.catchPhrase = '';
    this.bs = '';
  }
}
