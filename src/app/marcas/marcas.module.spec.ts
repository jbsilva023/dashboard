import { MarcasModule } from './marcas.module';

describe('MarcasModule', () => {
  let marcasModule: MarcasModule;

  beforeEach(() => {
    marcasModule = new MarcasModule();
  });

  it('should create an instance', () => {
    expect(marcasModule).toBeTruthy();
  });
});
