import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatListModule, MatSlideToggleModule, MatRadioModule, MatToolbarModule, MatSelectModule, MatSliderModule, MatCardModule, MatFormFieldModule, MatPaginatorModule, MatButtonToggleModule, MatSnackBarModule, MatTooltipModule, MatDividerModule, MatProgressSpinnerModule, MatStepperModule, MatInputModule, MatExpansionModule, MatDialogModule, MatTabsModule, MatProgressBarModule} from '@angular/material';
@NgModule({
   imports: [MatButtonModule, MatCheckboxModule, MatSliderModule, MatCardModule, MatSnackBarModule, MatSlideToggleModule, MatRadioModule, MatListModule, MatFormFieldModule, MatPaginatorModule, MatButtonToggleModule, MatToolbarModule, MatSelectModule, MatTooltipModule, MatDividerModule, MatProgressSpinnerModule, MatStepperModule, MatInputModule, MatExpansionModule, MatDialogModule,MatProgressBarModule,MatTabsModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSliderModule, MatProgressSpinnerModule, MatCardModule, MatSlideToggleModule, MatSnackBarModule, MatRadioModule, MatListModule, MatFormFieldModule, MatPaginatorModule, MatButtonToggleModule, MatToolbarModule, MatSelectModule, MatTooltipModule, MatDividerModule, MatStepperModule, MatInputModule, MatExpansionModule, MatDialogModule, MatTabsModule, MatProgressBarModule]
})
export class MatModule { }
