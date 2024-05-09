import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { // Añade router aquí
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  iniciarSesion() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      localStorage.setItem('usuario', JSON.stringify(loginData));
      this.router.navigate(['/home']);
    }
  }
}
