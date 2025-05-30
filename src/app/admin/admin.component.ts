import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username === 'admin' && this.password === 'admin123') {
      this.router.navigate(['/list']);
    } else {
      this.error = 'Invalid credentials';
    }
  }
}