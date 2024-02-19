// Angular basic
import { NgModule } from '@angular/core';

// Common Modules
import { SharedModule } from '../shared.module';

// Material modules
import { MatButtonModule } from '@angular/material/button';

// Generic components
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    // Generic components
    ButtonComponent
  ],
  imports: [
    // Common Modules
    SharedModule,

    // Material modules
    MatButtonModule
  ],
  providers: [],
  exports: [
    // Generic components
    ButtonComponent
  ]
})
export class GenericComponentModule { }
