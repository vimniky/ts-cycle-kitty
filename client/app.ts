import { VNode, div } from '@cycle/dom'
import { DOMSource } from '@cycle/dom/xstream-typings'
import { HTTPSource } from '@cycle/http/xstream-typings'
import xs, { Stream } from 'xstream'

export type Sources = {
  DOM: DOMSource,
  HTTP: HTTPSource,
}

export type Sinks = {
  DOM: Stream<VNode>,
  HTTP: Stream<HTTPSource>,
}

export function App(sources: Sources): Sinks {
  const vtree$ =
    xs.of(
      div('.app', [
        'Hello Kitty',
      ]),
    )
  const sinks = {
    DOM: vtree$,
    HTTP: xs.of(<any>null),
  }
  return sinks
}
