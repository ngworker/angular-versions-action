import {PackageJsonVersion} from './types/package-json-version';
import * as fs from 'fs';

export async function overrideAngularVersions(
  angularVersions: PackageJsonVersion,
  path: string
): Promise<void> {
  try {
    const rawData = fs.readFileSync(path);
    let packageJson: PackageJsonVersion = JSON.parse(rawData.toString());
    packageJson = {...packageJson, ...angularVersions};
    fs.writeFileSync(path, JSON.stringify(packageJson));
  } catch (error) {}
}
