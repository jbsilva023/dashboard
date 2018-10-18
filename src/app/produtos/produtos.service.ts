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
    'preco': 1000.00, 'descricao': 'Descrição do produto 0004', 'data_inc': '2018-10-11'},
    {'produto_id': 5, 'codigo': '0005', 'nome': 'Produto 05',
    'preco': 250.00, 'descricao': 'Descrição do produto 0005', 'data_inc': '2018-10-11'},
    {'produto_id': 6, 'codigo': '0006', 'nome': 'Produto 06',
    'preco': 550.00, 'descricao': 'Descrição do produto 0006', 'data_inc': '2018-10-11'},
    {'produto_id': 7, 'codigo': '0007', 'nome': 'Produto 07',
    'preco': 970.00, 'descricao': 'Descrição do produto 0007', 'data_inc': '2018-10-11'},
    {'produto_id': 8, 'codigo': '0008', 'nome': 'Produto 08',
    'preco': 1020.00, 'descricao': 'Descrição do produto 0008', 'data_inc': '2018-10-11'}
  ];

  getProdutos() {
    return this.produtos;
  }

  get(produto_id: number) {
    return {};
  }
  constructor() { }
}
