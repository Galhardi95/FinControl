import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = { email: '', password: '' }; // Propriedades para [(ngModel)]
  errorMessage: string | null = null; // Mensagem de erro para exibir no template

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    // Enviar credenciais para o backend
    this.http.post<any>('http://localhost:3000/api/login', this.loginData).subscribe({
      next: (response) => {
        // Salvar token no localStorage e redirecionar
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']); // Redirecionar para o dashboard
      },
      error: (err) => {
        this.errorMessage = err.error.message || 'Erro ao realizar login';
      }
    });
  }
}
