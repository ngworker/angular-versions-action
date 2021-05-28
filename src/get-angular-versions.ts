import {versions} from './angular-versions';
import {cloneDeep} from 'lodash-es';
import {PackageJson} from './types/package-json';
import {AngularVersion} from './types/angular-version';

export function getAngularVersions(
  angularVersion: AngularVersion
): PackageJson {
  if (versions.has(angularVersion)) {
    return cloneDeep(versions.get(angularVersion)) as PackageJson;
  } else {
    throw new Error(`Angular version ${angularVersion} is not supported`);
  }
}
