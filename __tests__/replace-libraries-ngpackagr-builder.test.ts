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
  describe('when using angular versions older than 10.1', () => {
    preAngular10_1Versions.forEach(version => {
      describe(`using the version ${version}`, () => {
        const actualLumberjackAngularJson = replaceLibrariesNgPackagrBuilder(
          version,
          lumberjackWithBothNgPackagrBuildersAngularJson
        );
        const actualRegularAngularJson = replaceLibrariesNgPackagrBuilder(
          version,
          regularAngular10_1AndUpNgPackagrBuilderAngularJson
        );

        describe('the lumberjack workspace angular.json', () => {
          test('should exactly match the snapshot', () => {
            expect(actualLumberjackAngularJson).toEqual(
              lumberjackPreAngular10_1NgPackagrBuilderAngularJson
            );
          });

          test('should change the ng-packagr library builders', () => {
            expect(
              actualLumberjackAngularJson.projects['ngworker-lumberjack']
                .architect.buildLib.builder
            ).toBe(preAngular10_1NgPackagrBuilder);
            expect(
              actualLumberjackAngularJson.projects['internal-test-util']
                .architect.build.builder
            ).toBe(preAngular10_1NgPackagrBuilder);
          });
        });

        describe('a regular angular workspace angular.json', () => {
          test('should exactly match the snapshot', () => {
            expect(actualRegularAngularJson).toEqual(
              regularPreAngular10_1NgPackagrBuilderAngularJson
            );
          });
          test('should change the ng-packagr library builders', () => {
            expect(
              actualRegularAngularJson.projects['angular-lib'].architect.build
                .builder
            ).toBe(preAngular10_1NgPackagrBuilder);
          });
        });
      });
    });
  });
  describe('when using angular versions newer or equal than 10.1', () => {
    angular10_1AndUpVersions.forEach(version => {
      describe(`using the version ${version}`, () => {
        const actualLumberjackAngularJson = replaceLibrariesNgPackagrBuilder(
          version,
          lumberjackWithBothNgPackagrBuildersAngularJson
        );
        const actualRegularAngularJson = replaceLibrariesNgPackagrBuilder(
          version,
          regularPreAngular10_1NgPackagrBuilderAngularJson
        );

        describe('the lumberjack workspace angular.json', () => {
          test('should exactly match the snapshot', () => {
            expect(actualLumberjackAngularJson).toEqual(
              lumberjack10_1AndUpNgPackagrBuilderAngularJson
            );
          });

          test('should change the ng-packagr library builders', () => {
            expect(
              actualLumberjackAngularJson.projects['ngworker-lumberjack']
                .architect.buildLib.builder
            ).toBe(angular10_1AndUpNgPackagrBuilder);
            expect(
              actualLumberjackAngularJson.projects['internal-test-util']
                .architect.build.builder
            ).toBe(angular10_1AndUpNgPackagrBuilder);
          });
        });

        describe('a regular angular workspace angular.json', () => {
          test('should exactly match the snapshot', () => {
            expect(actualRegularAngularJson).toEqual(
              regularAngular10_1AndUpNgPackagrBuilderAngularJson
            );
          });
          test('should change the ng-packagr library builders', () => {
            expect(
              actualRegularAngularJson.projects['angular-lib'].architect.build
                .builder
            ).toBe(angular10_1AndUpNgPackagrBuilder);
          });
        });
      });
    });
  });
});
