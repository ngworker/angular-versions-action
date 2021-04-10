import {
  post10_1LibraryBuilder,
  pre10_1LibraryBuilder,
  replaceLibrariesBuildBuilder
} from '../src/replace-libraries-build-builder';
import {mixedAngularJson} from './angular-json/mixed-angular-json';
import {post10_1LibraryBuilderWorkspace} from './angular-json/post10_1-library-builder-workspace';
import {pre10_1LibraryBuilderWorkspace} from './angular-json/pre10_1-library-builder-workspace';

describe(replaceLibrariesBuildBuilder.name, () => {
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
    test(`when using the version ${version} it should replace all libraries build builder with ${pre10_1LibraryBuilder}`, () => {
      const actual = replaceLibrariesBuildBuilder(version, mixedAngularJson);

      expect(actual).toEqual(pre10_1LibraryBuilderWorkspace);
    });
  });

  ['10.1.x', '10.2.x', '11.0.x', '11.1.x', '11.2.x'].forEach(version => {
    test(`when using the version ${version} it should replace all libraries build builder with ${post10_1LibraryBuilder}`, () => {
      const actual = replaceLibrariesBuildBuilder(version, mixedAngularJson);

      expect(actual).toEqual(post10_1LibraryBuilderWorkspace);
    });
  });
});
