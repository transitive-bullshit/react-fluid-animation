# react-fluid-animation ([demo](https://transitive-bullshit.github.io/react-fluid-animation/))

> Fluid media simulation for React powered by WebGL.

[![NPM](https://img.shields.io/npm/v/react-fluid-animation.svg)](https://www.npmjs.com/package/react-fluid-animation) [![Build Status](https://travis-ci.com/transitive-bullshit/react-fluid-animation.svg?branch=master)](https://travis-ci.com/transitive-bullshit/react-fluid-animation) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![Demo](https://raw.githubusercontent.com/transitive-bullshit/react-fluid-animation/master/example/demo.gif)](https://transitive-bullshit.github.io/react-fluid-animation/)

Ported by [Pavel Dobryakov](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation).

## Install

```bash
npm install --save react-fluid-animation
```

## Usage

Check out the [demo](https://transitive-bullshit.github.io/react-fluid-animation/).

```jsx
import React, { Component } from 'react'

import FluidAnimation from 'react-fluid-animation'

import image from './example.jpg'

export default class App extends Component {
  render () {
    return (
      <FluidAnimation
        style={{ width: '100vw', height: '100vh' }}
        texture={image}
      />
    )
  }
}

```

## Props

TODO

## Credits

The original version of this awesome fluid simulation was published by [Pavel Dobryakov](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation).

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)
