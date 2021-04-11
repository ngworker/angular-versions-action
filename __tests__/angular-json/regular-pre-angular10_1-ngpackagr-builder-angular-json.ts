import {AngularJson} from '../../src/types/angular-json';

export const regularPreAngular10_1NgPackagrBuilderAngularJson: AngularJson = {
  projects: {
    'angular-lib': {
      projectType: 'library',
      architect: {
        build: {
          builder: '@angular-devkit/build-ng-packagr:build'
        },
        test: {
          builder: '@angular-devkit/build-angular:karma'
        },
        lint: {
          builder: '@angular-devkit/build-angular:tslint'
        }
      }
    },
    app: {
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
          builder: '@angular-devkit/build-angular:karma'
        },
        lint: {
          builder: '@angular-devkit/build-angular:tslint'
        },
        e2e: {
          builder: '@angular-devkit/build-angular:protractor'
        }
      }
    }
  }
};
