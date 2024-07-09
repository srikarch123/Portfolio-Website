import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {
  workExperiences = [
    {
      title: 'Research Software Developer',
      company: 'University Of Nebraska Lincoln',
      duration: 'Feb 2024 - Present',
      description: 'Developing and maintaining web applications that make Agriculture better.',
      logo: '/assets/companyLogos/nebraska.webp'
    },
    {
      title: 'Full Stack Software Engineer',
      company: 'Elections Systems and Software',
      duration: 'May 2023  - Jan 2024',
      description: 'Implemented an Interface for Voting Tabulation Machines to cater people with hearing disabilities.',
      logo: '/assets/companyLogos/ess.svg'
    },
    {
      title: 'Graduate Teaching Assistant',
      company: 'School Of Computing (UNL)',
      duration: 'Aug 2023 - Dec 2024',
      description: 'Taught undergraduate Computer Organization and Engineering courses, assisted with C++ assignments, recognized as Best GTA, delivered lectures to 180 students, and automated grading with scripts.',
      logo: '/assets/companyLogos/nebraska.webp'
    },
    {
      title: 'Systems Engineer',
      company: 'Tata Consultancy Services (TCS)',
      duration: 'Sept 2018 - Dec 2022',
      description: 'As a Full Stack Developer and Networking Expert, I developed a Sprint tracking website and managed 5G hardware (AT&T) for clients, ensuring optimal performance. Proficient in Java, OOP, and data structures, I engaged in the full software development lifecycle and utilized advanced Power BI, Docker, Kubernetes, and various other technologies for complex projects.',
      logo: '/assets/companyLogos/tcs.webp'
    }
  ];
}
