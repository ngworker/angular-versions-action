import {PackageJsonVersion} from './types/package-json-version';

export const versions = new Map<string, PackageJsonVersion>([
  [
    '8.0.x',
    {
      dependencies: {
        '@angular/animations': '~8.0.3',
        '@angular/common': '~8.0.3',
        '@angular/compiler': '~8.0.3',
        '@angular/core': '~8.0.3',
        '@angular/forms': '~8.0.3',
        '@angular/platform-browser': '~8.0.3',
        '@angular/platform-browser-dynamic': '~8.0.3',
        '@angular/router': '~8.0.3',
        rxjs: '~6.4.0',
        tslib: '^1.9.0',
        'zone.js': '~0.9.1'
      },
      devDependencies: {
        '@angular-devkit/build-angular': '~0.800.6',
        '@angular-devkit/build-ng-packagr': '~0.800.6',
        '@angular/cli': '~8.0.6',
        '@angular/compiler-cli': '~8.0.3',
        '@types/node': '~8.9.4',
        codelyzer: '^5.0.0',
        'ts-node': '~7.0.0',
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
        '@angular/common': '~8.1.0',
        '@angular/compiler': '~8.1.0',
        '@angular/core': '~8.1.0',
        '@angular/forms': '~8.1.0',
        '@angular/platform-browser': '~8.1.0',
        '@angular/platform-browser-dynamic': '~8.1.0',
        '@angular/router': '~8.1.0',
        rxjs: '~6.4.0',
        tslib: '^1.9.0',
        'zone.js': '~0.9.1'
      },
      devDependencies: {
        '@angular-devkit/build-angular': '~0.801.0',
        '@angular-devkit/build-ng-packagr': '~0.801.0',
        '@angular/cli': '~8.1.0',
        '@angular/compiler-cli': '~8.1.0',
        '@types/node': '~8.9.4',
        codelyzer: '^5.0.0',
        'ts-node': '~7.0.0',
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
        '@angular/common': '~8.2.0',
        '@angular/compiler': '~8.2.0',
        '@angular/core': '~8.2.0',
        '@angular/forms': '~8.2.0',
        '@angular/platform-browser': '~8.2.0',
        '@angular/platform-browser-dynamic': '~8.2.0',
        '@angular/router': '~8.2.0',
        rxjs: '~6.4.0',
        tslib: '^1.10.0',
        'zone.js': '~0.9.1'
      },
      devDependencies: {
        '@angular-devkit/build-angular': '~0.803.0',
        '@angular-devkit/build-ng-packagr': '~0.803.0',
        '@angular/cli': '~8.3.0',
        '@angular/compiler-cli': '~8.2.0',
        '@types/node': '~8.9.4',
        codelyzer: '^5.0.0',
        'ts-node': '~7.0.0',
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
        '@angular/common': '~9.0.7',
        '@angular/compiler': '~9.0.7',
        '@angular/core': '~9.0.7',
        '@angular/forms': '~9.0.7',
        '@angular/platform-browser': '~9.0.7',
        '@angular/platform-browser-dynamic': '~9.0.7',
        '@angular/router': '~9.0.7',
        rxjs: '~6.5.4',
        tslib: '^1.10.0',
        'zone.js': '~0.10.2'
      },
      devDependencies: {
        '@angular-devkit/build-angular': '~0.900.7',
        '@angular-devkit/build-ng-packagr': '~0.900.7',
        '@angular/cli': '~9.0.7',
        '@angular/compiler-cli': '~9.0.7',
        '@types/node': '^12.11.1',
        codelyzer: '^5.1.2',
        'ts-node': '~8.3.0',
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
        '@angular/common': '~9.1.0',
        '@angular/compiler': '~9.1.0',
        '@angular/core': '~9.1.0',
        '@angular/forms': '~9.1.0',
        '@angular/platform-browser': '~9.1.0',
        '@angular/platform-browser-dynamic': '~9.1.0',
        '@angular/router': '~9.1.0',
        rxjs: '~6.5.4',
        tslib: '^1.10.0',
        'zone.js': '~0.10.2'
      },
      devDependencies: {
        '@angular-devkit/build-angular': '~0.901.0',
        '@angular-devkit/build-ng-packagr': '~0.901.0',
        '@angular/cli': '~9.1.0',
        '@angular/compiler-cli': '~9.1.0',
        '@types/node': '^12.11.1',
        codelyzer: '^5.1.2',
        'ts-node': '~8.3.0',
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
        '@angular/common': '~10.0.14',
        '@angular/compiler': '~10.0.14',
        '@angular/core': '~10.0.14',
        '@angular/forms': '~10.0.14',
        '@angular/platform-browser': '~10.0.14',
        '@angular/platform-browser-dynamic': '~10.0.14',
        '@angular/router': '~10.0.14',
        rxjs: '~6.5.5',
        tslib: '^2.0.0',
        'zone.js': '~0.10.3'
      },
      devDependencies: {
        '@angular-devkit/build-angular': '~0.1000.8',
        '@angular-devkit/build-ng-packagr': '~0.1000.8',
        '@angular/cli': '~10.0.8',
        '@angular/compiler-cli': '~10.0.14',
        '@types/node': '^12.11.1',
        codelyzer: '^6.0.0',
        'ts-node': '~8.3.0',
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
        '@angular/common': '~10.1.6',
        '@angular/compiler': '~10.1.6',
        '@angular/core': '~10.1.6',
        '@angular/forms': '~10.1.6',
        '@angular/platform-browser': '~10.1.6',
        '@angular/platform-browser-dynamic': '~10.1.6',
        '@angular/router': '~10.1.6',
        rxjs: '~6.6.3',
        tslib: '^2.0.0',
        'zone.js': '~0.10.3'
      },
      devDependencies: {
        '@angular-devkit/build-angular': '~0.1001.7',
        '@angular-devkit/build-ng-packagr': '~0.1001.7',
        '@angular/cli': '~10.1.7',
        '@angular/compiler-cli': '~10.1.6',
        '@types/node': '^12.12.62',
        codelyzer: '^6.0.0',
        'ts-node': '~8.3.0',
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
        '@angular/common': '~10.2.0',
        '@angular/compiler': '~10.2.0',
        '@angular/core': '~10.2.0',
        '@angular/forms': '~10.2.0',
        '@angular/platform-browser': '~10.2.0',
        '@angular/platform-browser-dynamic': '~10.2.0',
        '@angular/router': '~10.2.0',
        rxjs: '~6.6.0',
        tslib: '^2.0.0',
        'zone.js': '~0.10.2'
      },
      devDependencies: {
        '@angular-devkit/build-angular': '~0.1002.0',
        '@angular-devkit/build-ng-packagr': '~0.1002.0',
        '@angular/cli': '~10.2.0',
        '@angular/compiler-cli': '~10.2.0',
        '@types/node': '^12.11.1',
        codelyzer: '^6.0.0',
        'ts-node': '~8.3.0',
        tslint: '~6.1.0',
        typescript: '~4.0.2'
      }
    }
  ],
  [
    '11.0.x',
    {
      dependencies: {
        '@angular/animations': '~11.1.0',
        '@angular/common': '~11.1.0',
        '@angular/compiler': '~11.1.0',
        '@angular/core': '~11.1.0',
        '@angular/forms': '~11.1.0',
        '@angular/platform-browser': '~11.1.0',
        '@angular/platform-browser-dynamic': '~11.1.0',
        '@angular/router': '~11.1.0',
        rxjs: '~6.6.0',
        tslib: '^2.0.0',
        'zone.js': '~0.10.2'
      },
      devDependencies: {
        '@angular-devkit/build-angular': '~0.1100.0',
        '@angular-devkit/build-ng-packagr': '~0.1002.0',
        '@angular/cli': '~11.1.0',
        '@angular/compiler-cli': '~11.1.0',
        '@types/node': '^12.11.1',
        codelyzer: '^6.0.0',
        'ts-node': '~8.3.0',
        tslint: '~6.1.0',
        typescript: '~4.0.2'
      }
    }
  ],
  [
    '11.0.x',
    {
      dependencies: {
        '@angular/animations': '~11.1.0',
        '@angular/common': '~11.1.0',
        '@angular/compiler': '~11.1.0',
        '@angular/core': '~11.1.0',
        '@angular/forms': '~11.1.0',
        '@angular/platform-browser': '~11.1.0',
        '@angular/platform-browser-dynamic': '~11.1.0',
        '@angular/router': '~11.1.0',
        rxjs: '~6.6.0',
        tslib: '^2.0.0',
        'zone.js': '~0.11.3'
      },
      devDependencies: {
        '@angular-devkit/build-angular': '~0.1100.0',
        '@angular-devkit/build-ng-packagr': '~0.1002.0',
        '@angular/cli': '~11.1.0',
        '@angular/compiler-cli': '~11.1.0',
        '@types/node': '^12.11.1',
        codelyzer: '^6.0.0',
        'ts-node': '~8.3.0',
        tslint: '~6.1.0',
        typescript: '~4.1.2'
      }
    }
  ]
]);
