import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {}

  navigateToTurn() {
    this.router.navigateByUrl('/home');
  }
}
