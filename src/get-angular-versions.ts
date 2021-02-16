import {versionsAngularWorkspace} from './angular-versions';
import {cloneDeep} from 'lodash-es';
import {
  PackageJsonVersionAngularWorkspace,
  PackageJsonVersionNxWorkspace
} from './types/package-json-version';
import {WorkspaceType} from './types/workspace-type';
import {versionsNxWorkspace} from './nx-angular-versions';

/**
 * Gets the `package.json` dependencies matching a specific angular version in a specific workspace type.
 * @param angularVersion The angular version to match (Ex. 8.0.x)
 * @param workspaceType The workspace type of the repository
 */
export function getAngularVersions<TWorkspaceType extends WorkspaceType>(
  angularVersion: string,
  workspaceType: TWorkspaceType
): [TWorkspaceType] extends 'angular'
  ? PackageJsonVersionAngularWorkspace
  : PackageJsonVersionNxWorkspace {
  if (workspaceType === 'angular') {
    return getAngularVersionsAngularWorkspace(angularVersion);
  } else {
    return getAngularVersionsNxWorkspace(angularVersion);
  }
}

export function getAngularVersionsAngularWorkspace(
  angularVersion: string
): PackageJsonVersionAngularWorkspace {
  if (versionsAngularWorkspace.has(angularVersion)) {
    return cloneDeep(
      versionsAngularWorkspace.get(angularVersion)
    ) as PackageJsonVersionAngularWorkspace;
  } else {
    throw new Error(
      `Angular version ${angularVersion} is not supported in an angular workspace`
    );
  }
}

function getAngularVersionsNxWorkspace(
  angularVersion: string
): PackageJsonVersionNxWorkspace {
  if (versionsNxWorkspace.has(angularVersion)) {
    return cloneDeep(
      versionsNxWorkspace.get(angularVersion)
    ) as PackageJsonVersionNxWorkspace;
  } else {
    throw new Error(
      `Angular version ${angularVersion} is not supported in a nx workspace`
    );
  }
}
