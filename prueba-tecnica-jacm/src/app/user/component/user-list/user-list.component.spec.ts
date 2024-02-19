import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { UserModel } from '../../data-access/model/user.model';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      imports: [
        MatTableModule,
        MatPaginatorModule,
        NoopAnimationsModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;

    component.listUserModel$ = of(new Array<UserModel>());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter the data based on the filter value', () => {
    const filterValue = 'test';
    component.searchByName({ target: { value: filterValue } } as unknown as Event);
    expect(component.dataSource.filter).toBe(filterValue.trim());
  });

  it('should navigate to detail when viewDetail is called', () => {
    const userModel = new UserModel();
    spyOn(component.viewDetailEvent, 'emit');

    component.viewDetail(userModel);

    expect(component.viewDetailEvent.emit).toHaveBeenCalledWith(userModel);
  });
});
