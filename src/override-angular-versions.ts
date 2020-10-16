import {PackageJsonVersion} from './types/package-json-version';
import * as fs from 'fs';

export function overrideAngularVersions(
  angularVersions: PackageJsonVersion,
  path: string
): PackageJsonVersion {
  const rawData = fs.readFileSync(path);
  const packageJson: PackageJsonVersion = JSON.parse(rawData.toString());

  for (const prop in angularVersions.dependencies) {
    if (packageJson.dependencies.hasOwnProperty(prop)) {
      packageJson.dependencies[prop] = angularVersions.dependencies[prop];
    }
  }

  for (const prop in angularVersions.devDependencies) {
    if (packageJson.devDependencies.hasOwnProperty(prop)) {
      packageJson.devDependencies[prop] = angularVersions.devDependencies[prop];
    }
  }

  fs.writeFileSync(path, JSON.stringify(packageJson));

  return packageJson;
}
