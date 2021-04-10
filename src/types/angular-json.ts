/**
 * Angular configuration
 */
export interface AngularJson {
  /**
   * Version of the configuration format
   */
  version: number;
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

/**
 * Type of project supported
 */
export type ProjectType = 'library' | 'application';

/**
 * Project configuration
 */
export interface ProjectConfiguration {
  /**
   * Project's location relative to the root of the workspace
   */
  root?: string;

  /**
   * The location of project's sources relative to the root of the workspace
   */
  sourceRoot?: string;

  /**
   * Project type
   */
  projectType?: ProjectType;

  architect: {
    build?: {builder: string; [prop: string]: unknown};
    test?: {builder: string; [prop: string]: unknown};
    lint?: {builder: string; [prop: string]: unknown};
    serve?: {builder: string; [prop: string]: unknown};
    [prop: string]: unknown;
  };

  [prop: string]: unknown;
}
