# react-fluid-animation ([demo](https://transitive-bullshit.github.io/react-fluid-animation/))

> Fluid media simulation for React powered by WebGL.

[![NPM](https://img.shields.io/npm/v/react-fluid-animation.svg)](https://www.npmjs.com/package/react-fluid-animation) [![Build Status](https://travis-ci.com/transitive-bullshit/react-fluid-animation.svg?branch=master)](https://travis-ci.com/transitive-bullshit/react-fluid-animation) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![Demo](https://raw.githubusercontent.com/transitive-bullshit/react-fluid-animation/master/example/demo.gif)](https://transitive-bullshit.github.io/react-fluid-animation/)

This is a port of the WebGL fluid animation by [Pavel Dobryakov](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation), which itself is a port of [GPU Gems Chapter 38](http://developer.download.nvidia.com/books/HTML/gpugems/gpugems_ch38.html). It provides a very fast, stable fluid simulation by iteratively solving the Navier-Stokes equations for incompressible flow.

## Install

```bash
npm install --save react-fluid-animation
```

## Usage

Check out the [demo](https://transitive-bullshit.github.io/react-fluid-animation/).

```jsx
import React, { Component } from 'react'

import FluidAnimation from 'react-fluid-animation'

export default class App extends Component {
  render () {
    return (
      <FluidAnimation
        style={{ height: '100vh' }}
      />
    )
  }
}

```

## Props

TODO

## Credits

- [Pavel Dobryakov](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation) - Original WebGL fluid experiment by Pavel Dobryakov. This project is a direct port and extension of Pavel's excellent work.
- [GPU Gems Chapter 38](http://developer.download.nvidia.com/books/HTML/gpugems/gpugems_ch38.html) - Fast fluid dynamics simulation on the GPU.
- [jwagner](https://github.com/jwagner/fluidwebgl) - Similar WebGL implementation.
- [haxiomic](https://github.com/haxiomic/GPU-Fluid-Experiments) - Alternative WebGL fluid experiment.

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)

Support my OSS work by <a href="https://twitter.com/transitive_bs">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
