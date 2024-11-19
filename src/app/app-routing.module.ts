import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FinanceDashboardComponent } from './components/finance-dashboard/finance-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redireciona para a tela de login
  { path: 'login', component: LoginComponent }, // Rota para a tela de login
  { path: 'dashboard', component: FinanceDashboardComponent }, // Rota para o dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
