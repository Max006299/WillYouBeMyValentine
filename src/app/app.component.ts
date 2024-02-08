import { Component } from '@angular/core';
import party from "party-js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WillYou';

  yesSizeHeight = 60;
  yesSizeWidth = 80;
  yesFontSize = 20;

  img = "bear.gif"
  clickCount = 0;
  noText = "No";

  questions = ["Are you sure?", "Really sure?", "Think again", "Last chance", "Surely not?", "You might regret this", "Give it another thought", "Are you absolutely certain?", "This could be a mistake", "Have a heart!", "Don't be so cold", "Wouldn't you reconsider?", "Is that your final answer?", "You're breaking my heart :-("]

  handleNo() {
    if (this.clickCount >= this.questions.length) { return; }

    this.noText = this.questions[this.clickCount]
    this.clickCount += 1;

    this.yesSizeHeight += 30;
    this.yesSizeWidth += 30;
    this.yesFontSize += 8;
  }

  handleYes(source: any) {
    this.img = "kiss-attack.gif"
    party.confetti(source, {count: 1000})
  }
}
