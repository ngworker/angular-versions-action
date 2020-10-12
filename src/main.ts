import * as core from '@actions/core';
import {getAngularVersion} from './get-angular-versions';
import {overrideAngularVersions} from './override-angular-versions';

async function run(): Promise<void> {
  try {
    const angularVersion: string = core.getInput('angular_version');
    core.debug(`Finding dependencies for angular version ${angularVersion}`);

    const versions = await getAngularVersion(angularVersion);
    core.debug(`Depedencies found: \nr ${JSON.stringify(versions, null, 2)}`);

    const filePath: string = core.getInput('file_path');
    core.debug(`merging found dependencies with file ${filePath}`);

    await overrideAngularVersions(versions, filePath);

    core.debug(new Date().toTimeString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
