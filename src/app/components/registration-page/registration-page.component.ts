import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {
  user = { username: '', password: '' };
  loading = false;

  constructor(private router: Router, private authService: AuthService) {
    if (this.authService.isAuthenticated) {
      this.router.navigate(['/']);
    }
  }

  onSubmit() {
    this.loading = true;
    this.authService.signUp(this.user).pipe(first()).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error:
        () => {
          this.loading = false;
        }
    });
  }
}
