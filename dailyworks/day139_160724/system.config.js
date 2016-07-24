System.config({
  transpiler: 'typescript',
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  map: {
    app: 'app',
    typescript: 'node_modules/typescript/lib/typescript.js',
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs'
  },
  packages: {
    app: {
      defaultExtension: 'ts',
      main: 'main.ts',
    },
    '@angular/core': {
      main: 'bundles/core.umd.js',
      defaultExtension: 'js'
    },
    '@angular/compiler': {
      main: 'bundles/compiler.umd.js',
      defaultExtension: 'js'
    },
    '@angular/common': {
      main: 'bundles/common.umd.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser-dynamic': {
      main: 'bundles/platform-browser-dynamic.umd.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser': {
      main: 'bundles/platform-browser.umd.js',
      defaultExtension: 'js'
    },
    '@angular/router': {
      main: 'bundles/router.umd.js',
      defaultExtension: 'js'
    },
    rxjs: {
      main: 'Rx.umd.min.js',
      defaultExtension: 'js'
    }
  }
});