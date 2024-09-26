import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { TipoIndicadorService } from './tipoIndicador.service';
import { AbstractCatalogo } from 'src/app/demo/api/abstract-catalogo';

@Component({
    templateUrl: './tipoIndicador.component.html',
    providers: [MessageService]
})
export class TipoIndicadorComponent implements OnInit {

    tipoIndicadorDialog: boolean = false;
    deleteTipoIndicadorDialog: boolean = false;
    deleteTiposIndicadoresDialog: boolean = false;

    tiposIndicadores: AbstractCatalogo[] = [];
    tipoIndicador: AbstractCatalogo = {};
    
    selectedTiposIndicadores: AbstractCatalogo[] = [];
    submitted: boolean = false;
    cols: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    constructor(private tipoIndicadorService: TipoIndicadorService, private messageService: MessageService) { }

    ngOnInit() {
        this.tipoIndicadorService.getTiposIndicadores().subscribe(data => this.tiposIndicadores = data);

        this.cols = [
            { field: 'id', header: 'Id' },
            { field: 'description', header: 'Descripcion' }
        ];
    }

    openNew() {
        this.tipoIndicador = {};
        this.submitted = false;
        this.tipoIndicadorDialog = true;
    }

    deleteSelectedTiposIndicadores() {
        this.deleteTiposIndicadoresDialog = true;
    }

    editTipoIndicador(tipoIndicador: AbstractCatalogo) {
        this.tipoIndicador = { ...tipoIndicador };
        this.tipoIndicadorDialog = true;
    }

    deleteTipoIndicador(tipoIndicador: AbstractCatalogo) {
        this.deleteTipoIndicadorDialog = true;
        this.tipoIndicador = { ...tipoIndicador };
    }

    confirmDeleteSelected() {
        this.deleteTiposIndicadoresDialog = false;
        //this.tiposIndicadores = this.tiposIndicadores.filter(val => !this.selectedProducts.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
        this.selectedTiposIndicadores = [];
    }

    confirmDelete() {
        this.deleteTipoIndicadorDialog = false;
        //this.products = this.products.filter(val => val.id !== this.product.id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
        this.tipoIndicador = {};
    }

    hideDialog() {
        this.tipoIndicadorDialog = false;
        this.submitted = false;
    }

    saveTipoIndicador() {
        this.submitted = true;

        if (this.tipoIndicador.description?.trim()) {
            if (this.tipoIndicador.id) {
                // @ts-ignore
                this.product.inventoryStatus = this.product.inventoryStatus.value ? this.product.inventoryStatus.value : this.product.inventoryStatus;
                //this.products[this.findIndexById(this.product.id)] = this.product;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            } else {
               // this.tipoIndicador.id = this.createId();
                //this.product.code = this.createId();
                //this.product.image = 'product-placeholder.svg';
                // @ts-ignore
                //this.product.inventoryStatus = this.product.inventoryStatus ? this.product.inventoryStatus.value : 'INSTOCK';
                //this.products.push(this.product);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            //this.products = [...this.products];
            this.tipoIndicadorDialog = false;
            this.tipoIndicador = {};
        }
    }

    findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.tiposIndicadores.length; i++) {
            if (this.tiposIndicadores[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
}
