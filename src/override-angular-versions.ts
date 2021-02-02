import {intersection} from 'lodash-es';
import fromEntries from 'object.fromentries';
import {forcedReplacements} from './angular-versions';

import {PackageJsonVersion} from './types/package-json-version';

export function overrideAngularVersions({
  angularVersions,
  projectVersions
}: {
  angularVersions: PackageJsonVersion;
  projectVersions: PackageJsonVersion;
}): PackageJsonVersion {
  const dependenciesReplacements = fromEntries<string | undefined>(
    intersection(
      Object.keys(projectVersions.dependencies),
      Object.keys(angularVersions.dependencies)
    ).map(dependency => [
      dependency,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (angularVersions.dependencies as any)[dependency]
    ])
  );
  const forcedDependencies = fromEntries<string | undefined>(
    intersection(
      forcedReplacements,
      Object.keys(angularVersions.dependencies)
    ).map(dependency => [
      dependency,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (angularVersions.dependencies as any)[dependency]
    ])
  );
  const devDependenciesReplacements = fromEntries<string | undefined>(
    intersection(
      Object.keys(projectVersions.devDependencies),
      Object.keys(angularVersions.devDependencies)
    ).map(devDependency => [
      devDependency,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (angularVersions.devDependencies as any)[devDependency]
    ])
  );
  const forcedDevDependencies = fromEntries<string | undefined>(
    intersection(
      forcedReplacements,
      Object.keys(angularVersions.devDependencies)
    ).map(dependency => [
      dependency,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (angularVersions.devDependencies as any)[dependency]
    ])
  );

  return {
    ...projectVersions,
    dependencies: {
      ...projectVersions.dependencies,
      ...dependenciesReplacements,
      ...forcedDependencies
    },
    devDependencies: {
      ...projectVersions.devDependencies,
      ...devDependenciesReplacements,
      ...forcedDevDependencies
    }
  };
}
