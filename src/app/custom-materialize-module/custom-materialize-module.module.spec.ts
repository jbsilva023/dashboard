import { CustomMaterializeModuleModule } from './custom-materialize-module.module';

describe('CustomMaterializeModuleModule', () => {
  let customMaterializeModuleModule: CustomMaterializeModuleModule;

  beforeEach(() => {
    customMaterializeModuleModule = new CustomMaterializeModuleModule();
  });

  it('should create an instance', () => {
    expect(customMaterializeModuleModule).toBeTruthy();
  });
});
