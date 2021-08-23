import {removeCommonJsAllowList} from '../src/remove-commonjs-allowed-dependencies';
import {lumberjackWithMultipleAllowedCommonJSDependencies} from './angular-json/lumberjack-with-multiple-allowed-commonjs-dependencies-options';
import {lumberjackPreAngular10RemovedCommonJSDependencies} from './angular-json/lumberjack-pre-angular10-removed-allowed-commonjs-dependencies';

import {AngularVersion} from '../src/types/angular-version';

const preAngular10Versions: AngularVersion[] = [
  '6.0.x',
  '6.1.x',
  '7.0.x',
  '7.1.x',
  '7.2.x',
  '8.0.x',
  '8.1.x',
  '8.2.x',
  '9.0.x',
  '9.1.x'
];

const postAngular10Versions: AngularVersion[] = [
  '10.0.x',
  '10.1.x',
  '10.2.x',
  '11.0.x',
  '11.1.x',
  '11.2.x',
  '12.0.x'
];

describe(removeCommonJsAllowList.name, () => {
  describe('when using angular versions older than 10.0', () => {
    preAngular10Versions.forEach(version => {
      describe(`using the version ${version}`, () => {
        const actualLumberjackAngularJson = removeCommonJsAllowList(
          version,
          lumberjackWithMultipleAllowedCommonJSDependencies
        );

        describe('the lumberjack workspace angular.json', () => {
          test('should exactly match the snapshot', () => {
            expect(actualLumberjackAngularJson).toEqual(
              lumberjackPreAngular10RemovedCommonJSDependencies
            );
          });

          test('should delete the allowedCommonJsDependencies', () => {
            expect(
              actualLumberjackAngularJson.projects['lumberjack-app'].architect
                .build.options?.allowedCommonJsDependencies
            ).toBeUndefined();
            expect(
              actualLumberjackAngularJson.projects['lumberjack-schematics-app']
                .architect.build.options?.allowedCommonJsDependencies
            ).toBeUndefined();
          });
        });
      });
    });
  });
  describe('when using angular versions newer or equal than 10.0', () => {
    postAngular10Versions.forEach(version => {
      describe(`using the version ${version}`, () => {
        const actualLumberjackAngularJson = removeCommonJsAllowList(
          version,
          lumberjackWithMultipleAllowedCommonJSDependencies
        );

        describe('the lumberjack workspace angular.json', () => {
          test('should exactly match the snapshot', () => {
            expect(actualLumberjackAngularJson).toEqual(
              lumberjackWithMultipleAllowedCommonJSDependencies
            );
          });

          test('should keep the allowedCommonJsDependencies', () => {
            expect(
              actualLumberjackAngularJson.projects['lumberjack-app'].architect
                .build.options?.allowedCommonJsDependencies
            ).toBeDefined();
            expect(
              actualLumberjackAngularJson.projects['lumberjack-schematics-app']
                .architect.build.options?.allowedCommonJsDependencies
            ).toBeDefined();
          });
        });
      });
    });
  });
});
