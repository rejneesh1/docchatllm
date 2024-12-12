import { Component, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { AlertService } from '../shared/alert.service';

@Component({
  templateUrl: './dashboard.component.html',
  standalone: true,
  styleUrls: ['./dashboard.component.css'],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatTableModule
  ]
})
export class DashboardComponent {
  fileUploadForm: FormGroup;
  fileToUpload: File | null = null;
  uploadProgress = 0;
  isUploading = false;
  uploadedFiles: { name: string, uploadDate: string }[] = []; // Array to store file details

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef,private alert : AlertService) {
    this.fileUploadForm = this.fb.group({
      file: [null, Validators.required]
    });
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.fileToUpload = input.files[0];
    }
  }

  uploadFile() {
    if (this.fileToUpload) {
      this.isUploading = true;
      this.uploadProgress = 0;

      // Simulate upload with a timeout
      const uploadInterval = setInterval(() => {
        if (this.uploadProgress < 100) {
          this.uploadProgress += 10; // Increment progress
        } else {
          clearInterval(uploadInterval);
          this.isUploading = false;
          const uploadDate = new Date().toLocaleString();
          
          // Add the file to the uploaded files array
          this.uploadedFiles = [
            ...this.uploadedFiles,
            {
              name: this.fileToUpload?.name || '',
              uploadDate: uploadDate
            }
          ];

          // Reset the file input and form
          this.fileToUpload = null;
          this.fileUploadForm.reset();
          
          this.cdr.detectChanges(); // Trigger change detection to ensure the table updates
          this.alert.showAlert('File uploaded successfully (dummy)!'); // Dummy success message
        }
      }, 500); // Simulate each step taking 500ms
    }
  }

  deleteFile(index: number): void {
    this.uploadedFiles.splice(index, 1); // Remove file from the uploaded list

    // Create a new array reference to trigger Angular's change detection
    this.uploadedFiles = [...this.uploadedFiles];
    this.cdr.detectChanges(); // Manually trigger change detection
  }
}
