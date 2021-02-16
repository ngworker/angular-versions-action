import * as core from '@actions/core';
import {WorkspaceType} from './types/workspace-type';

export function ensureCorrectWorkspaceType(): WorkspaceType {
  const workspaceType: WorkspaceType | unknown = core.getInput(
    'workspace-type'
  );

  if (workspaceType !== 'angular' && workspaceType !== 'nx') {
    throw new Error(`Workspace type ${workspaceType} is not supported`);
  } else {
    return workspaceType;
  }
}
