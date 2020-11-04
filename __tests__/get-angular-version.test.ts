import {getAngularVersions} from '../src/get-angular-versions';
import {versions} from '../src/angular-versions';

describe(getAngularVersions.name, () => {
  versions.forEach((expectedVersion, key) => {
    test('returns the right angular versions for a given key', async () => {
      const actualVersion = await getAngularVersions(key);

      expect(actualVersion).toEqual(expectedVersion);
    });
  });

  test('returns new instances of angular version for each call', async () => {
    const firstVersion = await getAngularVersions('8.0.x');
    const secondVersion = await getAngularVersions('8.0.x');

    expect(firstVersion).toEqual(secondVersion);
    expect(firstVersion).not.toBe(secondVersion);
  });

  test('throws error when the version is not supported', async () => {
    try {
      await getAngularVersions('3.0.0');
    } catch (error) {
      expect(error.message).toBe('Angular version 3.0.0 is not supported');
    }
  });
});
