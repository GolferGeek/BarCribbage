import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {}

  navigateToTurn() {
    this.router.navigateByUrl('/home');
  }
}
