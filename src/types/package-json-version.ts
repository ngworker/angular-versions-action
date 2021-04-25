export interface PackageJsonVersion {
  dependencies: {
    '@angular/animations': string;
    '@angular/common': string;
    '@angular/compiler': string;
    '@angular/core': string;
    '@angular/elements': string;
    '@angular/forms': string;
    '@angular/platform-browser': string;
    '@angular/platform-browser-dynamic': string;
    '@angular/router': string;
    rxjs: string;
    'zone.js': string;
    tslib?: string;
  };

  devDependencies: {
    '@angular-devkit/build-angular': string;
    '@angular-devkit/build-ng-packagr'?: string;
    '@angular-devkit/schematics-cli'?: string;
    '@angular/cli': string;
    '@angular/compiler-cli': string;
    '@types/node': string;
    codelyzer?: string;
    'ng-packagr'?: string;
    'ts-node': string;
    tsickle?: string;
    tslint?: string;
    typescript: string;
  };
}
