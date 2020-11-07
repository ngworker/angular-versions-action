import {
  packageJsonWithV8Dependencies,
  packageJsonWithV8DevDependencies,
  packageJsonWithV8All,
  fullPackageJson,
  packageUnmatching,
  packageJsonWithoutNgPackagr,
  packageJsonWithV8AllWithoutNgPackagr
} from './package-json-versions';
import {overrideAngularVersions} from '../src/override-angular-versions';
import {getAngularVersions} from '../src/get-angular-versions';

describe(overrideAngularVersions.name, () => {
  describe('replaces versions existing in both sources', () => {
    test('replace ONLY Angular versions in dependencies', () => {
      const v8 = getAngularVersions('8.0.x');
      (v8.devDependencies as any) = {};

      const actualPackageJson = overrideAngularVersions({
        projectVersions: fullPackageJson,
        angularVersions: v8
      });

      expect(actualPackageJson).toEqual(packageJsonWithV8Dependencies);
    });

    test('replace ONLY Angular versions in devDependencies', () => {
      const v8 = getAngularVersions('8.0.x');
      (v8.dependencies as any) = {};

      const actualPackageJson = overrideAngularVersions({
        projectVersions: fullPackageJson,
        angularVersions: v8
      });

      expect(actualPackageJson).toEqual(packageJsonWithV8DevDependencies);
    });

    test('replace Angular versions in devDependencies and dependencies', () => {
      const v8 = getAngularVersions('8.0.x');

      const actualPackageJson = overrideAngularVersions({
        projectVersions: fullPackageJson,
        angularVersions: v8
      });

      expect(actualPackageJson).toEqual(packageJsonWithV8All);
    });

    test('no override package with unmatching versions', () => {
      const v8 = getAngularVersions('8.0.x');

      const actualPackageJson = overrideAngularVersions({
        projectVersions: packageUnmatching as any,
        angularVersions: v8
      });

      expect(actualPackageJson).toEqual(packageUnmatching);
    });

    test('no add ng-packagr dependency when it is not present in the package', () => {
      const v8 = getAngularVersions('8.0.x');

      const actualPackageJson = overrideAngularVersions({
        projectVersions: packageJsonWithoutNgPackagr as any,
        angularVersions: v8
      });

      expect(actualPackageJson).toEqual(packageJsonWithV8AllWithoutNgPackagr);
    });
  });
});
