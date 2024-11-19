import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UploadService } from 'src/app/demo/service/upload.service';

@Component({
    selector: 'app-history-upload',
    templateUrl: './history-upload.component.html',
    styleUrl: './history-upload.component.scss',
})
export class HistoryUploadComponent {
    uploadedFiles: any[] = [];

    constructor(
        private messageService: MessageService,
        private uploadService: UploadService
    ) {}

    uploadHandler() {
        this.uploadService
            .uploadTemplateHistory(this.createFormData())
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
