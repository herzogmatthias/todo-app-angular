import {MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatDividerModule,
    MatIconModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
      MatToolbarModule,
      MatButtonModule,
      MatGridListModule,
      MatFormFieldModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatListModule,
      MatDividerModule,
      MatIconModule,
    ],
  exports: [
      MatToolbarModule,
      MatButtonModule,
      MatGridListModule,
      MatFormFieldModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatListModule,
      MatDividerModule,
      MatIconModule
    ],
})
export class MaterialDesignModule {}
