import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {SharedModule} from './shared/shared.module';
import {ContentModule} from './content/content.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		ContentModule,
		SharedModule,
	],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
