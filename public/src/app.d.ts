import { VNode } from '@cycle/dom';
import { DOMSource } from '@cycle/dom/xstream-typings';
import { Stream } from 'xstream';
export declare type Sources = {
    DOM: DOMSource;
};
export declare type Sinks = {
    DOM: Stream<VNode>;
};
export declare function App(sources: Sources): Sinks;
