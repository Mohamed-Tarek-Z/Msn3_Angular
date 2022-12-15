import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogInComponent } from '../log-in/log-in.component';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  username!: string;
  subscription!: Subscription;

  constructor(public dialog: MatDialog, private authService: AuthService) { }

  ngOnInit() {
    this.authService.loadUserCredentials();
    this.subscription = this.authService.getUsername()
      .subscribe(name => { console.log(name); this.username = name; });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openLoginForm() {
    const loginRef = this.dialog.open(LogInComponent, { width: '500px', height: '450px' });

    loginRef.afterClosed()
      .subscribe(result => {
        console.log(result);
      });
  }

  logOut() {
    this.username = '';
    this.authService.logOut();
  }

}
