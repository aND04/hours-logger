import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {
	MatButtonModule,
	MatCardModule,
	MatDatepickerModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatNativeDateModule,
	MatSidenavModule,
	MatTableModule,
	MatToolbarModule
} from '@angular/material';

@NgModule({
	imports: [
		BrowserAnimationsModule,
		CommonModule,
		MatButtonModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatCardModule,
		MatIconModule,
		MatInputModule,
		MatNativeDateModule,
		MatSidenavModule,
		MatTableModule,
		MatToolbarModule
	],
	declarations: [],
	exports: [
		BrowserAnimationsModule,
		MatButtonModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatCardModule,
		MatIconModule,
		MatInputModule,
		MatNativeDateModule,
		MatSidenavModule,
		MatTableModule,
		MatToolbarModule
	]
})
export class SharedModule {
}
