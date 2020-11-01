import {versions} from './angular-versions';
import {PackageJsonVersion} from './types/package-json-version';

export async function getAngularVersions(
  angularVersion: string
): Promise<PackageJsonVersion> {
  if (versions.has(angularVersion)) {
    return versions.get(angularVersion) as PackageJsonVersion;
  } else {
    throw new Error(`Angular version ${angularVersion} is not supported`);
  }
}
