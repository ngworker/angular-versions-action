import {ArchitectConfiguration} from './architect-configuration';
import {ProjectType} from './project-type';

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
    [target: string]: ArchitectConfiguration;
  };

  [prop: string]: unknown;
}
