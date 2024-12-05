import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class DueService {
    constructor(private http: HttpClient) {}

    getResults(): any {
        const url = 'http://localhost:8080/app/mercado/deuda/all';
        return this.http.get(url).pipe(
            map((element: any) =>
                element.map((element) => ({
                    ...element,
                    fecha: element.id?.fecha,
                }))
            )
        );
    }

    getResultsWithDate(date: string): any {
        const url = `http://localhost:8080/app/mercado/deuda/consulta-fecha?date=${date}`;
        return this.http.get(url).pipe(
            map((element: any) =>
                element.map((element) => ({
                    ...element,
                    fecha: element.id?.fecha,
                }))
            )
        );
    }
}
