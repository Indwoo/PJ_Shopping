import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import data from './data'
import Detail from './routes/Detail';
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar expand="lg" className="bg-dark-subtle">
        <Container>
          <Navbar.Brand href="/">Indwoo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link  onClick={()=>{navigate('/')}}>Home</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
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
          </>
        } />
        <Route path='/detail' element={<Detail></Detail>}></Route>

        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>멤버 정보</div>}></Route>
          <Route path='location' element={<div>위치 정보</div>}></Route>
        </Route>

        <Route path='/event' element={<Event/>}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>

        <Route path="*" element = {<div> 없는 페이지입니다. </div>}></Route>
      </Routes>

    </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
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
