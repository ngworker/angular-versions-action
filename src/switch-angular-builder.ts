import {versions} from './angular-versions';
import {AngularJSON} from './types/angular-json';

const oldBuilder = '@angular-devkit/build-ng-packagr:build';
const newBuilder = '@angular-devkit/build-angular:ng-packagr';

export function switchAngularBuilder(
  angularVersion: string,
  angularJson: AngularJSON
): AngularJSON {
  const modifiedAngularJson = {...angularJson};
  for (const key in angularJson.projects) {
    if (Object.prototype.hasOwnProperty.call(angularJson.projects, key)) {
      const project = angularJson.projects[key];

      if (project.projectType === 'library' && !!project.architect.build) {
        if (usingOldBuilder(angularVersion)) {
          project.architect.build.builder = oldBuilder;
        } else {
          project.architect.build.builder = newBuilder;
        }
      }
    }
  }

  return modifiedAngularJson;
}

function usingOldBuilder(angularVersion: string): boolean {
  return !!versions.get(angularVersion)?.devDependencies[
    '@angular-devkit/build-ng-packagr'
  ];
}
