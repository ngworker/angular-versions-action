import {
  since10_1LibraryBuilder,
  pre10_1LibraryBuilder,
  replaceLibrariesNgPackagerBuilder
} from '../src/replace-libraries-ngpackagr-builder';
import {lumberjackMixedAngularJson} from './angular-json/lumberjack-mixed-angular-json';
import {lumberjack10_1AndUpNgPackagrBuilderAngularJson} from './angular-json/lumberjack-angular10_1-and-up-ngpackagr-builder-angular-json';
import {lumberjackPreAngular10_1NgPackagrBuilderAngularJson} from './angular-json/lumberjack-pre-angular10_1-ngpackagr-builder-angular-json';
import {regularAngularJson} from './angular-json/regular-angular-json';
import {regularPreAngular10_1NgPackagrBuilderAngularJson} from './angular-json/regular-pre-angular10_1-ngpackagr-builder-angular-json';
import {regularAngular10_1AndUpNgPackagrBuilderAngularJson} from './angular-json/regular-angular10_1-and-up-ngpackagr-builder-angular-json';

describe(replaceLibrariesNgPackagerBuilder.name, () => {
  [
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
  ].forEach(version => {
    test(`when using the version ${version} it should replace all libraries ng-packagr builder with ${pre10_1LibraryBuilder}`, () => {
      const actualLumberjackAngularJson = replaceLibrariesNgPackagerBuilder(
        version,
        lumberjackMixedAngularJson
      );
      const actualRegularAngularJson = replaceLibrariesNgPackagerBuilder(
        version,
        regularAngularJson
      );

      expect(actualLumberjackAngularJson).toEqual(
        lumberjackPreAngular10_1NgPackagrBuilderAngularJson
      );
      expect(actualRegularAngularJson).toEqual(
        regularPreAngular10_1NgPackagrBuilderAngularJson
      );
    });
  });

  ['10.1.x', '10.2.x', '11.0.x', '11.1.x', '11.2.x'].forEach(version => {
    test(`when using the version ${version} it should replace all libraries ng-packagr builder with ${since10_1LibraryBuilder}`, () => {
      const actualLumberjackAngularJson = replaceLibrariesNgPackagerBuilder(
        version,
        lumberjackMixedAngularJson
      );
      const actualRegularAngularJson = replaceLibrariesNgPackagerBuilder(
        version,
        regularAngularJson
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
