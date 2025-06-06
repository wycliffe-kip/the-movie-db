import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../../auth/pages/login/login.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(private dialog: MatDialog) {}

  openLoginDialog() {
    this.dialog.open(LoginComponent, {
      width: '400px',
      disableClose: true
    });
  }
}
