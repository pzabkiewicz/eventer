import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {

    this.loginForm = this.fb.group({
      'email': this.fb.control('', [Validators.email, Validators.required]),
      'password': this.fb.control('', Validators.required)
    });
  }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login();
    const url = this.authService.redirectUrl ? this.authService.redirectUrl : '/events';
    this.router.navigate([url]);
  }

}
