import {getAngularVersions} from '../src/get-angular-versions';
import {versions} from '../src/angular-versions';

describe(getAngularVersions.name, () => {
  versions.forEach((expectedVersion, key) => {
    test('returns the right Angular versions for a given key', () => {
      const actualVersion = getAngularVersions(key);

      expect(actualVersion).toEqual(expectedVersion);
    });
  });

  test('returns new instances of Angular version for each call', () => {
    const firstVersion = getAngularVersions('8.0.x');
    const secondVersion = getAngularVersions('8.0.x');

    expect(firstVersion).toEqual(secondVersion);
    expect(firstVersion).not.toBe(secondVersion);
  });

  test('throws error when the version is not supported', () => {
    try {
      getAngularVersions('3.0.x');
    } catch (error) {
      expect(error.message).toBe('Angular version 3.0.x is not supported');
    }
  });
});
