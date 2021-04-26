import {AngularVersion} from './types/angular-version';

/**
 *
 * Compares two angular versions, A and B. Based on their minor and major versions.
 *
 *
 * @export
 * @param {AngularVersion} versionA
 * @param {AngularVersion} versionB
 * @return {number}  > 0 if A is newer, 0 if they are the same version, < 0 if A is older
 */
export function angularVersionComparer(
  versionA: AngularVersion,
  versionB: AngularVersion
): number {
  // Gets the major and minor versions
  const [majorA, minorA] = versionA.split('.');
  const [majorB, minorB] = versionB.split('.');

  // Obtains the major version difference between versions A and B
  const majorDifference = Number.parseInt(majorA) - Number.parseInt(majorB, 10);
  // Obtains the minor version difference between versions A and B
  const minorDifference = Number.parseInt(minorA) - Number.parseInt(minorB, 10);

  // If the major versions are different use the major version difference to compare, if they are equal use the minor version difference
  return majorDifference === 0 ? minorDifference : majorDifference;
}
