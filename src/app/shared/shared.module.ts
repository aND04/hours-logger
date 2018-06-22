import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {
	MatButtonModule,
	MatIconModule
} from '@angular/material';

@NgModule({
	imports: [
		BrowserAnimationsModule,
		CommonModule,
		MatButtonModule,
		MatIconModule
	],
	declarations: [],
	exports: [
		BrowserAnimationsModule,
		MatButtonModule,
		MatIconModule
	]
})
export class SharedModule {
}
