import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HistoryService {
    constructor(private http: HttpClient) {}

    getResults(): any {
        const url = 'http://localhost:8080/app/mercado/deuda/all';
        return this.http.get(url);
    }

    getResultsWithDate(date: string): any {
        const url = `http://localhost:8080/app/mercado/deuda/consulta-fecha?date=${date}`;
        return this.http.get(url);
    }
}
