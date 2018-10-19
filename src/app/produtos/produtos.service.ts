import { Injectable } from '@angular/core';

import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: Produto[] = [
    {'produto_id': 1, 'codigo': '0001', 'nome': 'Produto 01', 'slug': 'produto-01',
    'descricao': 'Descrição do produto 0001', 'peso': 0.05, 'preco': 200.00, 'status': true,
    'dt_inc': '2018-10-11', 'dt_upd': '', 'categoria_id': 1, 'usuario_id': 1, 'atributo_id': 1,
    'estoque_id': 1, 'foto_id': 1, 'caracteristica_id': 1, 'marca_id': 1},
    {'produto_id': 2, 'codigo': '0002', 'nome': 'Produto 02', 'slug': 'produto-02',
    'descricao': 'Descrição do produto 0002', 'peso': 0.05, 'preco': 200.00, 'status': true,
    'dt_inc': '2018-10-11', 'dt_upd': '', 'categoria_id': 1, 'usuario_id': 1, 'atributo_id': 1,
    'estoque_id': 1, 'foto_id': 1, 'caracteristica_id': 1, 'marca_id': 1},
    {'produto_id': 3, 'codigo': '0003', 'nome': 'Produto 03', 'slug': 'produto-03',
    'descricao': 'Descrição do produto 0003', 'peso': 0.05, 'preco': 200.00, 'status': true,
    'dt_inc': '2018-10-11', 'dt_upd': '', 'categoria_id': 1, 'usuario_id': 1, 'atributo_id': 1,
    'estoque_id': 1, 'foto_id': 1, 'caracteristica_id': 1, 'marca_id': 1},
    {'produto_id': 4, 'codigo': '0004', 'nome': 'Produto 04', 'slug': 'produto-04',
    'descricao': 'Descrição do produto 0004', 'peso': 0.05, 'preco': 200.00, 'status': true,
    'dt_inc': '2018-10-11', 'dt_upd': '', 'categoria_id': 1, 'usuario_id': 1, 'atributo_id': 1,
    'estoque_id': 1, 'foto_id': 1, 'caracteristica_id': 1, 'marca_id': 1},
    {'produto_id': 5, 'codigo': '0005', 'nome': 'Produto 05', 'slug': 'produto-05',
    'descricao': 'Descrição do produto 0005', 'peso': 0.05, 'preco': 200.00, 'status': true,
    'dt_inc': '2018-10-11', 'dt_upd': '', 'categoria_id': 1, 'usuario_id': 1, 'atributo_id': 1,
    'estoque_id': 1, 'foto_id': 1, 'caracteristica_id': 1, 'marca_id': 1},
    {'produto_id': 6, 'codigo': '0006', 'nome': 'Produto 06', 'slug': 'produto-06',
    'descricao': 'Descrição do produto 0006', 'peso': 0.05, 'preco': 200.00, 'status': true,
    'dt_inc': '2018-10-11', 'dt_upd': '', 'categoria_id': 1, 'usuario_id': 1, 'atributo_id': 1,
    'estoque_id': 1, 'foto_id': 1, 'caracteristica_id': 1, 'marca_id': 1},
    {'produto_id': 7, 'codigo': '0007', 'nome': 'Produto 07', 'slug': 'produto-07',
    'descricao': 'Descrição do produto 0007', 'peso': 0.05, 'preco': 200.00, 'status': true,
    'dt_inc': '2018-10-11', 'dt_upd': '', 'categoria_id': 1, 'usuario_id': 1, 'atributo_id': 1,
    'estoque_id': 1, 'foto_id': 1, 'caracteristica_id': 1, 'marca_id': 1},
    {'produto_id': 8, 'codigo': '0008', 'nome': 'Produto 08', 'slug': 'produto-08',
    'descricao': 'Descrição do produto 0008', 'peso': 0.05, 'preco': 200.00, 'status': true,
    'dt_inc': '2018-10-11', 'dt_upd': '', 'categoria_id': 1, 'usuario_id': 1, 'atributo_id': 1,
    'estoque_id': 1, 'foto_id': 1, 'caracteristica_id': 1, 'marca_id': 1},
    {'produto_id': 9, 'codigo': '0009', 'nome': 'Produto 09', 'slug': 'produto-09',
    'descricao': 'Descrição do produto 0009', 'peso': 0.05, 'preco': 200.00, 'status': true,
    'dt_inc': '2018-10-11', 'dt_upd': '', 'categoria_id': 1, 'usuario_id': 1, 'atributo_id': 1,
    'estoque_id': 1, 'foto_id': 1, 'caracteristica_id': 1, 'marca_id': 1},
    {'produto_id': 10, 'codigo': '0010', 'nome': 'Produto 10', 'slug': 'produto-10',
    'descricao': 'Descrição do produto 0010', 'peso': 0.05, 'preco': 200.00, 'status': true,
    'dt_inc': '2018-10-11', 'dt_upd': '', 'categoria_id': 1, 'usuario_id': 1, 'atributo_id': 1,
    'estoque_id': 1, 'foto_id': 1, 'caracteristica_id': 1, 'marca_id': 1}
  ];

  getProdutos() {
    return this.produtos;
  }

  get(produto_id: number) {
    return {};
  }
  constructor() { }
}
