import {Component} from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<mat-toolbar>Header</mat-toolbar>
		<mat-sidenav-container>
			<mat-sidenav #sidenav mode="side" [opened]="true">
				<sidenav></sidenav>
			</mat-sidenav>
			<mat-sidenav-content>
				<router-outlet></router-outlet>
			</mat-sidenav-content>
		</mat-sidenav-container>
	`,
	styles: [`
		mat-sidenav-container {position: absolute; top: 60px; bottom: 0; left: 0; right: 0;}
		mat-toolbar {position: fixed; top: 0; left: 0; right: 0; height: 60px;}
		mat-sidenav {display: flex; align-items: left; justify-content: left; width: 200px; padding: 10px;}
	`]
})
export class AppComponent {
}
