/**
 * @class AbstractModule
 * @description The main interface of this package. The abstractModule class should be implemented by every rokkit.ts
 * module to unify the functionalities and their apis.
 */
export abstract class AbstractModule<T> {
  protected readonly configuration: T;
  constructor(configuration: T) {
    this.configuration = configuration;
  }

  public abstract async runModule(): Promise<void>;
  public abstract async shoutDownModule(): Promise<void>;
}
