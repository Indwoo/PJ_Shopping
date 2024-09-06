import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap"
import { useDispatch } from "react-redux"
import {additem} from './../store.js'


function Detail(props) {

  let dispatch = useDispatch()

  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id
  });

  let [tab, changeTab] = useState(0);
  let [dt_fade, set_dt_Fade] = useState('')

  useEffect(() => {
    let watched = new Set(JSON.parse(localStorage.getItem('watched')));

    watched.add(찾은상품.id);

    localStorage.setItem('watched', JSON.stringify(Array.from(watched)));

    set_dt_Fade('end')
    return () => {
      set_dt_Fade('')
    }
  }, [찾은상품.id])

  return (
    <div className={`container start ${dt_fade}`}>
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${찾은상품.id + 1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger" onClick={() => {
            dispatch(additem({ id: 1, name: 'Red Knit', count: 1 }))
          }}>주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => { changeTab(0) }}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={() => { changeTab(1) }}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={() => { changeTab(2) }}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tab={tab} />
    </div>
  )
}

function TabContent(props) {

  let [fade, setFade] = useState('')

  useEffect(() => {
    setTimeout(() => { setFade('end') }, 100)
    return () => {
      setFade('')
    }
  }, [props.tab])

  return (<div className={`start ${fade}`}>
    {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.tab]}
  </div>)
}
export default Detail;