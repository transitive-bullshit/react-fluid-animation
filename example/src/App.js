import React, { Component } from 'react'

import '../node_modules/react-dat-gui/build/react-dat-gui.css'
import DatGui, { DatNumber, DatSelect, DatButton } from 'react-dat-gui'

import FluidAnimation from 'react-fluid-animation'
import GitHubCorner from 'react-github-corner'

// import image from './lena.png'

const defaultConfig = {
  textureDownsample: 1,
  densityDissipation: 0.98,
  velocityDissipation: 0.99,
  pressureDissipation: 0.8,
  pressureIterations: 25,
  curl: 30,
  splatRadius: 0.005
}

export default class App extends Component {
  state = {
    config: {
      ...defaultConfig
    }
  }

  render () {
    const {
      config
    } = this.state

    return (
      <div
        style={{
          height: '100vh'
        }}
      >
        <FluidAnimation
          config={config}
          animationRef={this._animationRef}
        />

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
          direction='left'
        />

        <DatGui data={config} onUpdate={this._onUpdate}>
          <DatSelect
            path='textureDownsample'
            label='Texture Downsample'
            options={[ 0, 1, 2 ]}
          />

          <DatNumber
            path='densityDissipation'
            label='Density Diffusion'
            min={0.9}
            max={1.0}
          />

          <DatNumber
            path='velocityDissipation'
            label='Velocity Diffusion'
            min={0.9}
            max={1.0}
          />

          <DatNumber
            path='pressureDissipation'
            label='Pressure Diffusion'
            min={0.0}
            max={1.0}
          />

          <DatNumber
            path='pressureIterations'
            label='Pressure Iterations'
            min={1}
            max={60}
            step={1}
          />

          <DatNumber
            path='curl'
            label='Curl'
            min={0}
            max={50}
            step={1}
          />

          <DatNumber
            path='splatRadius'
            label='Splat Radius'
            min={0.0001}
            max={0.02}
          />

          <DatButton
            label='Random Splats'
            onClick={this._onClickRandomSplats}
          />

          <DatButton
            label='Reset Config'
            onClick={this._onReset}
          />
        </DatGui>
      </div>
    )
  }

  _animationRef = (ref) => {
    this._animation = ref
  }

  _onUpdate = (config) => {
    this.setState({ config })
  }

  _onClickRandomSplats = () => {
    this._animation.addSplats(5 + Math.random() * 20 | 0)
  }

  _onReset = () => {
    this.setState({ config: { ...defaultConfig } })
  }
}
