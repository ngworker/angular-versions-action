import {
  angular10_1AndUpNgPackagrBuilder,
  preAngular10_1NgPackagrBuilder,
  replaceLibrariesNgPackagrBuilder
} from '../src/replace-libraries-ngpackagr-builder';
import {lumberjackMixedAngularJson} from './angular-json/lumberjack-mixed-angular-json';
import {lumberjack10_1AndUpNgPackagrBuilderAngularJson} from './angular-json/lumberjack-angular10_1-and-up-ngpackagr-builder-angular-json';
import {lumberjackPreAngular10_1NgPackagrBuilderAngularJson} from './angular-json/lumberjack-pre-angular10_1-ngpackagr-builder-angular-json';
import {regularPreAngular10_1NgPackagrBuilderAngularJson} from './angular-json/regular-pre-angular10_1-ngpackagr-builder-angular-json';
import {regularAngular10_1AndUpNgPackagrBuilderAngularJson} from './angular-json/regular-angular10_1-and-up-ngpackagr-builder-angular-json';
import {AngularVersion} from '../src/types/angular-version';

const preAngular10_1Versions: AngularVersion[] = [
  '6.0.x',
  '6.1.x',
  '7.0.x',
  '7.1.x',
  '7.2.x',
  '8.0.x',
  '8.1.x',
  '8.2.x',
  '9.0.x',
  '9.1.x',
  '10.0.x'
];

const angular10_1AndUpVersions: AngularVersion[] = [
  '10.1.x',
  '10.2.x',
  '11.0.x',
  '11.1.x',
  '11.2.x'
];

describe(replaceLibrariesNgPackagrBuilder.name, () => {
  preAngular10_1Versions.forEach(version => {
    test(`when using the version ${version} it should replace all libraries ng-packagr builder with ${preAngular10_1NgPackagrBuilder}`, () => {
      const actualLumberjackAngularJson = replaceLibrariesNgPackagrBuilder(
        version,
        lumberjackMixedAngularJson
      );
      const actualRegularAngularJson = replaceLibrariesNgPackagrBuilder(
        version,
        regularAngular10_1AndUpNgPackagrBuilderAngularJson
      );

      expect(actualLumberjackAngularJson).toEqual(
        lumberjackPreAngular10_1NgPackagrBuilderAngularJson
      );
      expect(actualRegularAngularJson).toEqual(
        regularPreAngular10_1NgPackagrBuilderAngularJson
      );
    });
  });

  angular10_1AndUpVersions.forEach(version => {
    test(`when using the version ${version} it should replace all libraries ng-packagr builder with ${angular10_1AndUpNgPackagrBuilder}`, () => {
      const actualLumberjackAngularJson = replaceLibrariesNgPackagrBuilder(
        version,
        lumberjackMixedAngularJson
      );
      const actualRegularAngularJson = replaceLibrariesNgPackagrBuilder(
        version,
        regularPreAngular10_1NgPackagrBuilderAngularJson
      );

      expect(actualLumberjackAngularJson).toEqual(
        lumberjack10_1AndUpNgPackagrBuilderAngularJson
      );
      expect(actualRegularAngularJson).toEqual(
        regularAngular10_1AndUpNgPackagrBuilderAngularJson
      );
    });
  });
});
