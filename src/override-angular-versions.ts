import {PackageJsonVersion} from './types/package-json-version';
import * as fs from 'fs';

export function overrideAngularVersions(
  angularVersions: PackageJsonVersion,
  path: string
): PackageJsonVersion {
  const rawData = fs.readFileSync(path);
  let packageJson: PackageJsonVersion = JSON.parse(rawData.toString());
  packageJson = {...packageJson, ...angularVersions};

  fs.writeFileSync(path, JSON.stringify(packageJson));

  return packageJson;
}
