import React, { Component } from 'react'
import { MainBar } from '../src/components/MainBar'
import { DocumentHeader } from '../src/components/DocumentHeader'
import { TimeLine } from '../src/components/TimeLine'
import Router from 'next/router'
class Index extends Component {
  componentDidMount () {
    localStorage.getItem('@GoTwitter:username') === null ? Router.push('/login') : null
  }
  render () {
    return (
      <div>
        <DocumentHeader />
        <MainBar />
        <TimeLine />
      </div>
    )
  }
}

export default Index
