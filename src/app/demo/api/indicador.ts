import { AbstractCatalogo } from "./abstract-catalogo";

export interface Indicador {
    idIndicador?: number;
    descripcion?: string;
    columnaExcel?: string;
    tipoIndicador?: AbstractCatalogo;
}