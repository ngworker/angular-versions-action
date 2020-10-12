import {PackageJsonVersion} from './types/package-json-version';
import * as fs from 'fs';
import * as core from '@actions/core';

export async function overrideAngularVersions(
  angularVersions: PackageJsonVersion,
  path: string
): Promise<void> {
  const rawData = fs.readFileSync(path);
  let packageJson: PackageJsonVersion = JSON.parse(rawData.toString());
  packageJson = {...packageJson, ...angularVersions};
  core.debug(
    `Depedencies merge in package.json: \n ${JSON.stringify(
      packageJson,
      null,
      2
    )}`
  );
  fs.writeFileSync(path, JSON.stringify(packageJson));
}
