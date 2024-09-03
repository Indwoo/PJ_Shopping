import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { changeName } from './../store/userSlice.js'
import {changeCnt} from './../store.js'

function Cart() {

    let a = useSelector((state) => { return state.bascket })
    let dispatch = useDispatch()
    let state = useSelector((state) => { return state })

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {a.map((item, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.count}</td>
                            <td>
                                <button onClick={() => dispatch(changeCnt(state.bascket[i].id))}>
                                    +
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Cart