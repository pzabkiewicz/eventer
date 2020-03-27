import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService) {

    this.loginForm = this.fb.group({
      'email': this.fb.control('', [Validators.email, Validators.required]),
      'password': this.fb.control('', Validators.required)
    });
  }

  ngOnInit() {
  }

  onLogin() {
    this.authService.loggedIn.next(true);
  }

}
