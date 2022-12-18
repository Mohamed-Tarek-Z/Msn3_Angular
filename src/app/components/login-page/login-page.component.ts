import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  user = { username: '', password: '' };
  loading = false;
  returnUrl!: string;

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) {
    if (this.authService.isAuthenticated) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.loading = true;
    this.authService.logIn(this.user).pipe(first()).subscribe({
      next: () => {
        this.router.navigate([this.returnUrl]);
      },
      error:
        () => {
          this.loading = false;
        }
    });
  }
}
