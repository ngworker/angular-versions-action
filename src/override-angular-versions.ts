import {intersection} from 'lodash-es';
import fromEntries from 'object.fromentries';

import {PackageJsonVersion} from './types/package-json-version';

export function overrideAngularVersions({
  angularVersions,
  projectVersions
}: {
  angularVersions: PackageJsonVersion;
  projectVersions: PackageJsonVersion;
}): PackageJsonVersion {
  const dependenciesReplacements = fromEntries<string>(
    intersection(
      Object.keys(projectVersions.dependencies),
      Object.keys(angularVersions.dependencies)
    ).map(dependency => [dependency, angularVersions.dependencies[dependency]])
  );
  const devDependenciesReplacements = fromEntries<string>(
    intersection(
      Object.keys(projectVersions.devDependencies),
      Object.keys(angularVersions.devDependencies)
    ).map(devDependency => [
      devDependency,
      angularVersions.devDependencies[devDependency]
    ])
  );

  return {
    ...projectVersions,
    dependencies: {
      ...projectVersions.dependencies,
      ...dependenciesReplacements
    },
    devDependencies: {
      ...projectVersions.devDependencies,
      ...devDependenciesReplacements
    }
  };
}
