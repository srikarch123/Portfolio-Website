import { Component, AfterViewInit } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit() {
    const typewriter = new Typewriter('#typewriter', {
      loop: false,
      delay: 75,
    });

    typewriter
      .typeString("Hello, I'm Srikar Chanamolu")
      .start();

    setTimeout(() => {
      const element = document.getElementById('after-typing');
      if (element) {
        element.classList.remove('d-none');
      }
    }, 2000); // Adjust the delay to match the duration of the typing animation
  }
}
