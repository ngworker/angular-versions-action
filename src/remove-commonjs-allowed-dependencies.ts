import {cloneDeep} from 'lodash-es';

import {AngularVersion} from './types/angular-version';
import {AngularJson} from './types/angular-json';
import {angularVersionComparer} from './angular-version-comparer';
import {ProjectConfiguration} from './types/project-configuration';
import {ArchitectConfiguration} from './types/architect-configuration';

const exclusiveAngularVersion = '10.0.x';

export function removeCommonJsAllowList(
  angularVersion: AngularVersion,
  angularJson: AngularJson
): AngularJson {
  const modifiedAngularJson = cloneDeep(angularJson);

  const projectsAndTargetsWithAllowedCommonJSDependencies = getNameOfProjectsAndTargetsWithAllowedCommonJSDependencies(
    angularJson
  );

  projectsAndTargetsWithAllowedCommonJSDependencies.forEach(
    ([projectName, targetName]) => {
      if (isRemovable(angularVersion)) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        delete modifiedAngularJson.projects[projectName].architect[targetName]
          .options!.allowedCommonJsDependencies;
      }
    }
  );

  return modifiedAngularJson;
}

function getNameOfProjectsAndTargetsWithAllowedCommonJSDependencies(
  workspace: AngularJson
): [string, string][] {
  return Object.entries(workspace.projects)
    .filter(([, projectConfig]) => projectConfig.projectType === 'application')
    .map(([projectName, application]) => {
      return [
        projectName,
        findProjectTargetWithAllowedCommonJSDependencies(application)
      ] as [string, [string, ArchitectConfiguration]];
    })
    .filter(([, target]) => target !== undefined)
    .map(([projectName, target]) => [projectName, target[0]]);
}

function findProjectTargetWithAllowedCommonJSDependencies(
  application: ProjectConfiguration
): [string, ArchitectConfiguration] | undefined {
  return Object.entries(application.architect).find(
    ([, targetConfig]) => !!targetConfig.options?.allowedCommonJsDependencies
  );
}

function isRemovable(angularVersion: AngularVersion): boolean {
  return angularVersionComparer(angularVersion, exclusiveAngularVersion) < 0;
}
