import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractCatalogo } from 'src/app/demo/api/abstract-catalogo';
import { Indicador } from 'src/app/demo/api/indicador';
import { BASE_PATH } from 'src/main';

@Injectable()
export class IndicadorService {
    constructor(private http: HttpClient) {}

    getIndicadores() {
        const url = BASE_PATH + '/indicador/consultar';
        return this.http.get<Indicador[]>(url);
    }

    nuevoIndicador(nuevoIndicador: Indicador) {
        const url = BASE_PATH + '/indicador/guardar';
        return this.http.post(url, nuevoIndicador);
    }

    modificaIndicador(indicador: Indicador) {
        const url = BASE_PATH + '/indicador/actualizar';
        return this.http.put(url, indicador);
    }

    eliminarIndicador(id: number) {
        const url = BASE_PATH + `/indicador/eliminar/${id}`;
        return this.http.delete(url);
    }
}
