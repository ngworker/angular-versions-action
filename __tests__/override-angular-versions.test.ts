import {
  packageJsonWithV8Dependencies,
  packageJsonWithV8DevDependencies,
  packageJsonWithV8All,
  fullPackageJson,
  packageUnmatching
} from './package-json-versions';
import {overrideAngularVersions} from '../src/override-angular-versions';
import {getAngularVersions} from '../src/get-angular-versions';

describe(overrideAngularVersions.name, () => {
  describe('replaces versions existing in both sources', () => {
    test('replace ONLY angular versions in dependencies', async () => {
      const v8 = await getAngularVersions('8.0.x');
      (v8.devDependencies as any) = {};

      const actualPackageJson = overrideAngularVersions({
        projectVersions: fullPackageJson,
        angularVersions: v8
      });

      expect(actualPackageJson).toEqual(packageJsonWithV8Dependencies);
    });
    test('replace ONLY angular versions in devDependencies', async () => {
      const v8 = await getAngularVersions('8.0.x');
      (v8.dependencies as any) = {};

      const actualPackageJson = overrideAngularVersions({
        projectVersions: fullPackageJson,
        angularVersions: v8
      });

      expect(actualPackageJson).toEqual(packageJsonWithV8DevDependencies);
    });
    test('replace angular versions in devDependencies and dependencies', async () => {
      const v8 = await getAngularVersions('8.0.x');

      const actualPackageJson = overrideAngularVersions({
        projectVersions: fullPackageJson,
        angularVersions: v8
      });

      expect(actualPackageJson).toEqual(packageJsonWithV8All);
    });

    test('no override package with unmatching versions', async () => {
      const v8 = await getAngularVersions('8.0.x');

      const actualPackageJson = overrideAngularVersions({
        projectVersions: packageUnmatching as any,
        angularVersions: v8
      });

      expect(actualPackageJson).toEqual(packageUnmatching);
    });
  });
});
