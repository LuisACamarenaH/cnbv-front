import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { UploadService } from 'src/app/demo/service/upload.service';

@Component({
    selector: 'app-debt-upload',
    templateUrl: './debt-upload.component.html',
    styleUrl: './debt-upload.component.scss',
    providers: [MessageService],
})
export class DebtUploadComponent {
    uploadedFiles: any[] = [];

    constructor(
        private messageService: MessageService,
        private uploadService: UploadService
    ) {}

    uploadHandler() {
        this.uploadService
            .uploadTemplateDue(this.createFormData())
            .subscribe(() => {
                this.messageService.add({
                    severity: 'info',
                    summary: 'Success',
                    detail: 'Se cargo el archivo correctamente',
                });
            });
    }

    onSelect(event: any) {
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }
    }

    onClear() {
        this.uploadService = undefined;
    }

    // private getResults(): void {
    //   this.dueService.getResults().subscribe((response) => {
    //     this.dataResult = response;
    //   });
    // }

    private createFormData(): any {
        const files = this.uploadedFiles;
        const formData = new FormData();

        if (files && files.length > 0) {
            formData.append(
                'file',
                new Blob([files[0]], { type: 'text/csv' }),
                files[0].name
            );
            return formData;
        }
    }
}
