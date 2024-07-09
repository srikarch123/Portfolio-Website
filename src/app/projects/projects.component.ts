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
      description: 'Created a super cool e-commerce website with React, MongoDB, Node.js, and Express where you can buy and sell bikes—or literally anything else that tickles your fancy! 🚴‍♂️🛒😄',
      image: 'assets/projects/project1.jpg',
      link: 'https://example.com/project1',
      source: 'https://github.com/yourusername/project1',
      hasDemo: true
    },
    {
      title: 'Personal Video Calling App',
      description: 'We all love Zoom and Teams, but ever wondered how video calling actually works? I dove into the nerdy magic with Socket.io and WebRTC to make it happen—check it out and prepare to be amazed! 🚀😂',
      image: 'assets/projects/project2.jpg',
      link: 'https://example.com/project2',
      source: 'https://github.com/yourusername/project2',
      hasDemo: true
    },
    {
      title: 'The Crazy Ransomware',
      description: 'We all know ransomware is no joke, but I built one as a Network Security course project! Dont worry, I dont have a demo for you to freak out over. But if you are curious, you can download it and see how files get encrypted with the RSA algorithm—no ransom needed to decrypt them. Not so scary after all, right? 😄🔐',
      image: 'assets/projects/project3.jpg',
      source: 'https://github.com/srikarch123/Crazy-Ransomware',
      hasDemo: false
    },
    {
      title: 'This Portfolio Website',
      description: 'I m sure you are digging how this portfolio website looks! Want to peek behind the curtain? Check out the source code—crafted with Angular 17, Bootstrap, and all the fun stuff. It s like web development magic, but with fewer rabbits. 🐰✨',
      image: 'assets/projects/project3.jpg',
      link: 'https://example.com/project3',
      source: 'https://github.com/yourusername/project3',
      hasDemo: false 
    }
  ];
}
