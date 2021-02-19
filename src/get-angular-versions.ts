import {versions} from './angular-versions';
import {cloneDeep} from 'lodash-es';
import {PackageJsonVersion} from './types/package-json-version';
import {WorkspaceType} from './types/workspace-type';

/**
 * Gets the `package.json` dependencies matching a specific angular version in a specific workspace type.
 * @param angularVersion The angular version to match (Ex. 8.0.x)
 * @param workspaceType The workspace type of the repository
 */
export function getAngularVersions(
  angularVersion: string,
  workspaceType: WorkspaceType
): PackageJsonVersion {
  if (angularVersionSupportsWorkspaceType(angularVersion, workspaceType)) {
    return cloneDeep(versions.get(angularVersion)) as PackageJsonVersion;
  } else {
    throw new Error(
      `Angular version ${angularVersion} is not supported in an angular workspace`
    );
  }
}

function angularVersionSupportsWorkspaceType(
  angularVersion: string,
  workspaceType: WorkspaceType
): boolean {
  const isAngularVersionSupported = versions.has(angularVersion);

  return workspaceType === 'nx'
    ? angularVersionSupportsNx(angularVersion)
    : isAngularVersionSupported;
}

function angularVersionSupportsNx(angularVersion: string): boolean {
  return (
    versions.get(angularVersion)?.devDependencies['@nrwl/workspace'] !==
    undefined
  );
}
