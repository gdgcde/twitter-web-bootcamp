import React, { Component } from 'react'
import { MainBar } from '../src/components/MainBar'
import { DocumentHeader } from '../src/components/DocumentHeader'
import { TimeLine } from '../src/components/TimeLine'
import Router from 'next/router'
import Query from '../src/api/Query';

class Index extends Component {
  static async getInitialProps (context) {
    const res = await Query({
      method: 'GET',
      url: `/tweets`
    })
    console.log('RESPONSE', res)
    return { tweets: res.data }
  }
  componentDidMount () {
    localStorage.getItem('@GoTwitter:username') === null ? Router.push('/login') : null
  }
  render () {
    return (
      <div>
        <DocumentHeader />
        <MainBar />
        <TimeLine tweets={this.props.tweets} />
      </div>
    )
  }
}

export default Index
