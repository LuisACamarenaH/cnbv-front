import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractCatalogo } from 'src/app/demo/api/abstract-catalogo';
import { BASE_PATH } from 'src/main';

@Injectable()
export class TipoIndicadorService {
    constructor(private http: HttpClient) {}

    getTiposIndicadores() {
        const url = BASE_PATH + '/tipo-indicador/consultar';
        return this.http.get<AbstractCatalogo[]>(url);
    }

    nuevoTipoIndicador(nuevoTipoIndicador: AbstractCatalogo) {
        const url = BASE_PATH + '/tipo-indicador/guardar';
        return this.http.post(url, nuevoTipoIndicador);
    }

    eliminarTipoIndicador(id: number) {
        const url = BASE_PATH + `/tipo-indicador/eliminar/${id}`;
        return this.http.delete(url);
    }
}
