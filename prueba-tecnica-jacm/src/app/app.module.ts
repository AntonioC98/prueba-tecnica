// Angular basics
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// App Global routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';

// NGRX
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { localStorageSync } from 'ngrx-store-localstorage';

import { USER_KEY } from './user/data-access/store/user.feature';

// Save on localStorage the state of NGRX
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: [USER_KEY],
    rehydrate: true,
    storageKeySerializer: (key) => key
  })(reducer);
}

export const metaReducers: MetaReducer<any, any>[] = [localStorageSyncReducer];

@NgModule({
  declarations: [
    // Components
    AppComponent
  ],
  imports: [
    // Angular basics
    BrowserModule,
    BrowserAnimationsModule,

    // App Global routing
    AppRoutingModule,

    // NGRX
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
