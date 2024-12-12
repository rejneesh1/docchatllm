import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatFormFieldModule,MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule,MatButtonModule,MatProgressSpinnerModule,ReactiveFormsModule, MatFormFieldModule],
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css'],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { subscriptSizing: 'dynamic' },
    },
   ],
})
export class ChatWindowComponent implements OnInit {
  chatForm: FormGroup;
  chatHistory: { sender: string, message: string }[] = [];
  isLoading = false;  // For showing the typing indicator

  constructor(private fb: FormBuilder) {
    this.chatForm = this.fb.group({
      message: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  ngOnInit(): void {
    // Add initial greeting message from LLM
    this.chatHistory.push({
      sender: 'LLM:',
      message: 'Hi, how can I help you today?'
    });
  }

  onSendMessage() {
    if (this.chatForm.valid) {
      const userMessage = this.chatForm.value.message;

      // Add the user's message to the chat history
      this.chatHistory.push({ sender: 'You:', message: userMessage });

      // Simulate LLM response after a brief delay
      this.isLoading = true;
      setTimeout(() => {
        const llmResponse = this.getLLMResponse(userMessage);
        this.chatHistory.push({ sender: 'LLM:', message: llmResponse });
        this.isLoading = false;
      }, 1500);

      this.chatForm.reset(); // Clear the message input
    }
  }

  getLLMResponse(userMessage: string): string {
    // Simulated LLM response
    return `You said: "${userMessage}". This is my AI response!`;
  }
}