import {ProjectConfiguration} from './project-configuration';

/**
 * Angular configuration
 */
export interface AngularJson {
  /**
   * Version of the configuration format
   */
  version?: number;
  /**
   * Projects' configurations
   */
  projects: {[projectName: string]: ProjectConfiguration};

  /**
   * Default project. When project isn't provided, the default project
   * will be used. Convenient for small workspaces with one main application.
   */
  defaultProject?: string;

  /**
   * Default generator collection. It is used when no collection is provided.
   */
  cli?: {
    packageManager?: 'npm' | 'yarn' | 'pnpm';
    defaultCollection?: string;
  };

  [prop: string]: unknown;
}
