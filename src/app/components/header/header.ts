import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { GithubService } from '../../services/github.services';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrls: ['./header.css'], // ✅ FIX (plural + array)
})
export class Header implements OnInit {
  user$!: Observable<any>;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.user$ = this.githubService.getUserProfile();
  }
}
