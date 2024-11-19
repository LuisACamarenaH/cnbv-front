import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebtUploadRoutingModule } from './debt-upload-routing.module';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule } from '@angular/forms';
import { DebtUploadComponent } from './debt-upload.component';
import { ToastModule } from 'primeng/toast';

@NgModule({
    declarations: [DebtUploadComponent],
    imports: [
        CommonModule,
        DebtUploadRoutingModule,
        FileUploadModule,
        CommonModule,
        ToastModule,
        FormsModule,
    ],
})
export class DebtUploadModule {}
