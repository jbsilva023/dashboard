import { Component, OnInit } from '@angular/core';

import { ProdutosService } from './produtos.service';
import { Produto } from './produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
  }

  produtos: Produto[] = this.produtosService.getProdutos();

}
