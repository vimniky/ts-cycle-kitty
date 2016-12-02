import { run } from '@cycle/xstream-run'
import { makeDOMDriver } from '@cycle/dom'
import { makeHTTPDriver } from '@cycle/http'
import { App } from './app'

const drivers = {
  DOM: makeDOMDriver('#app'),
  HTTP: makeHTTPDriver(),
}

run(App, drivers)
