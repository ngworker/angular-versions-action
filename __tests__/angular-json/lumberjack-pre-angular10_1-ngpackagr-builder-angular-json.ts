import {AngularJson} from '../../src/types/angular-json';

export const lumberjackPreAngular10_1NgPackagrBuilderAngularJson: AngularJson = {
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
        }
      }
    },
    'ngworker-lumberjack': {
      projectType: 'library',
      architect: {
        buildLib: {
          builder: '@angular-devkit/build-ng-packagr:build'
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
          builder: '@angular-devkit/build-ng-packagr:build'
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
