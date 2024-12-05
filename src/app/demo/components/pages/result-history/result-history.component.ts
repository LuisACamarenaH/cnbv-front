import { Component } from '@angular/core';
import { settings } from './history.constant';
import { HistoryService } from 'src/app/demo/service/history.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'ngx-result-history',
    templateUrl: './result-history.component.html',
    styleUrls: ['./result-history.component.scss'],
    standalone: true,
    imports: [
        TableModule,
        CommonModule,
        CalendarModule,
        FormsModule,
        ButtonModule,
        CalendarModule,
    ],
})
export class ResultHistoryComponent {
    settings = settings;

    dataResult: any;
    max: Date;
    date: Date;

    constructor(private historyService: HistoryService) {
        this.max = new Date();
    }

    getResults() {
        this.historyService
            .getResultsWithDate(this.date.toISOString().split('T')[0])
            .subscribe((dataResult) => (this.dataResult = dataResult));
    }
}
