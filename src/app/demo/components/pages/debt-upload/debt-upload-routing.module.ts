import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebtUploadComponent } from './debt-upload.component';

const routes: Routes = [
    {
        path: '',
        component: DebtUploadComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DebtUploadRoutingModule {}
