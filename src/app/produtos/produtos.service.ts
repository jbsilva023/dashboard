import { Injectable } from '@angular/core';

import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: Produto[] = [
    {'produto_id': 1, 'codigo': '0001', 'nome': 'Produto 01',
    'preco': 200.00, 'descricao': 'Descrição do produto 0001', 'data_inc': '2018-10-11'},
    {'produto_id': 2, 'codigo': '0002', 'nome': 'Produto 02',
    'preco': 500.00, 'descricao': 'Descrição do produto 0002', 'data_inc': '2018-10-11'},
    {'produto_id': 3, 'codigo': '0003', 'nome': 'Produto 03',
    'preco': 900.00, 'descricao': 'Descrição do produto 0003', 'data_inc': '2018-10-11'},
    {'produto_id': 4, 'codigo': '0004', 'nome': 'Produto 04',
    'preco': 1000.00, 'descricao': 'Descrição do produto 0004', 'data_inc': '2018-10-11'}
  ];

  getProdutos() {
    return this.produtos;
  }
  constructor() { }
}
