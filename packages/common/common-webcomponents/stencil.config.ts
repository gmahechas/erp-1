import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'common-webcomponents',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: '@gmahechas/common-webcomponents',
      proxiesFile: '../common-webcomponents-react/src/components.ts',
      includeDefineCustomElements: true,
    })
  ],
  buildEs5: 'prod',
  enableCache: false,
  globalStyle: 'src/styles/index.css',
  plugins: [
    sass({
      includePaths: ['./node_modules/']
    })
  ],
};
