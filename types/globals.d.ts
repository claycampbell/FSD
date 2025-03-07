/// <reference types="react" />

import type { ReactNode } from 'react'

declare global {
  declare module 'react' {
    interface ReactElement {
      type: any
      props: any
      key: string | null
    }
  }
  
  namespace JSX {
    interface Element extends React.ReactElement {}
    interface ElementClass extends React.Component<any> {
      render(): React.ReactNode
    }
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}