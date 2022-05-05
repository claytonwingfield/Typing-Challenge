import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Typing Challenge';
  randomText = lorem.sentence();
  successMessage = 'Success';
  enteredText = '';

  isTyping(value: string) {
    this.enteredText = value;
  }
  compare(randomLetter: string, enterLetter: string) {
    if (!enterLetter) {
      return 'pending';
    }

    return randomLetter === enterLetter ? 'correct' : 'incorrect';
  }
}
