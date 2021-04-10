import {AngularJson} from '../../src/types/angular-json';

export const post10_1LibraryBuilderWorkspace: AngularJson = {
  $schema: './node_modules/@angular/cli/lib/config/schema.json',
  version: 1,
  newProjectRoot: 'apps',
  projects: {
    'lumberjack-app': {
      projectType: 'application',
      architect: {
        build: {
          builder: '@angular-devkit/build-angular:browser'
        },
        serve: {
          builder: '@angular-devkit/build-angular:dev-server'
        },
        'extract-i18n': {
          builder: '@angular-devkit/build-angular:extract-i18n'
        },
        test: {
          builder: '@angular-builders/jest:run'
        },
        lint: {
          builder: '@angular-devkit/build-angular:tslint'
        }
      }
    },
    'lumberjack-app-e2e': {
      projectType: 'application',
      architect: {
        lint: {
          builder: '@angular-devkit/build-angular:tslint'
        },
        e2e: {
          builder: '@angular-devkit/build-angular:protractor'
        }
      }
    },
    'ngworker-lumberjack': {
      projectType: 'library',
      architect: {
        build: {
          builder: '@angular-devkit/build-angular:ng-packagr'
        },
        test: {
          builder: '@angular-builders/jest:run'
        },
        lint: {
          builder: '@angular-devkit/build-angular:tslint'
        }
      }
    },
    'internal-test-util': {
      projectType: 'library',
      architect: {
        build: {
          builder: '@angular-devkit/build-angular:ng-packagr'
        },
        test: {
          builder: '@angular-builders/jest:run'
        },
        lint: {
          builder: '@angular-devkit/build-angular:tslint'
        }
      }
    },
    'internal-console-driver-test-util': {
      projectType: 'library',
      architect: {
        test: {
          builder: '@angular-builders/jest:run'
        },
        lint: {
          builder: '@angular-devkit/build-angular:tslint'
        }
      }
    },
    'lumberjack-schematics-app': {
      projectType: 'application',

      architect: {
        build: {
          builder: '@angular-devkit/build-angular:browser'
        },
        serve: {
          builder: '@angular-devkit/build-angular:dev-server'
        },
        'extract-i18n': {
          builder: '@angular-devkit/build-angular:extract-i18n'
        }
      }
    },
    'schematics-e2e': {
      projectType: 'application',

      architect: {
        e2e: {
          builder: '@angular-builders/jest:run'
        },
        lint: {
          builder: '@angular-devkit/build-angular:tslint'
        }
      }
    }
  },
  defaultProject: 'lumberjack-app'
};
