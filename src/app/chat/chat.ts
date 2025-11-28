import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './chat.html',
  styleUrls: ['./chat.css'],
  providers: [ChatService],
})
export class ChatComponent {
  messages: { author: string; text: string }[] = [
    { author: 'Bot', text: 'Bienvenue dans le chat !' },
  ];
  newMessage = '';

  constructor(private chatService: ChatService) {}

  sendMessage() {
    const trimmed = this.newMessage.trim();
    if (!trimmed) return;

    this.messages.push({ author: 'Vous', text: trimmed });
    this.newMessage = '';

    this.chatService.sendMessage(trimmed).subscribe({
      next: (res) => {
        this.messages.push({ author: 'Bot', text: res.response });
      },
      error: () => {
        this.messages.push({
          author: 'Bot',
          text: "Erreur lors de l'envoi au serveur",
        });
      },
    });
  }
}
