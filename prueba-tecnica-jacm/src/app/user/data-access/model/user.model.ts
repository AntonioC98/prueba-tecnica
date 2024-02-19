export class UserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address = new AddressModel();
  phone: string;
  website: string;
  company = new CompanyModel();

  constructor() {
    this.id = 0;
    this.name = '';
    this.username = '';
    this.email = '';
    this.phone = '';
    this.website = '';
  }
}

export class AddressModel {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo = new GeoModel();

  constructor() {
    this.street = '';
    this.suite = '';
    this.city = '';
    this.zipcode = '';
  }
}

export class GeoModel {
  lat: string;
  lng: string;

  constructor() {
    this.lat = '';
    this.lng = '';
  }
}

export class CompanyModel {
  name: string;
  catchPhrase: string;
  bs: string;

  constructor() {
    this.name = '';
    this.catchPhrase = '';
    this.bs = '';
  }
}
