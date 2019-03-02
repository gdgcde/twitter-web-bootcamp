import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import Query from '../../api/Query'

class TwittCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      likes: props.item.likes
    }
    this.handleLike = this.handleLike.bind(this)
  }

  async handleLike () {
    const { _id } = this.props.item
    await Query({
      method: 'POST',
      url: '/likes/' + _id
    })
    this.setState({
      likes: this.state.likes + 1
    })
  }
  render () {
    return (
      <div className='twitt'>
        <Card>
          <Card.Body>
            <Card.Title>{this.props.item.username}</Card.Title>
            <Card.Text>{this.props.item.content}</Card.Text>
            <Button onClick={this.handleLike}>Like</Button> <span>{` + ${this.state.likes}`}</span>
          </Card.Body>
        </Card>
        <style jsx>{`
        .twitt {
            margin-top: 10px;
        }
    `}</style>
      </div>
    )
  }
}
export default TwittCard
