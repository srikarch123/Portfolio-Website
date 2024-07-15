import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', icon: 'fab fa-angular', color: '#dd1b16' },
    { name: 'TypeScript', icon: 'assets/skills/typescript.svg', isSvg: true },
    { name: 'JavaScript', icon: 'fab fa-js', color: '#f7df1e' },
    { name: 'HTML5', icon: 'fab fa-html5', color: '#e34f26' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572b6' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952b3' },
    { name: 'Git', icon: 'fab fa-git', color: '#f34f29' },
    { name: 'Node.js', icon: 'fab fa-node', color: '#68a063' },
    { name: 'Python', icon: 'fab fa-python', color: '#306998' },
    { name: 'PHP', icon: 'fab fa-php', color: '#787cb5' },
    { name: 'Java', icon: 'fab fa-java', color: '#007396' },
    { name: 'C++', icon: 'fas fa-code', color: '#00599c' },
    { name: 'C#', icon: 'fas fa-code', color: '#9b4993' },
    { name: 'MySQL', icon: 'fas fa-database', color: '#4479a1' },
    { name: 'MongoDB', icon: 'fas fa-database', color: '#47a248' },
    { name: 'PostgreSQL', icon: 'fas fa-database', color: '#336791' },
    { name: 'Azure', icon: 'fab fa-microsoft', color: '#0078d4' },
    { name: 'Docker', icon: 'fab fa-docker', color: '#2496ed' },
    { name: 'Kubernetes', icon: 'assets/skills/kubernates.svg', isSvg: true },
    { name: 'JIRA', icon: 'fab fa-jira', color: '#0052cc' },
    { name: 'Spring', icon: 'fab fa-java', color: '#6db33f' },
    { name: 'Hibernate', icon: 'fas fa-leaf', color: '#59666c' },
    { name: 'Selenium', icon: 'fab fa-searchengin', color: '#43b02a' },
    { name: 'Maven', icon: 'fas fa-tools', color: '#c71a36' },
    { name: 'Jenkins', icon: 'fas fa-tools', color: '#d33833' },
    { name: 'Gradle', icon: 'fas fa-tools', color: '#02303a' },
    { name: 'Bitbucket', icon: 'fab fa-bitbucket', color: '#2684ff' },
    { name: 'GitLab', icon: 'fab fa-gitlab', color: '#fc6d26' },
    { name: 'PowerBI', icon: 'fas fa-chart-bar', color: '#f2c811' },
    { name: 'Tableau', icon: 'fas fa-chart-pie', color: '#e97627' },
  ];
}
