export const newBuilderAngularJson = {
  $schema: './node_modules/@angular/cli/lib/config/schema.json',
  version: 1,
  newProjectRoot: 'apps',
  cli: {
    analytics: false
  },
  schematics: {
    '@schematics/angular:component': {
      style: 'scss'
    },
    '@schematics/angular:application': {
      routing: false,
      strict: true,
      style: 'scss'
    }
  },
  projects: {
    'lumberjack-app': {
      projectType: 'application',
      root: 'apps/lumberjack-app',
      sourceRoot: 'apps/lumberjack-app/src',
      prefix: 'app',
      architect: {
        build: {
          builder: '@angular-devkit/build-angular:browser',
          options: {
            outputPath: 'dist/apps/lumberjack-app',
            index: 'apps/lumberjack-app/src/index.html',
            main: 'apps/lumberjack-app/src/main.ts',
            polyfills: 'apps/lumberjack-app/src/polyfills.ts',
            tsConfig: 'apps/lumberjack-app/tsconfig.app.json',
            aot: true,
            assets: [
              'apps/lumberjack-app/src/favicon.ico',
              'apps/lumberjack-app/src/assets'
            ],
            styles: ['apps/lumberjack-app/src/styles.scss'],
            scripts: [],
            allowedCommonJsDependencies: ['zone.js']
          },
          configurations: {
            production: {
              fileReplacements: [
                {
                  replace:
                    'apps/lumberjack-app/src/environments/environment.ts',
                  with:
                    'apps/lumberjack-app/src/environments/environment.prod.ts'
                }
              ],
              optimization: true,
              outputHashing: 'all',
              sourceMap: false,
              namedChunks: false,
              extractLicenses: true,
              vendorChunk: false,
              buildOptimizer: true,
              budgets: [
                {
                  type: 'initial',
                  maximumWarning: '500kb',
                  maximumError: '1mb'
                }
              ]
            }
          }
        },
        serve: {
          builder: '@angular-devkit/build-angular:dev-server',
          options: {
            browserTarget: 'lumberjack-app:build'
          },
          configurations: {
            production: {
              browserTarget: 'lumberjack-app:build:production'
            }
          }
        },
        'extract-i18n': {
          builder: '@angular-devkit/build-angular:extract-i18n',
          options: {
            browserTarget: 'lumberjack-app:build'
          }
        },
        test: {
          builder: '@angular-builders/jest:run',
          options: {
            coverage: false
          },
          configurations: {
            ci: {
              watch: false
            },
            coverage: {
              coverage: true,
              silent: true,
              watch: false
            }
          }
        },
        lint: {
          builder: '@angular-devkit/build-angular:tslint',
          options: {
            tsConfig: [
              'apps/lumberjack-app/tsconfig.app.json',
              'apps/lumberjack-app/tsconfig.spec.json'
            ],
            exclude: ['**/node_modules/**', '!apps/lumberjack-app/**']
          }
        }
      }
    },
    'lumberjack-app-e2e': {
      projectType: 'application',
      root: 'apps/lumberjack-app-e2e',
      architect: {
        lint: {
          builder: '@angular-devkit/build-angular:tslint',
          options: {
            tsConfig: 'apps/lumberjack-app-e2e/tsconfig.json',
            exclude: ['**/node_modules/**', '!apps/lumberjack-app-e2e/**']
          }
        },
        e2e: {
          builder: '@angular-devkit/build-angular:protractor',
          options: {
            protractorConfig: 'apps/lumberjack-app-e2e/protractor.conf.js',
            devServerTarget: 'lumberjack-app:serve'
          },
          configurations: {
            production: {
              devServerTarget: 'lumberjack-app:serve:production'
            }
          }
        }
      }
    },
    'ngworker-lumberjack': {
      projectType: 'library',
      root: 'libs/ngworker/lumberjack',
      sourceRoot: 'libs/ngworker/lumberjack',
      prefix: 'lib',
      architect: {
        build: {
          builder: '@angular-devkit/build-angular:ng-packagr',
          options: {
            tsConfig: 'libs/ngworker/lumberjack/tsconfig.lib.json',
            project: 'libs/ngworker/lumberjack/ng-package.json'
          },
          configurations: {
            production: {
              tsConfig: 'libs/ngworker/lumberjack/tsconfig.lib.prod.json'
            }
          }
        },
        test: {
          builder: '@angular-builders/jest:run',
          options: {
            coverage: false
          },
          configurations: {
            ci: {
              watch: false
            },
            coverage: {
              coverage: true,
              silent: true,
              watch: false
            }
          }
        },
        lint: {
          builder: '@angular-devkit/build-angular:tslint',
          options: {
            tsConfig: [
              'libs/ngworker/lumberjack/tsconfig.lib.json',
              'libs/ngworker/lumberjack/tsconfig.spec.json'
            ],
            exclude: ['**/node_modules/**', '!libs/ngworker/lumberjack/**']
          }
        }
      }
    },
    'internal-test-util': {
      projectType: 'library',
      root: 'libs/internal/test-util',
      sourceRoot: 'libs/internal/test-util/src',
      prefix: 'internal',
      architect: {
        build: {
          builder: '@angular-devkit/build-angular:ng-packagr',
          options: {
            tsConfig: 'libs/ngworker/lumberjack/tsconfig.lib.json',
            project: 'libs/ngworker/lumberjack/ng-package.json'
          },
          configurations: {
            production: {
              tsConfig: 'libs/ngworker/lumberjack/tsconfig.lib.prod.json'
            }
          }
        },
        test: {
          builder: '@angular-builders/jest:run',
          options: {
            coverage: false
          },
          configurations: {
            ci: {
              watch: false
            }
          }
        },
        lint: {
          builder: '@angular-devkit/build-angular:tslint',
          options: {
            tsConfig: [
              'libs/internal/test-util/tsconfig.lib.json',
              'libs/internal/test-util/tsconfig.spec.json'
            ],
            exclude: ['**/node_modules/**', '!libs/internal/test-util/**']
          }
        }
      }
    },
    'internal-console-driver-test-util': {
      projectType: 'library',
      root: 'libs/internal/console-driver/test-util',
      sourceRoot: 'libs/internal/console-driver/test-util/src',
      prefix: 'internal',
      architect: {
        test: {
          builder: '@angular-builders/jest:run',
          options: {
            coverage: false
          },
          configurations: {
            ci: {
              watch: false
            }
          }
        },
        lint: {
          builder: '@angular-devkit/build-angular:tslint',
          options: {
            tsConfig: [
              'libs/internal/console-driver/test-util/tsconfig.lib.json',
              'libs/internal/console-driver/test-util/tsconfig.spec.json'
            ],
            exclude: [
              '**/node_modules/**',
              '!libs/internal/console-driver/test-util/**'
            ]
          }
        }
      }
    },
    'lumberjack-schematics-app': {
      projectType: 'application',
      root: 'apps/lumberjack-schematics-app',
      sourceRoot: 'apps/lumberjack-schematics-app/src',
      prefix: 'schematics',
      architect: {
        build: {
          builder: '@angular-devkit/build-angular:browser',
          options: {
            outputPath: 'dist/lumberjack-schematics-app',
            index: 'apps/lumberjack-schematics-app/src/index.html',
            main: 'apps/lumberjack-schematics-app/src/main.ts',
            polyfills: 'apps/lumberjack-schematics-app/src/polyfills.ts',
            tsConfig: 'apps/lumberjack-schematics-app/tsconfig.app.json',
            aot: true,
            assets: [
              'apps/lumberjack-schematics-app/src/favicon.ico',
              'apps/lumberjack-schematics-app/src/assets'
            ],
            styles: ['apps/lumberjack-schematics-app/src/styles.scss'],
            scripts: [],
            allowedCommonJsDependencies: ['zone.js']
          },
          configurations: {
            production: {
              fileReplacements: [
                {
                  replace:
                    'apps/lumberjack-schematics-app/src/environments/environment.ts',
                  with:
                    'apps/lumberjack-schematics-app/src/environments/environment.prod.ts'
                }
              ],
              optimization: true,
              outputHashing: 'all',
              sourceMap: false,
              namedChunks: false,
              extractLicenses: true,
              vendorChunk: false,
              buildOptimizer: true,
              budgets: [
                {
                  type: 'initial',
                  maximumWarning: '500kb',
                  maximumError: '1mb'
                },
                {
                  type: 'anyComponentStyle',
                  maximumWarning: '2kb',
                  maximumError: '4kb'
                }
              ]
            }
          }
        },
        serve: {
          builder: '@angular-devkit/build-angular:dev-server',
          options: {
            browserTarget: 'lumberjack-schematics-app:build'
          },
          configurations: {
            production: {
              browserTarget: 'lumberjack-schematics-app:build:production'
            }
          }
        },
        'extract-i18n': {
          builder: '@angular-devkit/build-angular:extract-i18n',
          options: {
            browserTarget: 'lumberjack-schematics-app:build'
          }
        }
      }
    },
    'schematics-e2e': {
      projectType: 'application',
      root: 'apps/schematics-e2e',
      sourceRoot: 'apps/schematics-e2e/src',
      prefix: 'schematics-e2e',
      architect: {
        e2e: {
          builder: '@angular-builders/jest:run',
          options: {
            coverage: false,
            'run-in-band': false
          },
          configurations: {
            ci: {
              watch: false
            }
          }
        },
        lint: {
          builder: '@angular-devkit/build-angular:tslint',
          options: {
            tsConfig: ['apps/schematics-e2e/tsconfig.json'],
            exclude: [
              '**/node_modules/**',
              '!apps/schematics-e2e/**',
              'apps/schematics-e2e/**/golden-files/**'
            ]
          }
        }
      }
    }
  },
  defaultProject: 'lumberjack-app'
};
