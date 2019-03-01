import { Container, Row, Col } from 'react-bootstrap'
import { TwittInput } from '../TwittInput'
import { TwittCard } from '../TwittCard'

const TimeLine = () => (
  <Container>
    <Row className='justify-content-md-center'>
      <Col md='6'>
        <TwittInput />
        <TwittCard />
      </Col>
    </Row>
  </Container>
)

export default TimeLine
