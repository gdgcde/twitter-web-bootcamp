import { Container, Row, Col } from 'react-bootstrap'
import { TwittInput } from '../TwittInput'
import { TwittCard } from '../TwittCard'
const twtts = [{
  username: 'Juan',
  content: 'Some random text',
  likes: 12
},
{
  username: 'Juan',
  content: 'other stuff',
  likes: 250
}]

const TimeLine = () => (
  <Container>
    <Row className='justify-content-md-center'>
      <Col md='6'>
        <TwittInput />
        {twtts.map((tw, index) => (
          <TwittCard key={index} item={tw} />
        ))}
      </Col>
    </Row>
  </Container>
)

export default TimeLine
