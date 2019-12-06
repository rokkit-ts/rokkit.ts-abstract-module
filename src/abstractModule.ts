/**
 * @class AbstractModule
 * @description The main interface of this package. The abstractModule class should be implemented by every rokkit.ts
 * module to unify the functionalities and their apis.
 */
export abstract class AbstractModule {
  protected instanceMap: Map<string, any>;

  constructor() {
    this.instanceMap = new Map();
  }

  public async injectDependencies(
    instanceMap: Map<string, any>
  ): Promise<void> {
    this.instanceMap = instanceMap;
  }

  public abstract async runModule(configuration: any): Promise<void>;
  public abstract async shoutDownModule(): Promise<void>;
}
