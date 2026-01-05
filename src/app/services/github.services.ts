import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private username = 'shreeramk'; // Use your username
  private baseUrl = `https://api.github.com/users/${this.username}`;

  constructor(private http: HttpClient) {}

  // Method below to get user profile
  getUserProfile(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getrepos(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/repos`);
  }

  // We can add the method for repos or contributions here later!
}
