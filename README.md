[![Build Status](https://drone.stackdot.com/api/badges/stackdot/sketch-tool/status.svg?maxAge=60)](https://drone.stackdot.com/stackdot/sketch-tool) [![dependencies Status](https://img.shields.io/david/stackdot/sketch-tool.svg?maxAge=60)](https://david-dm.org/stackdot/sketch-tool) [![Coverage Status](https://coveralls.io/repos/github/stackdot/sketch-tool/badge.svg?branch=master)](https://coveralls.io/github/stackdot/sketch-tool?branch=master)

[![Issue Count](https://codeclimate.com/github/stackdot/sketch-tool/badges/issue_count.svg)](https://codeclimate.com/github/stackdot/sketch-tool) [![Code Climate](https://codeclimate.com/github/stackdot/sketch-tool/badges/gpa.svg)](https://codeclimate.com/github/stackdot/sketch-tool)

[![Node Version](https://img.shields.io/node/v/sketch-tool.svg?maxAge=60)](https://www.npmjs.com/package/sketch-tool) [![NPM Version](https://img.shields.io/npm/v/sketch-tool.svg?maxAge=60)](https://www.npmjs.com/package/sketch-tool)  [![NPM License](https://img.shields.io/npm/l/sketch-tool.svg?maxAge=60)](https://www.npmjs.com/package/sketch-tool) 







Sketch Tool
===

Library to use SketchTool CLI tool more easily







Requirements:
---

- [NodeJS](https://nodejs.org/en/download/) ( Version 6+ )
 - We recommend using [Node Version Manager](https://github.com/creationix/nvm)



#TODO: Add docs


To Get Started:
---

- Install the package in your project

```bash
npm install sketch-tool --save
```

To use:
```javascript

const SketchTool = require('sketch-tool')
const Sketch = new SketchTool({
	foo: 'bar'
})

```


[JSDocs Documentation](https://stackdot.github.io/sketch-tool/index.html)








Enabling the Debugger
---

To enable [debug](https://github.com/visionmedia/debug) logs, enable them via environment variables.

To see all debug logs from this app, set the env variable:

```bash
DEBUG=sketch-tool*
```

Running with your project:

```bash
DEBUG=sketch-tool* node myproject.js
```










License
----

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
