import { Card, Button } from 'react-bootstrap'
const TwittCard = () => (
  <div className='twitt'>
    <Card>
      <Card.Body>
        <Card.Title>Twitt</Card.Title>
        <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
        </Card.Text>
        <Button>Like</Button>
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
