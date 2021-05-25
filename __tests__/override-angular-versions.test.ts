import {fullWithTsickleJson} from './package-json-versions/full-with-tsickle';
import {
  packageJsonWithV11_1Dependencies,
  packageJsonWithV11_1DevDependencies,
  packageJsonWithV11_1All,
  packageJsonWithV11_1AllWithUnmatching,
  fullPackageJson,
  packageUnmatching,
  packageJsonWithoutNgPackagr,
  packageJsonV8WithForceDependencies
} from './package-json-versions';
import {overrideAngularVersions} from '../src/override-angular-versions';
import {getAngularVersions} from '../src/get-angular-versions';

describe(overrideAngularVersions.name, () => {
  describe('replaces versions existing in both sources', () => {
    test('replace ONLY Angular versions in dependencies', () => {
      const v11_1 = getAngularVersions('11.1.x');
      (v11_1.devDependencies as any) = {};

      const actualPackageJson = overrideAngularVersions({
        projectVersions: fullPackageJson as any,
        angularVersions: v11_1
      });

      expect(actualPackageJson).toEqual(packageJsonWithV11_1Dependencies);
    });

    test('replace ONLY Angular versions in devDependencies', () => {
      const v11_1 = getAngularVersions('11.1.x');
      (v11_1.dependencies as any) = {};

      const actualPackageJson = overrideAngularVersions({
        projectVersions: fullPackageJson as any,
        angularVersions: v11_1
      });

      expect(actualPackageJson).toEqual(packageJsonWithV11_1DevDependencies);
    });

    test('replace Angular versions in devDependencies and dependencies', () => {
      const v11_1 = getAngularVersions('11.1.x');

      const actualPackageJson = overrideAngularVersions({
        projectVersions: fullPackageJson as any,
        angularVersions: v11_1
      });

      expect(actualPackageJson).toEqual(packageJsonWithV11_1All);
    });

    test('no override package with unmatching versions', () => {
      const v11_1 = getAngularVersions('11.1.x');

      const actualPackageJson = overrideAngularVersions({
        projectVersions: packageUnmatching as any,
        angularVersions: v11_1
      });

      expect(actualPackageJson).toEqual(packageJsonWithV11_1AllWithUnmatching);
    });

    test('add ng-packagr dependency when it is not present in the package', () => {
      const v11_1 = getAngularVersions('11.1.x');

      const actualPackageJson = overrideAngularVersions({
        projectVersions: packageJsonWithoutNgPackagr as any,
        angularVersions: v11_1
      });

      expect(actualPackageJson).toEqual(packageJsonWithV11_1All);
    });

    test('add forced dependencies when not present in the package', () => {
      const v8 = getAngularVersions('8.0.x');

      const actualPackageJson = overrideAngularVersions({
        projectVersions: fullPackageJson as any,
        angularVersions: v8
      });

      expect(actualPackageJson).toEqual(packageJsonV8WithForceDependencies);
    });

    test('replace forced dependencies when present in the package', () => {
      const v8 = getAngularVersions('8.0.x');

      const actualPackageJson = overrideAngularVersions({
        projectVersions: fullWithTsickleJson as any,
        angularVersions: v8
      });

      expect(actualPackageJson).toEqual(packageJsonV8WithForceDependencies);
    });
  });
});
