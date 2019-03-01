import { Navbar, Nav } from 'react-bootstrap'

const MainBar = () => (
  <Navbar bg='light' expand='lg'>
    <Navbar.Brand href='#home'>GDG BootCamp</Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='mr-auto'>
        <Nav.Link href='#home'>Twitt</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default MainBar
