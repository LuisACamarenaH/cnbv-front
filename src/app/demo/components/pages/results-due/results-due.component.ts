import { Component, OnInit } from '@angular/core';
import { DueService } from 'src/app/demo/service/due.service';
import { settings } from './due.constant';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'ngx-results-due',
    templateUrl: './results-due.component.html',
    styleUrls: ['./results-due.component.scss'],
    standalone: true,
    imports: [
        TableModule,
        CommonModule,
        CalendarModule,
        FormsModule,
        ButtonModule,
    ],
})
export class ResultsDueComponent {
    settings = settings;

    dataResult: any;
    max: Date;
    date: Date;

    constructor(
        private dueService: DueService // protected dateService: NbDateService<Date>
    ) {
        this.max = new Date();
    }

    getResults() {
        this.dueService
            .getResultsWithDate(this.date.toISOString().split('T')[0])
            .subscribe((dataResult) => (this.dataResult = dataResult));
    }
}
