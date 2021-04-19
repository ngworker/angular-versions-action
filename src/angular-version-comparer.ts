import {AngularVersion} from './types/angular-version';

export function angularVersionComparer(
  versionA: AngularVersion,
  versionB: AngularVersion
): number {
  const [majorA, minorA] = versionA.split('.');
  const [majorB, minorB] = versionB.split('.');

  const majorComparison = +majorA - +majorB;
  const minorComparison = +minorA - +minorB;

  return majorComparison === 0 ? minorComparison : majorComparison;
}
