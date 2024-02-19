import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserModel } from '../../data-access/model/user.model';
import { ButtonTypeEnum } from 'src/app/shared/enum/button-type.enum';
import { ButtonColorEnum } from 'src/app/shared/enum/button-color.enum';
import { Observable } from 'rxjs';

@Component({
  selector: 'ptj-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() listUserModel$: Observable<Array<UserModel>> | undefined;
  @Output() viewDetailEvent: EventEmitter<UserModel> = new EventEmitter();

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  buttonTypeEnum = ButtonTypeEnum;
  buttonColorEnum = ButtonColorEnum;

  displayedColumns: string[] = ['user', 'name', 'email', 'company'];
  dataSource = new MatTableDataSource<UserModel>(undefined);

  /**
   * Method where we get the user list info and we set the name filter on the talbe
   */
  ngOnInit(): void {
    this.listUserModel$?.subscribe(
      listUserModel => {
        this.dataSource = new MatTableDataSource<UserModel>(listUserModel);

        this.dataSource.filterPredicate = (data: UserModel, filter: string) => {
          const dataStr = data.name.trim().toLowerCase();
          const transformedFilter = filter.trim().toLowerCase();
          return dataStr.indexOf(transformedFilter) != -1;
        };

        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
        }
      }
    );
  }

  /**
   * Method used to emit the instruction to navigate to the detail
   * @param userModel Selected user to navigate
   */
  viewDetail(userModel: UserModel) {
    this.viewDetailEvent.emit(userModel);
  }

  /**
   * Method used to filter the table by the user input
   * @param event
   */
  searchByName(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }


  }
}
