import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { AbstractCatalogo } from 'src/app/demo/api/abstract-catalogo';
import { IndicadorService } from './indicador.service';
import { Indicador } from 'src/app/demo/api/indicador';
import { TipoIndicadorService } from '../tipoIndicador/tipoIndicador.service';

@Component({
    templateUrl: './indicador.component.html',
    providers: [MessageService],
})
export class IndicadorComponent implements OnInit {
    indicadorDialog: boolean = false;
    deleteIndicadorDialog: boolean = false;
    deleteIndicadoresDialog: boolean = false;

    indicadores: Indicador[] = [];
    indicador: Indicador = {};

    selectedIndicadores: Indicador[] = [];
    submitted: boolean = false;
    cols: any[] = [];
    tiposIndicadores!: AbstractCatalogo[];
    rowsPerPageOptions = [5, 10, 20];

    constructor(
        private indicadorService: IndicadorService,
        private tipoIndicadorService: TipoIndicadorService,
        private messageService: MessageService
    ) {}

    ngOnInit() {
        this.indicadorService.getIndicadores().subscribe((data) => {
            console.log(data);
            this.indicadores = data;
        });
        this.tipoIndicadorService.getTiposIndicadores().subscribe((data) => {
            console.log(data);
            this.tiposIndicadores = data;
        });

        this.cols = [
            { field: 'idIndicador', header: 'Id' },
            { field: 'descripcion', header: 'Descripcion' },
            { field: 'columnaExcel', header: 'Columna xls' },
            { field: 'tipoIndicador.description', header: 'Tipo indicador' },
        ];
    }

    openNew() {
        this.indicador = {};
        this.submitted = false;
        this.indicadorDialog = true;
    }

    deleteSelectedIndicadores() {
        this.deleteIndicadoresDialog = true;
    }

    editIndicador(indicador: Indicador) {
        this.indicador = { ...indicador };
        this.indicadorDialog = true;
    }

    deleteIndicador(indicador: Indicador) {
        this.deleteIndicadorDialog = true;
        this.indicador = { ...indicador };
    }

    confirmDeleteSelected() {
        this.deleteIndicadoresDialog = false;
        //this.tiposIndicadores = this.tiposIndicadores.filter(val => !this.selectedProducts.includes(val));
        this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Products Deleted',
            life: 3000,
        });
        this.selectedIndicadores = [];
    }

    confirmDelete() {
        this.deleteIndicadorDialog = false;
        //this.products = this.products.filter(val => val.id !== this.product.id);
        this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Product Deleted',
            life: 3000,
        });
        this.indicador = {};
    }

    hideDialog() {
        this.indicadorDialog = false;
        this.submitted = false;
    }

    saveIndicador() {
        this.submitted = true;
console.log("saveIndicador:: ",this.indicador);
        if (this.indicador.descripcion?.trim()) {
            if (this.indicador.idIndicador) {
                this.indicadorService.modificaIndicador(this.indicador)
                .subscribe((data) => {
                    console.log("UPDATE:: ",data);
                });
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Indicador Actualizado',
                    life: 3000,
                });
            } else {
                this.indicadorService.nuevoIndicador(this.indicador)
                .subscribe((data) => {
                    console.log("SAVE:: ",data);
                });
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Indicador creado',
                    life: 3000,
                });
            }

            //this.products = [...this.products];
            this.indicadorDialog = false;
            this.indicador = {};
        }
    }

    findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.indicadores.length; i++) {
            if (this.indicadores[i].idIndicador === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal(
            (event.target as HTMLInputElement).value,
            'contains'
        );
    }

    onChange(event) {
        console.log('event :', event);
        console.log(event.value);
    }
}
