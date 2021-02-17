import * as core from '@actions/core';
import * as fs from 'fs';

import {getCorrectWorkspaceType} from './get-correct-workspace-type';
import {getAngularVersions} from './get-angular-versions';
import {overrideAngularVersions} from './override-angular-versions';
import {PackageJsonVersion} from './types/package-json-version';
import {ensurePackageJsonPath} from './ensure-package-json-path';

function run(): void {
  try {
    const angularVersion: string = core.getInput('angular-version');
    const rootFolderPath: string = core.getInput('root-folder-path');
    const workspaceType = getCorrectWorkspaceType(rootFolderPath);
    core.debug(
      `Finding dependencies for Angular version ${angularVersion} in a ${workspaceType} workspace`
    );

    const angularVersions = getAngularVersions(angularVersion, workspaceType);
    core.debug(
      `Dependencies found: \n ${JSON.stringify(angularVersions, null, 2)}`
    );

    const filePath = ensurePackageJsonPath(rootFolderPath);
    core.debug(`Merging found dependencies with file ${filePath}`);

    const projectVersions: PackageJsonVersion = JSON.parse(
      fs.readFileSync(filePath).toString()
    );
    const mergedVersions = overrideAngularVersions({
      angularVersions,
      projectVersions
    });
    fs.writeFileSync(filePath, JSON.stringify(mergedVersions, null, 2));

    core.debug(
      `Dependencies merged in package.json: \n ${JSON.stringify(
        mergedVersions,
        null,
        2
      )}`
    );

    core.debug(new Date().toISOString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
