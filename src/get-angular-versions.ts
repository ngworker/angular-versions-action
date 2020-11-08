import {versions} from './angular-versions';
import {cloneDeep} from 'lodash-es';
import {PackageJsonVersion} from './types/package-json-version';

export function getAngularVersions(angularVersion: string): PackageJsonVersion {
  if (versions.has(angularVersion)) {
    return cloneDeep(versions.get(angularVersion)) as PackageJsonVersion;
  } else {
    throw new Error(`Angular version ${angularVersion} is not supported`);
  }
}
