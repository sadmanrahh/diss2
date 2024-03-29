import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/services/auth.service';
import { LoginData } from 'src/app/core/interfaces/login-data.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  login(loginData: LoginData) {
    this.authService
      .login(loginData)
      .then(() => this.router.navigate(['/iiuTbq5pcmpv91BdwBs8ndk8NTonLYfN8CxI60nNnkq4ac7pndjZTzCLfwW4xlkT8y56fRRjRnvgbUDX']))
      .catch((e) => console.log(e.message));
  }

  loginWithGoogle() {
    this.authService
      .loginWithGoogle()
      .then(() => this.router.navigate(['/QnkieA1qkyywixiXxItllqUoU54qMaTnejSsZneMiuenIt3Eh7MY4E0kpQ2ULDYniOZVVo8gf67uMNZ4']))
      .catch((e) => console.log(e.message));
  }
}


