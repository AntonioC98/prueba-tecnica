import { Injectable } from '@angular/core';
import { AddressEntity, CompanyEntity, GeoEntity, UserEntity } from '../entity/user.entity';
import { AddressModel, CompanyModel, GeoModel, UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserMapper {

  /**
   * Method used to change User entity to user model
   * @param userEntity User entity structure from API
   * @returns Returns User model object with all the information
   */
  ListUserToMapper(listUserEntity: Array<UserEntity>): Array<UserModel> {
    const listUserModel: Array<UserModel> = new Array<UserModel>();

    if (listUserEntity == undefined || listUserEntity.length == 0) {
      return listUserModel;
    }

    listUserEntity.forEach(
      (userEntity: UserEntity) => {
        const userModel: UserModel = new UserModel();

        userModel.email = userEntity.email;
        userModel.id = userEntity.id;
        userModel.name = userEntity.name;
        userModel.phone = userEntity.phone;
        userModel.username = userEntity.username;
        userModel.website = userEntity.website;
        userModel.address = this.AddressToModel(userEntity.address);
        userModel.company = this.CompanyToModel(userEntity.company);

        listUserModel.push(userModel);
      }
    );

    return listUserModel;
  }

  /**
   * Method used to change user entity to address model
   * @param userEntity Address entity structure from API
   * @returns Returns Address model object with all the information
   */
  AddressToModel(addressEntity: AddressEntity): AddressModel {
    const addressModel: AddressModel = new AddressModel();

    if (addressEntity == undefined || addressEntity == null) {
      return addressModel;
    }

    addressModel.city = addressEntity.city;
    addressModel.street = addressEntity.street;
    addressModel.suite = addressEntity.suite;
    addressModel.zipcode = addressEntity.zipcode;
    addressModel.geo = this.GeoToModel(addressEntity.geo);

    return addressModel;
  }

  /**
   * Method used to change Geo entity to user model
   * @param userEntity Geo entity structure from API
   * @returns Returns Geo model object with all the information
   */
  GeoToModel(geoEntity: GeoEntity): GeoModel {
    const geoModel: GeoModel = new GeoModel();

    if (geoEntity == undefined || geoEntity == null) {
      return geoModel;
    }

    geoModel.lat = geoEntity.lat;
    geoModel.lng = geoEntity.lng;

    return geoModel;
  }

  /**
   * Method used to change Company entity to user model
   * @param userEntity Company entity structure from API
   * @returns Returns Company model object with all the information
   */
  CompanyToModel(companyEntity: CompanyEntity): CompanyModel {
    const companyModel: CompanyModel = new CompanyModel();

    if (companyEntity == undefined || companyEntity == null) {
      return companyModel;
    }

    companyModel.bs = companyEntity.bs;
    companyModel.catchPhrase = companyEntity.catchPhrase;
    companyModel.name = companyEntity.name;

    return companyModel;
  }
}
