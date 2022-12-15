import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  user = { username: '', password: '', remember: false };
  errMess!: string;
  constructor(public dialogRef: MatDialogRef<LogInComponent>,private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('User: ', this.user);
    this.authService.logIn(this.user)
      .subscribe({
        next: (res) => {
          if (res.success) {
            this.dialogRef.close(res.success);
          } else {
            console.log(res);
          }
        },
        error: (error) => {
          console.log(error);
          this.errMess = error;
        }
      });
  }

}
