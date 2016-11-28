import { VNode, div, img, br } from '@cycle/dom'
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
    width: '300px',
    height: '300px',
    margin: '20px auto',
    'font-size': '20px',
  }
}

export function App(sources: Sources): Sinks {
  const vtree$ = xs.of(
    div(
      '.cde-app',
      attrs,
      [
        'Awesome typescript starter kit',
        br(),
        img({ attrs: { src: './assets/avatar.png' } })
      ]
    )
  )
  const sinks = {
    DOM: vtree$
  }
  return sinks
}
