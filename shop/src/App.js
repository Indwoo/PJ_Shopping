import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import data from './data'
import Detail from './routes/Detail';
import { Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Cart from './routes/Cart';

function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('watched')) {
      localStorage.setItem('watched', JSON.stringify([]));
    }
  }, []);

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-dark-subtle">
        <Container>
          <Navbar.Brand href="/">Indwoo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
              <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
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

      <Routes>
        <Route path='/' element={
          <>
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
            <button onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result) => {
                  let newShoes = [...shoes, ...result.data];
                  setShoes(newShoes);
                })
                .catch(() => {
                  console.log('실패했습니다.')
                })
            }}>더보기</button>
          </>
        } />

        <Route path='/detail/:id' element={<Detail shoes={shoes} />} />

        <Route path='/cart' element={<Cart />} />

        <Route path="*" element={<div> 없는 페이지입니다. </div>}></Route>
      </Routes>

    </div>
  );
}

function Products(props) {
  return (
    <>
      <div className='col-md-4'>
        <img src={`https://codingapple1.github.io/shop/shoes${props.index + 1}.jpg`} width="80%" alt={props.product.title}></img>
        <h4>{props.product.title}</h4>
        <p>{props.product.content}</p>
        <h4>{props.product.price}</h4>
      </div>
    </>
  )
}

export default App;
