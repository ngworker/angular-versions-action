import * as fs from 'fs';
import {versions} from './angular-versions';
import {AngularJSON} from './types/angular-json';

const oldBuilder = '@angular-devkit/build-ng-packagr:build';
const newBuilder = '@angular-devkit/build-angular:ng-packagr';

export function switchAngularBuilder(
  angularVersion: string,
  angularJsonPath: string
): void {
  const angularJson: AngularJSON = JSON.parse(
    fs.readFileSync(angularJsonPath).toString()
  );

  for (const key in angularJson.projects) {
    if (Object.prototype.hasOwnProperty.call(angularJson.projects, key)) {
      const project = angularJson.projects[key];

      if (project.projectType === 'library') {
        if (usingOldBuilder(angularVersion)) {
          project.architect.build.builder = oldBuilder;
        } else {
          project.architect.build.builder = newBuilder;
        }
      }
    }
  }
}

function usingOldBuilder(angularVersion: string): boolean {
  return !!versions.get(angularVersion)?.devDependencies[
    '@angular-devkit/build-ng-packagr'
  ];
}
