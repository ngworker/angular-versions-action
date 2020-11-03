import {getAngularVersions} from '../src/get-angular-versions';
import {versions} from '../src/angular-versions';

describe(getAngularVersions.name, () => {
  versions.forEach((expectedVersion, key) => {
    test('returns the right angular versions for a given key', async () => {
      const actualVersion = await getAngularVersions(key);

      expect(actualVersion).toEqual(expectedVersion);
    });
  });

  test('throws error when the version is not supported', async () => {
    try {
      await getAngularVersions('12.0.0');
    } catch (error) {
      expect(error.message).toBe('Angular version 12.0.0 is not supported');
    }
  });
});
