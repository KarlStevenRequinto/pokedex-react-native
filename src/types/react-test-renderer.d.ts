declare module 'react-test-renderer' {
    import * as React from 'react';
  
    interface TestRendererOptions {
      createNodeMock?: (element: React.ReactElement) => any;
    }
  
    export interface TestRenderer {
      toJSON: () => any;
    }
  
    export function create(
      element: React.ReactElement,
      options?: TestRendererOptions
    ): TestRenderer;
  
    export function act(callback: () => void): void;
  }
  