import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from '../../services/github.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements OnInit {
  userData$: Observable<any> | undefined; // This will hold our data
  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.userData$ = this.githubService.getUserProfile();
    this.githubService.getUserProfile().subscribe({
      next: (data) => {
        console.log('#---Testing---#', data);
      },
      error: (rrr) => {
        console.error('The error is', rrr);
      },
      complete: () => console.log('Request Finished'),
    });
  }
}
