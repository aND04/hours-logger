import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material';

@Component({
	selector: 'time-table',
	templateUrl: './time-table.component.html',
	styleUrls: ['./time-table.component.scss']
})
export class TimeTableComponent implements OnInit {

	@ViewChild('table') table: MatTable<TaskLog>;
	displayedColumns = ['column1', 'column2', 'column3', 'column4'];
	dataSource = new MatTableDataSource([]);

	constructor() {}

	ngOnInit() {}

	addRow() {
		const data = this.dataSource.data;
		data.push(this.initTaskLog('test', 'test', 'test', 'test'));
		this.dataSource.data = data;
	}

	private initTaskLog(task: string, project: string, initialTime: any, finalTime: any): TaskLog {
		return <TaskLog> {
			task: task,
			project: project,
			initialTime: initialTime,
			finalTime: finalTime
		};
	}
}

export interface TaskLog {
	task?: any;
	project?: any;
	initialTime?: any;
	finalTime?: any;
}
