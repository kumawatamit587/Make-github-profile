import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from '../../services/github.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'], // ✅ FIXED
})
export class Sidebar implements OnInit {
  userData$!: Observable<any>;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.userData$ = this.githubService.getUserProfile();

    // Optional debug (can remove later)
    this.githubService.getUserProfile().subscribe({
      next: (data) => {
        console.log('#---Testing---#', data);
      },
      error: (err) => {
        console.error('The error is', err);
      },
      complete: () => console.log('Request Finished'),
    });
  }
}
