import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

import {HomeComponent} from './home/home.component';

import {ROUTES} from './content.route';
import { TimeTableComponent } from './time-table/time-table.component';

@NgModule({
	imports: [
		RouterModule.forRoot(ROUTES, {useHash: true}),
		SharedModule,
	],
	declarations: [
		HomeComponent,
		TimeTableComponent,
	],
	providers: [],
	exports: [RouterModule]
})
export class ContentModule {}
