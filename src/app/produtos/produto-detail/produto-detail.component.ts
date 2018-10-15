import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProdutosService } from './../produtos.service';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detail.component.html',
  styleUrls: ['./produto-detail.component.css']
})
export class ProdutoDetailComponent implements OnInit, OnDestroy {

  id: string;
  inscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private produtosService: ProdutosService) {
      this.id = this.route.snapshot.params['id'];
    }

  ngOnInit() {
    this.inscription = this.route.params.subscribe((params: any) => this.id = params['id']);
  }

  ngOnDestroy() {
    this.inscription.unsubscribe();
  }

}
