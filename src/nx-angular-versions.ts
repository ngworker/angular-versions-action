import {PackageJsonVersionNxWorkspace} from './types/package-json-version';

/**
 * Packages that will be added regardless of whether they are currently
 * installed.
 */
export const forcedReplacements: readonly string[] = [
  // Required by certain older versions of ng-packagr.
  'tsickle'
];

export const versionsNxWorkspace = new Map<
  string,
  PackageJsonVersionNxWorkspace
>([
  [
    '8.0.x',
    {
      dependencies: {},
      devDependencies: {}
    }
  ]
]);
