import React, { Component } from 'react'
import { Form, InputGroup, Button, Row } from 'react-bootstrap'
import Query from '../../api/Query'
import Router from 'next/router'
import styles from './styles'
class TwittInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      newTweet: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleTwittButton = this.handleTwittButton.bind(this)
  }

  handleInputChange (event) {
    this.setState({
      newTweet: event.target.value
    })
  }

  handleTwittButton (event) {
    event.preventDefault()
    const author = localStorage.getItem('@GoTwitter:username')
    const content = this.state.newTweet
    const tweet = {
      author: author,
      content: content
    }

    try {
      Query({
        method: 'POST',
        url: '/tweets',
        data: tweet
      })
      Router.push('/')
    } catch (error) {
      console.log(error)
    }

    this.setState({ newTweet: '' })
  }

  render () {
    return (
      <div className='twittInput'>
        <Form onSubmit={this.handleTwittButton}>
          <Form.Group controlId='formBasicTwitt'>
            <InputGroup className='mb-3'>
              <InputGroup.Prepend>
                <InputGroup.Text>@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control placeholder='Twitt' value={this.state.newTweet} onChange={this.handleInputChange} />
            </InputGroup>
          </Form.Group>

          <Button variant='primary' type='submit'>
            {'Twittear'}
          </Button>

        </Form>
        <style jsx>{styles}</style>
      </div>

    )
  }
}

export default TwittInput
