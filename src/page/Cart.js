import React, { useEffect, useState } from 'react'
import axios from "axios";
function Cart(){
    const [detailCarts,setDetailCart] = useState([]);

    async function getAllDetailcCart(){
        const response = await axios.get(`http://localhost:8080/api/detailCart/12/2`);
        console.log("abc"+response.data);
        setDetailCart(response.data);
        console.log(detailCarts);
        
    }
    useEffect(() => {
        getAllDetailcCart();
    }, []);
    
    return (
        <>
              <table className="table table-image">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Tên</th>
                                            <th scope="col">Giá</th>
                                            <th scope="col">Ảnh</th>
                                            <th scope="col">Số lượng món ăn</th>
                                            <th scope="col">Chi tiết</th>
                                            <th scope="col">Công cụ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {detailCarts.map((detailCart, index) => (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{detailCart.product.name}</td>
                                                <td>{detailCart.product.price} VND</td>
                                                <td><img className='image' src={`http://localhost:8080/img/${detailCart.product.image}`} alt="" /></td>
                                                <td>{detailCart.product.quantity}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
        </>
    )
}
export default Cart;