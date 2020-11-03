import {
  packageJsonWithV8Dependencies,
  fullPackageJson
} from './package-json-versions';
import {overrideAngularVersions} from '../src/override-angular-versions';

import {versions} from '../src/angular-versions';
import {PackageJsonVersion} from '../src/types/package-json-version';

describe(overrideAngularVersions.name, () => {
  describe('replaces only versions existing in both sources', () => {
    test('replace ONLY angular version in dependencies', () => {
      const v8 = versions.get('8.0.x') as PackageJsonVersion;
      (v8.devDependencies as any) = {};

      const actualPackageJson = overrideAngularVersions({
        projectVersions: fullPackageJson,
        angularVersions: v8
      });

      expect(actualPackageJson).toEqual(packageJsonWithV8Dependencies);
    });
  });
});
