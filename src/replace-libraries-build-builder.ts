import {versions} from './angular-versions';
import {AngularJson} from './types/angular-json';

export const pre10_1LibraryBuilder = '@angular-devkit/build-ng-packagr:build';
export const post10_1LibraryBuilder =
  '@angular-devkit/build-angular:ng-packagr';

export function replaceLibrariesBuildBuilder(
  angularVersion: string,
  angularJson: AngularJson
): AngularJson {
  const modifiedAngularJson = {...angularJson};
  for (const key in angularJson.projects) {
    if (Object.prototype.hasOwnProperty.call(angularJson.projects, key)) {
      const project = angularJson.projects[key];

      if (project.projectType === 'library' && !!project.architect.build) {
        if (usingOldBuilder(angularVersion)) {
          project.architect.build.builder = pre10_1LibraryBuilder;
        } else {
          project.architect.build.builder = post10_1LibraryBuilder;
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
