import { VNode, div, img, h1, i, input, p, br } from '@cycle/dom'
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
  const inputEvent$ = sources.DOM.select('.field').events('input')
  const name$ = inputEvent$.map(ev => (<any>ev.target).value).startWith('kitty')
  const vtree$ =
    name$.map(name =>
      div('.app',
        attrs,
        [
          h1([
            'Hello kitty ',
            i('.fa.fa-snowflake-o'),
          ]),
          br(),
          input('.field', { type: 'text' }),
          p(`Hello ${name}`),
          img({ attrs: { src: './assets/avatar.png' } }),
        ],
      ),
    )
  const sinks = {
    DOM: vtree$,
  }
  return sinks
}
