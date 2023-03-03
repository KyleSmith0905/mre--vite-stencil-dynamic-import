import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-project',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'stencil-library',
      proxiesFile: '../stencil-react-output/src/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  buildEs5: 'prod',
  extras: {
    experimentalImportInjection: true,
  },
};
