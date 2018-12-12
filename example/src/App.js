import React, { Component } from 'react'

import FluidAnimation from 'react-fluid-animation'
import GitHubCorner from 'react-github-corner'

export default class App extends Component {
  render () {
    return (
      <div
        style={{
          height: '100vh'
        }}
      >
        <FluidAnimation />

        <div
          style={{
            position: 'absolute',
            zIndex: 1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: '1em',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            fontFamily: 'Quicksand, "Helvetica Neue", sans-serif',
            pointerEvents: 'none'
          }}
        >
          <h1
            style={{
              fontSize: '3em',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)'
            }}
          >
            React Fluid Animation
          </h1>
        </div>

        <GitHubCorner
          href='https://github.com/transitive-bullshit/react-fluid-animation'
          bannerColor='#70B7FD'
        />
      </div>
    )
  }
}
