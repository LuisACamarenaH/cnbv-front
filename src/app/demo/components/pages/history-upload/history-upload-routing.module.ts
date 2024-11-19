import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryUploadComponent } from './history-upload.component';

const routes: Routes = [
    {
        path: '',
        component: HistoryUploadComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HistoryUploadRoutingModule {}
