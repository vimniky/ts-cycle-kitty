import { VNode, div, img, br } from '@cycle/dom'
import { DOMSource } from '@cycle/dom/xstream-typings'
import xs, { Stream } from 'xstream'

declare const require: {
  <T>(path: string): T
  (paths: string[], callback: (...modules: any[]) => void): void
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void
}

export type Sources = {
  DOM: DOMSource
}

export type Sinks = {
  DOM: Stream<VNode>
}

export function App(sources: Sources): Sinks {
  const vtree$ = xs.of(
    div('.cde-app', { style: { color: 'red' } }, [
      'Awesome CDE editor',
      br(),
      img({ attrs: { src: './assets/avatar.png' } })
    ])
  )
  const sinks = {
    DOM: vtree$
  }
  return sinks
}
