import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { UserEntity } from "../entity/user.entity";

@Injectable({ providedIn: 'root' })
export class UserApiService {
  constructor(protected http: HttpClient) { }

  /**
   * Service used to call the user list from jsonplaceholder
   * @returns Return a UserEntity list with the information
   */
  getUserList(): Observable<Array<UserEntity>> {
    return this.http.get<Array<UserEntity>>('https://jsonplaceholder.typicode.com/users');
  }
}
