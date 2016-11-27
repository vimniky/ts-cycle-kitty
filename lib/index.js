"use strict";
var xstream_run_1 = require('@cycle/xstream-run');
var dom_1 = require('@cycle/dom');
var app_1 = require('./app');
var main = app_1.App;
var drivers = {
    DOM: dom_1.makeDOMDriver('#app')
};
xstream_run_1.run(main, drivers);
//# sourceMappingURL=index.js.map