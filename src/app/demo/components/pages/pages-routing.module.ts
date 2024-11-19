import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'tipoIndicador',
                loadChildren: () =>
                    import(
                        './catalogos/tipoIndicador/tipoIndicador.module'
                    ).then((m) => m.TipoIndicadorModule),
            },
            {
                path: 'indicador',
                loadChildren: () =>
                    import('./catalogos/indicador/indicador.module').then(
                        (m) => m.IndicadorModule
                    ),
            },
            {
                path: 'crud',
                loadChildren: () =>
                    import('./crud/crud.module').then((m) => m.CrudModule),
            },
            {
                path: 'empty',
                loadChildren: () =>
                    import('./empty/emptydemo.module').then(
                        (m) => m.EmptyDemoModule
                    ),
            },
            {
                path: 'timeline',
                loadChildren: () =>
                    import('./timeline/timelinedemo.module').then(
                        (m) => m.TimelineDemoModule
                    ),
            },
            {
                path: 'debt-upload',
                loadChildren: () =>
                    import('./debt-upload/debt-upload.module').then(
                        (m) => m.DebtUploadModule
                    ),
            },
            {
                path: 'history-upload',
                loadChildren: () =>
                    import('./debt-upload/debt-upload.module').then(
                        (m) => m.DebtUploadModule
                    ),
            },
            { path: '**', redirectTo: '/notfound' },
        ]),
    ],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
