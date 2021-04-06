import * as core from '@actions/core';
import * as fs from 'fs';
import path from 'path';

import {getAngularVersions} from './get-angular-versions';
import {overrideAngularVersions} from './override-angular-versions';
import {switchAngularBuilder} from './switch-angular-builder';
import {AngularJSON} from './types/angular-json';
import {PackageJsonVersion} from './types/package-json-version';

function run(): void {
  try {
    const angularVersion: string = core.getInput('angular-version');
    core.debug(`Finding dependencies for Angular version ${angularVersion}`);

    const angularVersions = getAngularVersions(angularVersion);
    core.debug(
      `Dependencies found: \n ${JSON.stringify(angularVersions, null, 2)}`
    );

    const rootPath: string = core.getInput('root-path');
    const packageJsonPath = path.join(rootPath, 'package.json');
    const angularJsonPath = path.join(rootPath, 'angular.json');
    core.debug(`Merging found dependencies with file ${packageJsonPath}`);

    const projectVersions: PackageJsonVersion = JSON.parse(
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

    core.debug('Switching to the correct Angular Builder');
    const angularJson: AngularJSON = JSON.parse(
      fs.readFileSync(angularJsonPath).toString()
    );
    const modifiedAngularJson = switchAngularBuilder(
      angularVersion,
      angularJson
    );
    fs.writeFileSync(
      angularJsonPath,
      JSON.stringify(modifiedAngularJson, null, 2)
    );
    core.debug('Correct Angular Builder selected');

    core.debug(new Date().toISOString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
