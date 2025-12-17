import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loading = false;

  form = this.fb.group({
    username: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required),
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private snack: MatSnackBar
  ) {}

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }


    const username = this.form.controls['username'].value?.trim();
    const password = this.form.controls['password'].value?.trim();

    this.loading = true;

    this.auth.login(username!, password!).subscribe({
      next: () => {
        this.snack.open('Login exitoso', 'OK', { duration: 1500 });
        this.router.navigateByUrl('/admin');
        this.loading = false;
      },
      error: () => {
        this.snack.open('Usuario o contraseña incorrectos', 'OK', { duration: 1500 });
        this.loading = false;
      }
    });
  }
}
