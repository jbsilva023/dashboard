import { Produtos.RoutingModule } from './produtos.routing.module';

describe('Produtos.RoutingModule', () => {
  let produtosRoutingModule: Produtos.RoutingModule;

  beforeEach(() => {
    produtosRoutingModule = new Produtos.RoutingModule();
  });

  it('should create an instance', () => {
    expect(produtosRoutingModule).toBeTruthy();
  });
});
