import * as fs from 'fs';
import * as path from 'path';

import {WorkspaceType} from './types/workspace-type';

export function getCorrectWorkspaceType(rootFolderPath: string): WorkspaceType {
  const nxJsonPath = path.join(rootFolderPath, 'nx.json');
  if (fs.existsSync(nxJsonPath)) {
    return 'nx';
  } else {
    return 'angular';
  }
}
