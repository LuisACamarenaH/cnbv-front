import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryUploadRoutingModule } from './history-upload-routing.module';
import { HistoryUploadComponent } from './history-upload.component';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [HistoryUploadComponent],
    imports: [
        CommonModule,
        HistoryUploadRoutingModule,
        FileUploadModule,
        CommonModule,
        ToastModule,
        FormsModule,
    ],
})
export class HistoryUploadModule {}
