export interface PackageJsonDependencies {
  '@angular/animations': string;
  '@angular/cdk': string;
  '@angular/common': string;
  '@angular/compiler': string;
  '@angular/core': string;
  '@angular/elements': string;
  '@angular/forms': string;
  '@angular/google-maps': string | null;
  '@angular/material': string;
  '@angular/platform-browser': string;
  '@angular/platform-browser-dynamic': string;
  '@angular/router': string;
  '@angular/youtube-player': string | null;
  rxjs: string;
  'zone.js': string;
  tslib: string | null;
}

export interface PackageJsonDevDependencies {
  '@angular-devkit/build-angular': string;
  '@angular-devkit/build-ng-packagr': string | null;
  '@angular-devkit/schematics-cli': string | null;
  '@angular/cli': string;
  '@angular/compiler-cli': string;
  '@types/node': string;
  codelyzer: string | null;
  'ng-packagr': string | null;
  'ts-node': string;
  tsickle: string | null;
  tslint: string | null;
  typescript: string;
}

export interface PackageJson {
  dependencies: PackageJsonDependencies;
  devDependencies: PackageJsonDevDependencies;
}
