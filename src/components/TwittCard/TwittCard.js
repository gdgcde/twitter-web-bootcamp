import { Card, Button } from 'react-bootstrap'
const TwittCard = (props) => (
  <div className='twitt'>
    <Card>
      <Card.Body>
        <Card.Title>{props.item.username}</Card.Title>
        <Card.Text>{props.item.content}</Card.Text>
        <Button>Like</Button> <span>{` + ${props.item.likes}`}</span>
      </Card.Body>
    </Card>
    <style jsx>{`
        .twitt {
            margin-top: 10px;
        }
    `}</style>
  </div>
)

export default TwittCard
