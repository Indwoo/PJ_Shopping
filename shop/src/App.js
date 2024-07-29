import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import data from './data'

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-dark-subtle">
        <Container>
          <Navbar.Brand href="#home">Indwoo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <div className='container'>
        <div className='row'>
          {shoes.map(function (shoes, i) {
            return (
              <Products product={shoes} key={i} index={i} />
            )
          })}

        </div>
      </div>
    </div>
  );
}

function Products(props) {
  return (
    <>
      <div className='col-md-4'>
        <img src={`https://codingapple1.github.io/shop/shoes${props.index+1}.jpg`} width="80%" alt={props.product.title}></img>
        <h4>{props.product.title}</h4>
        <p>{props.product.content}</p>
        <h4>{props.product.price}</h4>
      </div>
    </>
  )
}

export default App;
