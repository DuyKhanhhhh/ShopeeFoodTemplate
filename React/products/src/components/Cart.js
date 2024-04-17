import React, { useState } from 'react'

export default function Cart() {
    let [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')))

    return (
        <div>
            <table className="container table table-striped-columns ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody >
                    {cart.map((item, index) => {
                        return (
                            <tr>
                                <th scope="row" key={index.id}>{index + 1}</th>
                                <td ><img className='images' src={'http://localhost:8080/public/' + item.image} alt={item.name} /></td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.describe}</td>
                                <td><button type="button" class="btn btn-danger">Danger</button></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}
