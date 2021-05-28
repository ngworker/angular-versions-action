import * as core from '@actions/core';
import * as fs from 'fs';
import path from 'path';

import {getAngularVersions} from './get-angular-versions';
import {overrideAngularVersions} from './override-angular-versions';
import {replaceLibrariesNgPackagrBuilder} from './replace-libraries-ngpackagr-builder';
import {AngularJson} from './types/angular-json';
import {AngularVersion} from './types/angular-version';
import {PackageJson} from './types/package-json';

function ensureCorrectNgPackagrBuilder(
  angularVersion: AngularVersion,
  angularJsonPath: string
): void {
  core.debug(
    `Accessing angular.json and replacing all ng-packagr targets to use the builder corresponding to the specified Angular version: ${angularVersion}`
  );
  const angularJson: AngularJson = JSON.parse(
    fs.readFileSync(angularJsonPath).toString()
  );
  const modifiedAngularJson = replaceLibrariesNgPackagrBuilder(
    angularVersion,
    angularJson
  );
  fs.writeFileSync(
    angularJsonPath,
    JSON.stringify(modifiedAngularJson, null, 2)
  );
  core.debug(
    'ng-packagr targets replaced to be compatible with the specified Angular version'
  );
}

function replaceAngularRelatedDependenciesInPackageJson(
  angularVersion: AngularVersion,
  packageJsonPath: string
): void {
  core.debug(`Finding dependencies for Angular version ${angularVersion}`);

  const angularVersions = getAngularVersions(angularVersion);
  core.debug(
    `Dependencies found: \n ${JSON.stringify(angularVersions, null, 2)}`
  );

  core.debug(`Merging found dependencies with file ${packageJsonPath}`);

  const projectVersions: PackageJson = JSON.parse(
    fs.readFileSync(packageJsonPath).toString()
  );
  const mergedVersions = overrideAngularVersions({
    angularVersions,
    projectVersions
  });
  fs.writeFileSync(packageJsonPath, JSON.stringify(mergedVersions, null, 2));

  core.debug(
    `Dependencies merged in package.json: \n ${JSON.stringify(
      mergedVersions,
      null,
      2
    )}`
  );
}

function run(): void {
  try {
    const angularVersion = core.getInput('angular-version') as AngularVersion;
    const rootPath: string = core.getInput('root-path');
    const packageJsonPath = path.join(rootPath, 'package.json');
    const angularJsonPath = path.join(rootPath, 'angular.json');

    replaceAngularRelatedDependenciesInPackageJson(
      angularVersion,
      packageJsonPath
    );

    ensureCorrectNgPackagrBuilder(angularVersion, angularJsonPath);

    core.debug(new Date().toISOString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
