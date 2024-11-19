import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UploadService {
    constructor(private http: HttpClient) {}

    uploadTemplateHistory(payload: FormData): Observable<any> {
        const url = 'http://localhost:8080/app/curva-historico/upload';
        return this.http.post(url, payload);
    }

    uploadTemplateDue(payload: FormData): Observable<any> {
        const url = 'http://localhost:8080/app/mercado/deuda/upload';
        return this.http.post(url, payload);
    }
}
