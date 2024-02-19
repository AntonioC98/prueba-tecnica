// Angular core
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Routing
import { UserRoutingModule } from './user-routing.module';

// Generic components
import { GenericComponentModule } from '../shared/generic-component/generic-component.module';

// Shared
import { SharedModule } from '../shared/shared.module';

// Components
import { UserListContainerComponent } from './container/user-list-container/user-list-container.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserDetailContainerComponent } from './container/user-detail/user-detail-container.component';
import { UserDetailComponent } from './component/user-detail/user-detail.component';

// API
import { UserApiService } from './data-access/api/user-api';

// Mapper
import { UserMapper } from './data-access/mapper/user.mapper';

// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Features
import { UserFeature } from './data-access/store/user.feature';

// Effects
import { UserEffects } from './data-access/store/user.effects';

// Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// Paginator
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    // Components
    UserListContainerComponent,
    UserListComponent,
    UserDetailContainerComponent,
    UserDetailComponent
  ],
  imports: [
    // Angular Core
    HttpClientModule,

    // Shared
    SharedModule,

    // Routing
    UserRoutingModule,

    // Generic components
    GenericComponentModule,

    // Angular Material
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,

    // NGRX
    StoreModule.forFeature(UserFeature),
    EffectsModule.forFeature([UserEffects])

  ],
  providers: [
    // API
    UserApiService,

    // Mapper
    UserMapper,

    // Paginator
    { provide: MatPaginatorIntl, useValue: getSpanishPaginatorIntl() }
  ]
})
export class UserModule {

}

/**
 * Method used to translate the pagination
 * @returns Return the necesary config to change the text of the paginator on providers section
 */
export function getSpanishPaginatorIntl() {
  const spanishPaginatorIntl = new MatPaginatorIntl();

  spanishPaginatorIntl.itemsPerPageLabel = 'Items por página:';
  spanishPaginatorIntl.nextPageLabel = 'Siguiente página';
  spanishPaginatorIntl.previousPageLabel = 'Página anterior';
  spanishPaginatorIntl.firstPageLabel = 'Primera página';
  spanishPaginatorIntl.lastPageLabel = 'Última página';
  spanishPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => {
    const start = page * pageSize + 1;
    const end = (page + 1) * pageSize;
    const adjustedEnd = end > length ? length : end;
    return `${start} - ${adjustedEnd} de ${length}`;
  }

  return spanishPaginatorIntl;
}

