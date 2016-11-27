"use strict";
var dom_1 = require('@cycle/dom');
var xstream_1 = require('xstream');
function App(sources) {
    var vtree$ = xstream_1.default.of(dom_1.div('My Awesome Cycle.js app'));
    var sinks = {
        DOM: vtree$
    };
    return sinks;
}
exports.App = App;
//# sourceMappingURL=app.js.map