import {AngularJson} from '../../src/types/angular-json';

export const lumberjackPreAngular10RemovedCommonJSDependencies: AngularJson = {
  projects: {
    'lumberjack-app': {
      projectType: 'application',
      architect: {
        build: {
          builder: '@angular-devkit/build-angular:browser',
          options: {
            vendorChunk: true,
            extractLicenses: false,
            buildOptimizer: false,
            sourceMap: true,
            optimization: false,
            namedChunks: true
          }
        },
        serve: {
          builder: '@angular-devkit/build-angular:dev-server'
        },
        'extract-i18n': {
          builder: '@angular-devkit/build-angular:extract-i18n'
        }
      }
    },
    'lumberjack-schematics-app': {
      projectType: 'application',
      architect: {
        build: {
          builder: '@angular-devkit/build-angular:browser',
          options: {
            vendorChunk: true,
            extractLicenses: false,
            buildOptimizer: false,
            sourceMap: true,
            optimization: false,
            namedChunks: true
          }
        },
        serve: {
          builder: '@angular-devkit/build-angular:dev-server'
        },
        'extract-i18n': {
          builder: '@angular-devkit/build-angular:extract-i18n'
        }
      }
    },
    'ngworker-lumberjack': {
      projectType: 'library',
      architect: {
        build: {
          builder: '@angular-devkit/build-ng-packagr:build',
          options: {
            tsConfig: 'libs/ngworker/lumberjack/tsconfig.lib.json',
            project: 'libs/ngworker/lumberjack/ng-package.json'
          }
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
    }
  }
};
