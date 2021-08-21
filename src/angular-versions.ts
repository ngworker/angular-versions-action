import {AngularVersion} from './types/angular-version';
import {PackageJson} from './types/package-json';

export const versions = new Map<AngularVersion, PackageJson>([
  [
    '6.0.x',
    {
      dependencies: {
        '@angular/animations': '~6.0.9',
        '@angular/cdk': '~6.0.2',
        '@angular/common': '~6.0.9',
        '@angular/compiler': '~6.0.9',
        '@angular/core': '~6.0.9',
        '@angular/elements': '~6.0.9',
        '@angular/forms': '~6.0.9',
        '@angular/google-maps': null,
        '@angular/material': '~6.0.2',
        '@angular/platform-browser': '~6.0.9',
        '@angular/platform-browser-dynamic': '~6.0.9',
        '@angular/router': '~6.0.9',
        '@angular/youtube-player': null,
        rxjs: '~6.0.0',
        tslib: '^1.7.1',
        'zone.js': '~0.8.26'
      },
      devDependencies: {
        '@angular-builders/jest': '~6.0.0',
        '@angular-devkit/build-angular': '~0.6.8',
        '@angular-devkit/build-ng-packagr': '~0.6.8',
        '@angular-devkit/schematics-cli': '~0.6.8',
        '@angular/cli': '~6.0.8',
        '@angular/compiler-cli': '~6.0.9',
        '@types/node': '~8.9.4',
        codelyzer: '~4.2.1',
        'ng-packagr': '^3.0.0-rc.2',
        'ts-node': '~5.0.1',
        tsickle: '>=0.25.5',
        tslint: '~5.9.1',
        typescript: '~2.7.2'
      }
    }
  ],
  [
    '6.1.x',
    {
      dependencies: {
        '@angular/animations': '~6.1.10',
        '@angular/cdk': '~6.4.7',
        '@angular/common': '~6.1.10',
        '@angular/compiler': '~6.1.10',
        '@angular/core': '~6.1.10',
        '@angular/elements': '~6.1.10',
        '@angular/forms': '~6.1.10',
        '@angular/google-maps': null,
        '@angular/material': '~6.4.7',
        '@angular/platform-browser': '~6.1.10',
        '@angular/platform-browser-dynamic': '~6.1.10',
        '@angular/router': '~6.1.10',
        '@angular/youtube-player': null,
        rxjs: '~6.2.0',
        tslib: '^1.9.0',
        'zone.js': '~0.8.26'
      },
      devDependencies: {
        '@angular-builders/jest': '~6.0.0',
        '@angular-devkit/build-angular': '~0.8.9',
        '@angular-devkit/build-ng-packagr': '~0.8.9',
        '@angular-devkit/schematics-cli': '~0.8.9',
        '@angular/cli': '~6.2.9',
        '@angular/compiler-cli': '~6.1.10',
        '@types/node': '~8.9.4',
        codelyzer: '~4.3.0',
        'ng-packagr': '^4.1.0',
        'ts-node': '~7.0.0',
        tsickle: '>=0.29.0',
        tslint: '~5.11.0',
        typescript: '~2.9.2'
      }
    }
  ],
  [
    '7.0.x',
    {
      dependencies: {
        '@angular/animations': '~7.0.4',
        '@angular/cdk': '~7.0.4',
        '@angular/common': '~7.0.4',
        '@angular/compiler': '~7.0.4',
        '@angular/core': '~7.0.4',
        '@angular/elements': '~7.0.4',
        '@angular/forms': '~7.0.4',
        '@angular/google-maps': null,
        '@angular/material': '~7.0.4',
        '@angular/platform-browser': '~7.0.4',
        '@angular/platform-browser-dynamic': '~7.0.4',
        '@angular/router': '~7.0.4',
        '@angular/youtube-player': null,
        rxjs: '~6.3.3',
        tslib: '^1.9.0',
        'zone.js': '~0.8.26'
      },
      devDependencies: {
        '@angular-builders/jest': '~7.4.2',
        '@angular-devkit/build-angular': '~0.10.7',
        '@angular-devkit/build-ng-packagr': '~0.10.7',
        '@angular-devkit/schematics-cli': '~0.10.7',
        '@angular/cli': '~7.0.7',
        '@angular/compiler-cli': '~7.0.4',
        '@types/node': '~8.9.4',
        codelyzer: '~4.5.0',
        'ng-packagr': '^4.2.0',
        'ts-node': '~7.0.0',
        tsickle: '>=0.29.0',
        tslint: '~5.11.0',
        typescript: '~3.1.6'
      }
    }
  ],
  [
    '7.1.x',
    {
      dependencies: {
        '@angular/animations': '~7.1.4',
        '@angular/cdk': '~7.1.1',
        '@angular/common': '~7.1.4',
        '@angular/compiler': '~7.1.4',
        '@angular/core': '~7.1.4',
        '@angular/elements': '~7.1.4',
        '@angular/forms': '~7.1.4',
        '@angular/google-maps': null,
        '@angular/material': '~7.1.1',
        '@angular/platform-browser': '~7.1.4',
        '@angular/platform-browser-dynamic': '~7.1.4',
        '@angular/router': '~7.1.4',
        '@angular/youtube-player': null,
        rxjs: '~6.3.3',
        tslib: '^1.9.0',
        'zone.js': '~0.8.26'
      },
      devDependencies: {
        '@angular-builders/jest': '~7.4.2',
        '@angular-devkit/build-angular': '~0.11.4',
        '@angular-devkit/build-ng-packagr': '~0.11.4',
        '@angular-devkit/schematics-cli': '~0.11.4',
        '@angular/cli': '~7.1.4',
        '@angular/compiler-cli': '~7.1.4',
        '@types/node': '~8.9.4',
        codelyzer: '~4.5.0',
        'ng-packagr': '^4.2.0',
        'ts-node': '~7.0.0',
        tsickle: '>=0.29.0',
        tslint: '~5.11.0',
        typescript: '~3.1.6'
      }
    }
  ],
  [
    '7.2.x',
    {
      dependencies: {
        '@angular/animations': '~7.2.16',
        '@angular/cdk': '~7.2.2',
        '@angular/common': '~7.2.16',
        '@angular/compiler': '~7.2.16',
        '@angular/core': '~7.2.16',
        '@angular/elements': '~7.2.16',
        '@angular/forms': '~7.2.16',
        '@angular/google-maps': null,
        '@angular/material': '~7.2.2',
        '@angular/platform-browser': '~7.2.16',
        '@angular/platform-browser-dynamic': '~7.2.16',
        '@angular/router': '~7.2.16',
        '@angular/youtube-player': null,
        rxjs: '~6.3.3',
        tslib: '^1.9.0',
        'zone.js': '~0.8.26'
      },
      devDependencies: {
        '@angular-builders/jest': '~7.4.2',
        '@angular-devkit/build-angular': '~0.13.10',
        '@angular-devkit/build-ng-packagr': '~0.13.10',
        '@angular-devkit/schematics-cli': '~0.13.10',
        '@angular/cli': '~7.3.10',
        '@angular/compiler-cli': '~7.2.16',
        '@types/node': '~8.9.4',
        codelyzer: '~4.5.0',
        'ng-packagr': '^4.2.0',
        'ts-node': '~7.0.0',
        tsickle: '>=0.34.0',
        tslint: '~5.11.0',
        typescript: '~3.2.2'
      }
    }
  ],
  [
    '8.0.x',
    {
      dependencies: {
        '@angular/animations': '~8.0.3',
        '@angular/cdk': '~8.0.2',
        '@angular/common': '~8.0.3',
        '@angular/compiler': '~8.0.3',
        '@angular/core': '~8.0.3',
        '@angular/elements': '~8.0.3',
        '@angular/forms': '~8.0.3',
        '@angular/google-maps': null,
        '@angular/material': '~8.0.2',
        '@angular/platform-browser': '~8.0.3',
        '@angular/platform-browser-dynamic': '~8.0.3',
        '@angular/router': '~8.0.3',
        '@angular/youtube-player': null,
        rxjs: '~6.4.0',
        tslib: '^1.9.0',
        'zone.js': '~0.9.1'
      },
      devDependencies: {
        '@angular-builders/jest': '~8.3.2',
        '@angular-devkit/build-angular': '~0.800.6',
        '@angular-devkit/build-ng-packagr': '~0.800.6',
        '@angular-devkit/schematics-cli': '~0.800.6',
        '@angular/cli': '~8.0.6',
        '@angular/compiler-cli': '~8.0.3',
        '@types/node': '~8.9.4',
        codelyzer: '^5.0.0',
        'ng-packagr': '^5.1.0',
        'ts-node': '~7.0.0',
        tsickle: '~0.35.0',
        tslint: '~5.15.0',
        typescript: '~3.4.3'
      }
    }
  ],
  [
    '8.1.x',
    {
      dependencies: {
        '@angular/animations': '~8.1.0',
        '@angular/cdk': '~8.0.2',
        '@angular/common': '~8.1.0',
        '@angular/compiler': '~8.1.0',
        '@angular/core': '~8.1.0',
        '@angular/elements': '~8.1.0',
        '@angular/forms': '~8.1.0',
        '@angular/google-maps': null,
        '@angular/material': '~8.0.2',
        '@angular/platform-browser': '~8.1.0',
        '@angular/platform-browser-dynamic': '~8.1.0',
        '@angular/router': '~8.1.0',
        '@angular/youtube-player': null,
        rxjs: '~6.4.0',
        tslib: '^1.9.0',
        'zone.js': '~0.9.1'
      },
      devDependencies: {
        '@angular-builders/jest': '~8.3.2',
        '@angular-devkit/build-angular': '~0.801.0',
        '@angular-devkit/build-ng-packagr': '~0.801.0',
        '@angular-devkit/schematics-cli': '~0.801.0',
        '@angular/cli': '~8.1.0',
        '@angular/compiler-cli': '~8.1.0',
        '@types/node': '~8.9.4',
        codelyzer: '^5.0.0',
        'ng-packagr': '^5.1.0',
        'ts-node': '~7.0.0',
        tsickle: '~0.35.0',
        tslint: '~5.15.0',
        typescript: '~3.4.3'
      }
    }
  ],
  [
    '8.2.x',
    {
      dependencies: {
        '@angular/animations': '~8.2.0',
        '@angular/cdk': '~8.1.4',
        '@angular/common': '~8.2.0',
        '@angular/compiler': '~8.2.0',
        '@angular/core': '~8.2.0',
        '@angular/elements': '~8.2.0',
        '@angular/forms': '~8.2.0',
        '@angular/google-maps': null,
        '@angular/material': '~8.1.4',
        '@angular/platform-browser': '~8.2.0',
        '@angular/platform-browser-dynamic': '~8.2.0',
        '@angular/router': '~8.2.0',
        '@angular/youtube-player': null,
        rxjs: '~6.4.0',
        tslib: '^1.10.0',
        'zone.js': '~0.9.1'
      },
      devDependencies: {
        '@angular-builders/jest': '~8.3.2',
        '@angular-devkit/build-angular': '~0.803.0',
        '@angular-devkit/build-ng-packagr': '~0.803.0',
        '@angular-devkit/schematics-cli': '~0.803.0',
        '@angular/cli': '~8.3.0',
        '@angular/compiler-cli': '~8.2.0',
        '@types/node': '~8.9.4',
        codelyzer: '^5.0.0',
        'ng-packagr': '^5.3.0',
        'ts-node': '~7.0.0',
        tsickle: '~0.36.0',
        tslint: '~5.15.0',
        typescript: '~3.5.3'
      }
    }
  ],
  [
    '9.0.x',
    {
      dependencies: {
        '@angular/animations': '~9.0.7',
        '@angular/cdk': '~9.0.1',
        '@angular/common': '~9.0.7',
        '@angular/compiler': '~9.0.7',
        '@angular/core': '~9.0.7',
        '@angular/elements': '~9.0.7',
        '@angular/forms': '~9.0.7',
        '@angular/google-maps': '~9.0.1',
        '@angular/material': '~9.0.1',
        '@angular/platform-browser': '~9.0.7',
        '@angular/platform-browser-dynamic': '~9.0.7',
        '@angular/router': '~9.0.7',
        '@angular/youtube-player': '~9.0.1',
        rxjs: '~6.5.4',
        tslib: '^1.10.0',
        'zone.js': '~0.10.2'
      },
      devDependencies: {
        '@angular-builders/jest': '~9.0.1',
        '@angular-devkit/build-angular': '~0.900.7',
        '@angular-devkit/build-ng-packagr': '~0.900.7',
        '@angular-devkit/schematics-cli': '~0.900.7',
        '@angular/cli': '~9.0.7',
        '@angular/compiler-cli': '~9.0.7',
        '@types/node': '^12.11.1',
        codelyzer: '^5.1.2',
        'ng-packagr': '^9.0.0',
        'ts-node': '~8.3.0',
        tsickle: null,
        tslint: '~5.18.0',
        typescript: '~3.7.5'
      }
    }
  ],
  [
    '9.1.x',
    {
      dependencies: {
        '@angular/animations': '~9.1.0',
        '@angular/cdk': '~9.1.3',
        '@angular/common': '~9.1.0',
        '@angular/compiler': '~9.1.0',
        '@angular/core': '~9.1.0',
        '@angular/elements': '~9.1.0',
        '@angular/forms': '~9.1.0',
        '@angular/google-maps': '~9.1.3',
        '@angular/material': '~9.1.3',
        '@angular/platform-browser': '~9.1.0',
        '@angular/platform-browser-dynamic': '~9.1.0',
        '@angular/router': '~9.1.0',
        '@angular/youtube-player': '~9.1.3',
        rxjs: '~6.5.4',
        tslib: '^1.10.0',
        'zone.js': '~0.10.2'
      },
      devDependencies: {
        '@angular-builders/jest': '~9.0.1',
        '@angular-devkit/build-angular': '~0.901.0',
        '@angular-devkit/build-ng-packagr': '~0.901.0',
        '@angular-devkit/schematics-cli': '~0.901.0',
        '@angular/cli': '~9.1.0',
        '@angular/compiler-cli': '~9.1.0',
        '@types/node': '^12.11.1',
        codelyzer: '^5.1.2',
        'ng-packagr': '^9.0.0',
        'ts-node': '~8.3.0',
        tsickle: null,
        tslint: '~6.1.0',
        typescript: '~3.8.3'
      }
    }
  ],
  [
    '10.0.x',
    {
      dependencies: {
        '@angular/animations': '~10.0.14',
        '@angular/cdk': '~10.0.2',
        '@angular/common': '~10.0.14',
        '@angular/compiler': '~10.0.14',
        '@angular/core': '~10.0.14',
        '@angular/elements': '~10.0.14',
        '@angular/forms': '~10.0.14',
        '@angular/google-maps': '~10.0.2',
        '@angular/material': '~10.0.2',
        '@angular/platform-browser': '~10.0.14',
        '@angular/platform-browser-dynamic': '~10.0.14',
        '@angular/router': '~10.0.14',
        '@angular/youtube-player': '~10.0.2',
        rxjs: '~6.5.5',
        tslib: '^2.0.0',
        'zone.js': '~0.10.3'
      },
      devDependencies: {
        '@angular-builders/jest': '~10.0.1',
        '@angular-devkit/build-angular': '~0.1000.8',
        '@angular-devkit/build-ng-packagr': '~0.1000.8',
        '@angular-devkit/schematics-cli': '~0.1000.8',
        '@angular/cli': '~10.0.8',
        '@angular/compiler-cli': '~10.0.14',
        '@types/node': '^12.11.1',
        codelyzer: '^6.0.0',
        'ng-packagr': '^10.0.0',
        'ts-node': '~8.3.0',
        tsickle: null,
        tslint: '~6.1.0',
        typescript: '~3.9.5'
      }
    }
  ],
  [
    '10.1.x',
    {
      dependencies: {
        '@angular/animations': '~10.1.6',
        '@angular/cdk': '~10.1.3',
        '@angular/common': '~10.1.6',
        '@angular/compiler': '~10.1.6',
        '@angular/core': '~10.1.6',
        '@angular/elements': '~10.1.6',
        '@angular/forms': '~10.1.6',
        '@angular/google-maps': '~10.1.3',
        '@angular/material': '~10.1.3',
        '@angular/platform-browser': '~10.1.6',
        '@angular/platform-browser-dynamic': '~10.1.6',
        '@angular/router': '~10.1.6',
        '@angular/youtube-player': '~10.1.3',
        rxjs: '~6.6.3',
        tslib: '^2.0.0',
        'zone.js': '~0.10.3'
      },
      devDependencies: {
        '@angular-builders/jest': '~10.0.1',
        '@angular-devkit/build-angular': '~0.1001.7',
        '@angular-devkit/build-ng-packagr': null,
        '@angular-devkit/schematics-cli': '~0.1001.7',
        '@angular/cli': '~10.1.7',
        '@angular/compiler-cli': '~10.1.6',
        '@types/node': '^12.12.62',
        codelyzer: '^6.0.0',
        'ng-packagr': '^10.1.0',
        'ts-node': '~8.3.0',
        tsickle: null,
        tslint: '~6.1.0',
        typescript: '~3.9.7'
      }
    }
  ],
  [
    '10.2.x',
    {
      dependencies: {
        '@angular/animations': '~10.2.0',
        '@angular/cdk': '~10.2.7',
        '@angular/common': '~10.2.0',
        '@angular/compiler': '~10.2.0',
        '@angular/core': '~10.2.0',
        '@angular/elements': '~10.2.0',
        '@angular/forms': '~10.2.0',
        '@angular/google-maps': '~10.2.7',
        '@angular/material': '~10.2.7',
        '@angular/platform-browser': '~10.2.0',
        '@angular/platform-browser-dynamic': '~10.2.0',
        '@angular/router': '~10.2.0',
        '@angular/youtube-player': '~10.2.7',
        rxjs: '~6.6.0',
        tslib: '^2.0.0',
        'zone.js': '~0.10.2'
      },
      devDependencies: {
        '@angular-builders/jest': '~10.0.1',
        '@angular-devkit/build-angular': '~0.1002.0',
        '@angular-devkit/build-ng-packagr': null,
        '@angular-devkit/schematics-cli': '~0.1002.0',
        '@angular/cli': '~10.2.0',
        '@angular/compiler-cli': '~10.2.0',
        '@types/node': '^12.11.1',
        codelyzer: '^6.0.0',
        'ng-packagr': '^10.1.0',
        'ts-node': '~8.3.0',
        tsickle: null,
        tslint: '~6.1.0',
        typescript: '~4.0.2'
      }
    }
  ],
  [
    '11.0.x',
    {
      dependencies: {
        '@angular/animations': '~11.0.0',
        '@angular/cdk': '~11.0.0',
        '@angular/common': '~11.0.0',
        '@angular/compiler': '~11.0.0',
        '@angular/core': '~11.0.0',
        '@angular/elements': '~11.0.0',
        '@angular/forms': '~11.0.0',
        '@angular/google-maps': '~11.0.0',
        '@angular/material': '~11.0.0',
        '@angular/platform-browser': '~11.0.0',
        '@angular/platform-browser-dynamic': '~11.0.0',
        '@angular/router': '~11.0.0',
        '@angular/youtube-player': '~11.0.0',
        rxjs: '~6.6.0',
        tslib: '^2.0.0',
        'zone.js': '~0.10.2'
      },
      devDependencies: {
        '@angular-builders/jest': '~11.0.0',
        '@angular-devkit/build-angular': '~0.1100.0',
        '@angular-devkit/build-ng-packagr': null,
        '@angular-devkit/schematics-cli': '~0.1100.0',
        '@angular/cli': '~11.0.0',
        '@angular/compiler-cli': '~11.0.0',
        '@types/node': '^12.11.1',
        codelyzer: '^6.0.0',
        'ng-packagr': '^11.0.0',
        'ts-node': '~8.3.0',
        tsickle: null,
        tslint: '~6.1.0',
        typescript: '~4.0.2'
      }
    }
  ],
  [
    '11.1.x',
    {
      dependencies: {
        '@angular/animations': '~11.1.0',
        '@angular/cdk': '~11.1.0',
        '@angular/common': '~11.1.0',
        '@angular/compiler': '~11.1.0',
        '@angular/core': '~11.1.0',
        '@angular/elements': '~11.1.0',
        '@angular/forms': '~11.1.0',
        '@angular/google-maps': '~11.1.0',
        '@angular/material': '~11.1.0',
        '@angular/platform-browser': '~11.1.0',
        '@angular/platform-browser-dynamic': '~11.1.0',
        '@angular/router': '~11.1.0',
        '@angular/youtube-player': '~11.1.0',
        rxjs: '~6.6.0',
        tslib: '^2.0.0',
        'zone.js': '~0.11.3'
      },
      devDependencies: {
        '@angular-builders/jest': '~11.1.1',
        '@angular-devkit/build-angular': '~0.1101.0',
        '@angular-devkit/build-ng-packagr': null,
        '@angular-devkit/schematics-cli': '~0.1101.0',
        '@angular/cli': '~11.1.0',
        '@angular/compiler-cli': '~11.1.0',
        '@types/node': '^12.11.1',
        codelyzer: '^6.0.0',
        'ng-packagr': '^11.1.0',
        'ts-node': '~8.3.0',
        tsickle: null,
        tslint: '~6.1.0',
        typescript: '~4.1.2'
      }
    }
  ],
  [
    '11.2.x',
    {
      dependencies: {
        '@angular/animations': '~11.2.0',
        '@angular/cdk': '~11.2.0',
        '@angular/common': '~11.2.0',
        '@angular/compiler': '~11.2.0',
        '@angular/core': '~11.2.0',
        '@angular/elements': '~11.2.0',
        '@angular/forms': '~11.2.0',
        '@angular/google-maps': '~11.2.0',
        '@angular/material': '~11.2.0',
        '@angular/platform-browser': '~11.2.0',
        '@angular/platform-browser-dynamic': '~11.2.0',
        '@angular/router': '~11.2.0',
        '@angular/youtube-player': '~11.2.0',
        rxjs: '~6.6.0',
        tslib: '^2.0.0',
        'zone.js': '~0.11.3'
      },
      devDependencies: {
        '@angular-builders/jest': '~11.2.0',
        '@angular-devkit/build-angular': '~0.1102.0',
        '@angular-devkit/build-ng-packagr': null,
        '@angular-devkit/schematics-cli': '~0.1102.0',
        '@angular/cli': '~11.2.0',
        '@angular/compiler-cli': '~11.2.0',
        '@types/node': '^12.11.1',
        codelyzer: '^6.0.0',
        'ng-packagr': '^11.1.0',
        'ts-node': '~8.3.0',
        tsickle: null,
        tslint: '~6.1.0',
        typescript: '~4.1.2'
      }
    }
  ],
  [
    '12.0.x',
    {
      dependencies: {
        '@angular/animations': '~12.0.0',
        '@angular/cdk': '~12.0.0',
        '@angular/common': '~12.0.0',
        '@angular/compiler': '~12.0.0',
        '@angular/core': '~12.0.0',
        '@angular/elements': '~12.0.0',
        '@angular/forms': '~12.0.0',
        '@angular/google-maps': '~12.0.0',
        '@angular/material': '~12.0.0',
        '@angular/platform-browser': '~12.0.0',
        '@angular/platform-browser-dynamic': '~12.0.0',
        '@angular/router': '~12.0.0',
        '@angular/youtube-player': '~12.0.0',
        rxjs: '~6.6.0',
        tslib: '^2.0.0',
        'zone.js': '~0.11.4'
      },
      devDependencies: {
        '@angular-builders/jest': '~12.0.0',
        '@angular-devkit/build-angular': '~12.0.0',
        '@angular-devkit/build-ng-packagr': null,
        '@angular-devkit/schematics-cli': '~12.0.0',
        '@angular/cli': '~12.0.0',
        '@angular/compiler-cli': '~12.0.0',
        '@types/node': '^12.11.1',
        codelyzer: null,
        'ng-packagr': '^12.0.0',
        'ts-node': '~9.1.1',
        tsickle: null,
        tslint: null,
        typescript: '~4.2.3'
      }
    }
  ],
  [
    '12.1.x',
    {
      dependencies: {
        '@angular/animations': '~12.1.0',
        '@angular/cdk': '~12.1.0',
        '@angular/common': '~12.1.0',
        '@angular/compiler': '~12.1.0',
        '@angular/core': '~12.1.0',
        '@angular/elements': '~12.1.0',
        '@angular/forms': '~12.1.0',
        '@angular/google-maps': '~12.1.0',
        '@angular/material': '~12.1.0',
        '@angular/platform-browser': '~12.1.0',
        '@angular/platform-browser-dynamic': '~12.1.0',
        '@angular/router': '~12.1.0',
        '@angular/youtube-player': '~12.1.0',
        rxjs: '~6.6.0',
        tslib: '^2.2.0',
        'zone.js': '~0.11.4'
      },
      devDependencies: {
        '@angular-devkit/build-angular': '~12.1.4',
        '@angular-devkit/build-ng-packagr': null,
        '@angular-devkit/schematics-cli': '~12.1.4',
        '@angular/cli': '~12.1.4',
        '@angular/compiler-cli': '~12.1.5',
        '@types/node': '^12.11.1',
        codelyzer: null,
        'ng-packagr': '^12.1.0',
        'ts-node': '~9.1.1',
        tsickle: null,
        tslint: null,
        typescript: '~4.3.2'
      }
    }
  ],
  [
    '12.2.x',
    {
      dependencies: {
        '@angular/animations': '~12.2.0',
        '@angular/cdk': '~12.2.0',
        '@angular/common': '~12.2.0',
        '@angular/compiler': '~12.2.0',
        '@angular/core': '~12.2.0',
        '@angular/elements': '~12.2.0',
        '@angular/forms': '~12.2.0',
        '@angular/google-maps': '~12.2.0',
        '@angular/material': '~12.2.0',
        '@angular/platform-browser': '~12.2.0',
        '@angular/platform-browser-dynamic': '~12.2.0',
        '@angular/router': '~12.2.0',
        '@angular/youtube-player': '~12.2.0',
        rxjs: '~6.6.0',
        tslib: '^2.3.0',
        'zone.js': '~0.11.4'
      },
      devDependencies: {
        '@angular-devkit/build-angular': '~12.2.2',
        '@angular-devkit/build-ng-packagr': null,
        '@angular-devkit/schematics-cli': '~12.2.2',
        '@angular/cli': '~12.2.2',
        '@angular/compiler-cli': '~12.2.0',
        '@types/node': '^12.11.1',
        codelyzer: null,
        'ng-packagr': '^12.2.0',
        'ts-node': '~9.1.1',
        tsickle: null,
        tslint: null,
        typescript: '~4.3.5'
      }
    }
  ]
]);
