import { Component } from '@angular/core';

@Component({
  selector: 'app-finance-dashboard',
  templateUrl: './finance-dashboard.component.html',
  styleUrls: ['./finance-dashboard.component.css']
})
export class FinanceDashboardComponent {
  // Expondo Math para o template
  Math = Math;

  // Lista de meses
  months: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  // Mês selecionado (padrão: Julho)
  selectedMonth: string = 'Julho';

  // Lista de dados
  data: { descricao: string; valor: number; data: string; categoria: string; tipo: string; }[] = [
    
  ];

  // Novo registro
  newData: { descricao: string; valor: number | null; data: string; categoria: string; tipo: string;} = {
    descricao: '',
    valor: null,
    data: '',
    categoria: '',
    tipo: ''
  };

  // Valores calculados
  receitasDoMes: number = 0;
  despesasDoMes: number = 0;
  totalDoMes: number = 0;

  // Controle do formulário
  isFormVisible = false;

  // Filtro de pesquisa
  searchQuery = '';

  constructor() {
    this.updateTotals();
  }

  // Função para selecionar o mês
  selectMonth(month: string): void {
    this.selectedMonth = month;
  }

  // Atualiza os totais
  updateTotals() {
    this.receitasDoMes = this.data
      .filter(item => item.tipo === 'receita')
      .reduce((total, item) => total + item.valor, 0);

    this.despesasDoMes = this.data
      .filter(item => item.tipo === 'despesa')
      .reduce((total, item) => total + item.valor, 0) * -1; // Multiplica por -1 para tornar negativo

    this.totalDoMes = this.receitasDoMes + this.despesasDoMes;
  }

  // Exibe/oculta o formulário
  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
    this.resetForm();
  }

  // Adiciona um novo registro
  addData() {
    if (
      this.newData.descricao &&
      this.newData.valor !== null &&
      this.newData.data &&
      this.newData.categoria &&
      this.newData.tipo 
    ) {
      // Adiciona o novo registro na lista de dados
      this.data = [...this.data, { ...this.newData, valor: this.newData.valor }];

      // Atualiza os valores dos cards
      this.updateTotals();

      // Fecha o formulário
      this.toggleForm();
    }
  }

  // Reseta o formulário
  resetForm() {
    this.newData = {
      descricao: '',
      valor: null,
      data: '',
      categoria: '',
      tipo: '',
    };
  }

  // Excluir um registro da lista
deleteData(index: number): void {
  this.data.splice(index, 1); // Remove o item pelo índice
  this.updateTotals(); // Recalcula os valores
}

}
