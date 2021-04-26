import {angularVersionComparer} from '../src/angular-version-comparer';
import {AngularVersion} from '../src/types/angular-version';

const angularVersions: AngularVersion[] = [
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
  '10.0.x',
  '10.1.x',
  '10.2.x',
  '11.0.x',
  '11.1.x',
  '11.2.x'
];

describe('the angular version comparer', () => {
  angularVersions.forEach(version => {
    test('should return 0 when version are equal', () => {
      const actual = angularVersionComparer(version, version);

      expect(actual).toBe(0);
    });
  });

  describe('when the major versions are different', () => {
    test('should return a positive number when the first angular major version is newest than the second', () => {
      expect(angularVersionComparer('7.0.x', '6.0.x')).toBeGreaterThan(0);
      expect(angularVersionComparer('9.0.x', '7.0.x')).toBeGreaterThan(0);
      expect(angularVersionComparer('11.0.x', '9.0.x')).toBeGreaterThan(0);
    });

    test('should return a negative number when the first angular major version is older than the second', () => {
      expect(angularVersionComparer('6.0.x', '7.0.x')).toBeLessThan(0);
      expect(angularVersionComparer('7.0.x', '9.0.x')).toBeLessThan(0);
      expect(angularVersionComparer('9.0.x', '11.0.x')).toBeLessThan(0);
    });
  });

  describe('when the major versions are equal', () => {
    test('should return a positive number when the first angular minor version is newest than the second', () => {
      expect(angularVersionComparer('7.1.x', '7.0.x')).toBeGreaterThan(0);
      expect(angularVersionComparer('9.12.x', '9.0.x')).toBeGreaterThan(0);
      expect(angularVersionComparer('11.5.x', '11.0.x')).toBeGreaterThan(0);
    });

    test('should return a negative number when the first angular minor version is older than the second', () => {
      expect(angularVersionComparer('7.0.x', '7.1.x')).toBeLessThan(0);
      expect(angularVersionComparer('9.0.x', '9.12.x')).toBeLessThan(0);
      expect(angularVersionComparer('11.0.x', '11.5.x')).toBeLessThan(0);
    });
  });
});
