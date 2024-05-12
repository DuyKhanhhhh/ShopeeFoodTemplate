import React, { useEffect, useState } from 'react'
import HeadMerchant from '../compoment/HeadMerchant'
import '../css/LayoutMarchant.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function HomeMerchant() {
    const [shop, setShop] = useState([]);
    useEffect(() => {
        showShop();
    }, []);
    const showShop = async () => {
        const result = await axios.get("http://localhost:8080/api/shops")
        setShop(result.data);
        console.log(result.data);
    };
    return (
        <div>
            <HeadMerchant />
            <div className='container'>
                <div className='row flex-container '>
                    <div className='col-xs-12 col-md-6 title'>Đăng Ký Quán</div>
                    <div className='col-xs-12 col-md-6 right'>
                        <Link to={'/create'} className=' btnCreate'>Tạo quán mới</Link>
                    </div>
                </div>
                <div className='tabContainer'>
                    <span className='textOrange'>Quán của tôi (1)</span>
                </div>
                <div className='listShop'>
                    {shop.map(item => (
                        <div className='carShop'>
                            <img className='image' src={process.env.PUBLIC_URL + '/img/' + item.image} alt="" />
                            <span className='carShopNameText'>{item.name}</span>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}
