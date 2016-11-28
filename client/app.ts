import { VNode, div, img, h3 } from '@cycle/dom'
import { DOMSource } from '@cycle/dom/xstream-typings'
import xs, { Stream } from 'xstream'

export type Sources = {
  DOM: DOMSource
}

export type Sinks = {
  DOM: Stream<VNode>
}

const attrs = {
  style: {
    color: 'red',
  }
}

export function App(sources: Sources): Sinks {
  const vtree$ = xs.of(
    div(
      '.app',
      attrs,
      [
        h3('Awesome typescript starter kit'),
        img({ attrs: { src: './assets/avatar.png' } }),
      ]
    )
  )
  const sinks = {
    DOM: vtree$
  }
  return sinks
}
