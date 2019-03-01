import { InputGroup, FormControl } from 'react-bootstrap'
import styles from './styles'
const TwittInput = () => (
  <div className='twittInput'>
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text>@</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl placeholder='New Twitt' aria-label='Some Twitt' />
    </InputGroup>
    <style jsx>{styles}</style>
  </div>
)

export default TwittInput
