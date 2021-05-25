import {
  PackageJson,
  PackageJsonDependencies,
  PackageJsonDevDependencies
} from './types/package-json';

function removeNullDependencies<
  TDependencies extends PackageJsonDependencies | PackageJsonDevDependencies
>(dependencies: TDependencies): TDependencies {
  return Object.fromEntries(
    Object.entries(dependencies).filter(
      ([, maybeVersion]) => maybeVersion !== null
    )
  );
}

export function overrideAngularVersions({
  angularVersions,
  projectVersions
}: {
  angularVersions: PackageJson;
  projectVersions: PackageJson;
}): PackageJson {
  return {
    ...projectVersions,
    dependencies: removeNullDependencies({
      ...projectVersions.dependencies,
      ...angularVersions.dependencies
    }),
    devDependencies: removeNullDependencies({
      ...projectVersions.devDependencies,
      ...angularVersions.devDependencies
    })
  };
}
