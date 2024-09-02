import { Table } from 'react-bootstrap'
import { useSelector } from "react-redux"

function Cart() {

    let a = useSelector((state) => { return state.bascket })
    console.log(a)

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
                            <td>안녕</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Cart