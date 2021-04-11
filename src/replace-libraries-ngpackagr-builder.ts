import {versions} from './angular-versions';
import {AngularJson} from './types/angular-json';
import {ArchitectConfiguration} from './types/architect-configuration';

export const pre10_1LibraryBuilder = '@angular-devkit/build-ng-packagr:build';
export const since10_1LibraryBuilder =
  '@angular-devkit/build-angular:ng-packagr';

/**
 * Replace all libraries builder using ng-packagr with the correct builder given the Angular version
 *
 */
export function replaceLibrariesNgPackagerBuilder(
  angularVersion: string,
  angularJson: AngularJson
): AngularJson {
  const modifiedAngularJson = {...angularJson};

  const targetsWithNgPackagerBuilder = getTargetsWithNgPackagerBuilder(
    angularJson
  );

  for (const target of targetsWithNgPackagerBuilder) {
    target.builder = getCorrectNgPackgrBuilder(angularVersion);
  }

  return modifiedAngularJson;
}

/**
 * Return a list with all architect/target builders from all libraries in the workspace using a ng-packagr builder.
 *
 */
function getTargetsWithNgPackagerBuilder(
  angularJson: AngularJson
): ArchitectConfiguration[] {
  return Object.values(angularJson.projects).reduce((targets, library) => {
    // assumes that at most a library has one architect/target with ngpackagr builder
    const targetWithNgPackagrBuilder = Object.values(library.architect).find(
      target =>
        target.builder === pre10_1LibraryBuilder ||
        target.builder === since10_1LibraryBuilder
    );

    if (targetWithNgPackagrBuilder) {
      targets.push(targetWithNgPackagrBuilder);
    }

    return targets;
  }, [] as ArchitectConfiguration[]);
}

/**
 * Returns the correct ng-packagr builder for the specified Angular version.
 *
 */
function getCorrectNgPackgrBuilder(angularVersion: string): string {
  return versions.get(angularVersion)?.devDependencies[
    '@angular-devkit/build-ng-packagr'
  ]
    ? pre10_1LibraryBuilder
    : since10_1LibraryBuilder;
}
