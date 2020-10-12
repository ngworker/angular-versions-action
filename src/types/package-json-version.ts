export interface PackageJsonVersion {
  dependencies: {
    '@angular/animations': string;
    '@angular/common': string;
    '@angular/compiler': string;
    '@angular/core': string;
    '@angular/forms': string;
    '@angular/platform-browser': string;
    '@angular/platform-browser-dynamic': string;
    '@angular/router': string;
    rxjs: string;
    'zone.js': string;
    tslib: string;
    [deps: string]: string;
  };

  devDependencies: {
    '@angular-devkit/build-angular': string;
    '@angular/cli': string;
    '@angular/compiler-cli': string;
    '@types/node': string;
    codelyzer: string;
    'ts-node': string;
    tslint: string;
    typescript: string;
    [deps: string]: string;
  };
}
