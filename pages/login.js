import React, { Component } from 'react'
import { MainBar } from '../src/components/MainBar'
import { DocumentHeader } from '../src/components/DocumentHeader'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Router from 'next/router'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleInputChange (e) {
    this.setState({ username: e.target.value })
  }

  handleSubmit (e) {
    e.preventDefault()
    const { username } = this.state
    if (!username.length) return
    localStorage.setItem('@GoTwitter:username', username)
    Router.push('/index')
  }
  render () {
    return (
      <div>
        <DocumentHeader />
        <MainBar />
        <Container>
          <Row className='justify-content-md-center'>
            <Col md='6'>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId='formBasicEmail'>
                  <Form.Label>Login</Form.Label>
                  <Form.Control placeholder='Username' value={this.state.username} onChange={this.handleInputChange} />
                </Form.Group>
                <Button variant='primary' type='submit'>
                  {'Submit'}
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default Login
