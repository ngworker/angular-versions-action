import {
  angular10_1AndUpNgPackagrBuilder,
  preAngular10_1NgPackagrBuilder,
  replaceLibrariesNgPackagrBuilder
} from '../src/replace-libraries-ngpackagr-builder';
import {lumberjackWithBothNgPackagrBuildersAngularJson} from './angular-json/lumberjack-with-both-ngpackagr-builders-angular-json';
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
        lumberjackWithBothNgPackagrBuildersAngularJson
      );
      const actualRegularAngularJson = replaceLibrariesNgPackagrBuilder(
        version,
        regularAngular10_1AndUpNgPackagrBuilderAngularJson
      );

      // lumberjack angular.json
      expect(actualLumberjackAngularJson).toEqual(
        lumberjackPreAngular10_1NgPackagrBuilderAngularJson
      );
      expect(
        actualLumberjackAngularJson.projects['ngworker-lumberjack'].architect
          .buildLib.builder
      ).toBe(preAngular10_1NgPackagrBuilder);
      expect(
        actualLumberjackAngularJson.projects['internal-test-util'].architect
          .build.builder
      ).toBe(preAngular10_1NgPackagrBuilder);

      //regular application angular.json
      expect(actualRegularAngularJson).toEqual(
        regularPreAngular10_1NgPackagrBuilderAngularJson
      );
      expect(
        actualRegularAngularJson.projects['angular-lib'].architect.build.builder
      ).toBe(preAngular10_1NgPackagrBuilder);
    });
  });

  angular10_1AndUpVersions.forEach(version => {
    test(`when using the version ${version} it should replace all libraries ng-packagr builder with ${angular10_1AndUpNgPackagrBuilder}`, () => {
      const actualLumberjackAngularJson = replaceLibrariesNgPackagrBuilder(
        version,
        lumberjackWithBothNgPackagrBuildersAngularJson
      );
      const actualRegularAngularJson = replaceLibrariesNgPackagrBuilder(
        version,
        regularPreAngular10_1NgPackagrBuilderAngularJson
      );

      // lumberjack angular.json
      expect(actualLumberjackAngularJson).toEqual(
        lumberjack10_1AndUpNgPackagrBuilderAngularJson
      );
      expect(
        actualLumberjackAngularJson.projects['ngworker-lumberjack'].architect
          .buildLib.builder
      ).toBe(angular10_1AndUpNgPackagrBuilder);
      expect(
        actualLumberjackAngularJson.projects['internal-test-util'].architect
          .build.builder
      ).toBe(angular10_1AndUpNgPackagrBuilder);

      //regular application angular.json
      expect(actualRegularAngularJson).toEqual(
        regularAngular10_1AndUpNgPackagrBuilderAngularJson
      );
      expect(
        actualRegularAngularJson.projects['angular-lib'].architect.build.builder
      ).toBe(angular10_1AndUpNgPackagrBuilder);
    });
  });
});
