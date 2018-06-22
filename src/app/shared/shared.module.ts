import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {
	MatButtonModule,
	MatCardModule,
	MatIconModule,
	MatSidenavModule,
	MatToolbarModule
} from '@angular/material';

@NgModule({
	imports: [
		BrowserAnimationsModule,
		CommonModule,
		MatButtonModule,
		MatCardModule,
		MatIconModule,
		MatSidenavModule,
		MatToolbarModule
	],
	declarations: [],
	exports: [
		BrowserAnimationsModule,
		MatButtonModule,
		MatCardModule,
		MatIconModule,
		MatSidenavModule,
		MatToolbarModule
	]
})
export class SharedModule {
}
