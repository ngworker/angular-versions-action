import {AngularJson} from './types/angular-json';
import {cloneDeep} from 'lodash-es';
import {AngularVersion} from './types/angular-version';
import {angularVersionComparer} from './angular-version-comparer';
import {ProjectConfiguration} from './types/project-configuration';
import {ArchitectConfiguration} from './types/architect-configuration';

export const preAngular10_1NgPackagrBuilder =
  '@angular-devkit/build-ng-packagr:build';
export const angular10_1AndUpNgPackagrBuilder =
  '@angular-devkit/build-angular:ng-packagr';

const angular10_1: AngularVersion = '10.1.x';

/**
 * Replace all libraries builder using ng-packagr with the correct builder given the Angular version
 *
 */
export function replaceLibrariesNgPackagrBuilder(
  angularVersion: AngularVersion,
  angularJson: AngularJson
): AngularJson {
  const modifiedAngularJson = cloneDeep(angularJson);

  const projectsAndTargetsWithNgPackagrBuilder =
    getNameOfProjectsAndTargetsUsingNgpackagr(angularJson);

  const correctBuilderForVersion = getCorrectNgPackgrBuilder(angularVersion);

  projectsAndTargetsWithNgPackagrBuilder.forEach(
    ([projectName, targetName]) => {
      modifiedAngularJson.projects[projectName].architect[targetName].builder =
        correctBuilderForVersion;
    }
  );

  return modifiedAngularJson;
}

/**
 * Return a list with all project/target name tuples using a ng-packagr builder.
 *
 */
function getNameOfProjectsAndTargetsUsingNgpackagr(
  workspace: AngularJson
): [string, string][] {
  return Object.entries(workspace.projects)
    .filter(([, projectConfig]) => projectConfig.projectType === 'library')
    .map(([projectName, library]) => {
      return [projectName, findProjectTargetWithNgPackagrBuilder(library)] as [
        string,
        [string, ArchitectConfiguration]
      ];
    })
    .filter(([, target]) => target !== undefined)
    .map(([projectName, target]) => [projectName, target[0]]);
}

function findProjectTargetWithNgPackagrBuilder(
  library: ProjectConfiguration
): [string, ArchitectConfiguration] | undefined {
  return Object.entries(library.architect).find(([, targetConfig]) =>
    [preAngular10_1NgPackagrBuilder, angular10_1AndUpNgPackagrBuilder].includes(
      targetConfig.builder
    )
  );
}

/**
 * Returns the correct ng-packagr builder for the specified Angular version.
 *
 */
function getCorrectNgPackgrBuilder(angularVersion: AngularVersion): string {
  return angularVersionComparer(angularVersion, angular10_1) >= 0
    ? angular10_1AndUpNgPackagrBuilder
    : preAngular10_1NgPackagrBuilder;
}
