import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Tardis Bike Website',
      description: 'Developed a dynamic e-commerce platform using React, MongoDB, Node.js, and Express, enabling users to buy and sell a wide variety of items, including bicycles. The application features a robust and user-friendly interface, ensuring a seamless shopping experience.',
      image: 'assets/projects/tardisbikes.png',
      link: 'https://example.com/project1',
      source: 'https://github.com/srikarch123/TardisBikesReact',
      hasDemo: false
    },
    {
      title: 'Personal Video Calling App',
      description: 'Explored the underlying technology of video calling by utilizing Socket.io and WebRTC. This project demonstrates the technical intricacies of real-time video communication, providing insights into the implementation and functionality of video calling applications like Zoom and Teams. Check it out for a deeper understanding of this fascinating technology.',
      image: 'assets/projects/videocalling.png',
      link: 'https://example.com/project2',
      source: 'https://github.com/srikarch123',
      hasDemo: false
    },
    {
      title: 'The Crazy Ransomware',
      description: 'For a Network Security course project, I developed a ransomware application to demonstrate the encryption process. Utilizing the RSA algorithm, this project shows how files can be securely encrypted and decrypted without requiring a ransom. While there is no live demo to worry about, you can download the project to see the encryption in action. It is a fascinating exploration of cybersecurity principles in a controlled environment.',
      image: 'assets/projects/rasomware.png',
      source: 'https://github.com/srikarch123/Crazy-Ransomware',
      hasDemo: false
    },
    {
      title: 'This Portfolio Website',
      description: 'I hope you are enjoying the design of this portfolio website! If you are curious about how it was built, feel free to check out the source code. Crafted with Angular 17 and Bootstrap, it is a showcase of modern web development techniques. Dive in to explore the magic behind the scenes, minus the rabbits. 🐰✨',
      image: 'assets/projects/portfolio.png',
      link: 'https://example.com/project3',
      source: 'https://github.com/srikarch123/Portfolio-Website',
      hasDemo: false 
    }
  ];
}
