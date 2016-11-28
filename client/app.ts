import { VNode, div } from '@cycle/dom'
import { DOMSource } from '@cycle/dom/xstream-typings'
import xs, { Stream } from 'xstream'

declare const require: {
  <T>(path: string): T
  (paths: string[], callback: (...modules: any[]) => void): void
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void
}

// const styles = require<any>('./app.scss')
require('./app.scss')
let styles = { app: '.myClass' }

export type Sources = {
  DOM: DOMSource
}

export type Sinks = {
  DOM: Stream<VNode>
}

export function App(sources: Sources): Sinks {
  const vtree$ = xs.of(
    div(styles.app, { style: { color: 'red' } }, 'My Awesome Cycle.js app')
  )
  const sinks = {
    DOM: vtree$
  }
  return sinks
}
