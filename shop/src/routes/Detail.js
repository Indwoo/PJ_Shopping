import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {Nav} from "react-bootstrap"

function Detail(props) {

  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id
  });

  let [alert_Hidden, setAlertHidden] = useState(false);
  let [user_input, isInt] = useState('');
  let [tab, changeTab] = useState(0);

  useEffect(() => {
    let a = setTimeout(() => { setAlertHidden(true) }, 2000)
    if (isNaN(user_input) && user_input !== '') {
      alert('숫자만 입력하세요.');
    }
    return () => {
      clearTimeout(a)
    }
  }, [user_input])

  return (
    <div className="container">
      {alert_Hidden ? null : (<div className="alert alert-warning">
        2초 이내 구매시 할인
      </div>)}
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${찾은상품.id + 1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => {changeTab(0)}}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={() => {changeTab(1)}}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={() => {changeTab(2)}}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tab={tab}/>
    </div>
  )
}

function TabContent(props){
  if(props.tab == 0){
    return <div>내용1</div>
  }
  else if(props.tab==1){
    return <div>내용2</div>
  }
  else{
    return <div>내용3</div>
  }
}

export default Detail;