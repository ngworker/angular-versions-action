import * as path from 'path';
import * as fs from 'fs';

export function ensurePackageJsonPath(rootFolderPath: string): string {
  const packageJsonPath = path.join(rootFolderPath, 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    throw new Error('No package.json was found in the provided root folder');
  }

  return packageJsonPath;
}
