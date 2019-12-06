/**
 * @class AbstractModule
 * @description The main interface of this package. The abstractModule class should be implemented by every rokkit.ts
 * module to unify the functionalities and their apis.
 */
export abstract class AbstractModule {
  public abstract async initializeModule(configuration: any): Promise<void>;
  public abstract async injectDependencies(
    instanceMap: Map<string, any>
  ): Promise<void>;
  public abstract async shoutDownModule(): Promise<void>;
}
