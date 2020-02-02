import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatTabsModule,
  MatExpansionModule,
  MatFormFieldModule
} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ]
})

export class MaterialModule {}
