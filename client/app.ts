import { VNode, div, img, h1 } from '@cycle/dom'
import { DOMSource } from '@cycle/dom/xstream-typings'
import xs, { Stream } from 'xstream'

export type Sources = {
  DOM: DOMSource,
}

export type Sinks = {
  DOM: Stream<VNode>,
}

const attrs = {
  style: {
    'text-shadow': '2px 2px 2px red',
    'text-align': 'center',
    color: '#efefef',
  },
}

export function App(sources: Sources): Sinks {
  const vtree$ = xs.of(
    div(
      '.app',
      attrs,
      [
        h1('Let\'s get kitty ^_^#~ !'),
        img({ attrs: { src: './assets/avatar.png' } }),
      ],
    ),
  )
  const sinks = {
    DOM: vtree$,
  }
  return sinks
}
