import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { UserListContainerComponent } from './user-list-container.component';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModuleActions } from '../../data-access/store/user.actions';
import { UserModel } from '../../data-access/model/user.model';

describe('UserListContainerComponent', () => {
  let component: UserListContainerComponent;
  let fixture: ComponentFixture<UserListContainerComponent>;
  let store: Store;
  let router: Router;
  let route: ActivatedRoute;

  const storeStub = {
    select: jasmine.createSpy().and.returnValue(of([])),
    dispatch: jasmine.createSpy()
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        RouterTestingModule.withRoutes([])
      ],
      declarations: [UserListContainerComponent],
      providers: [
        { provide: Store, useValue: storeStub },
        {
          provide: ActivatedRoute,
          useValue: { params: of({ id: 123 }) }
        }
      ]
    })
      .compileComponents();

    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch getUser action on init', () => {
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(UserModuleActions.UserActions.getUser());
  });

  it('should dispatch selectUser action and navigate on viewDetail', () => {
    const userModel = new UserModel();
    const routerSpy = spyOn(router, 'navigate');

    component.viewDetail(userModel);

    expect(store.dispatch).toHaveBeenCalledWith(UserModuleActions.UserActions.selectUser({ userModel }));
    expect(routerSpy).toHaveBeenCalledWith(['../detail/' + userModel.id], { relativeTo: route });
  });
});
