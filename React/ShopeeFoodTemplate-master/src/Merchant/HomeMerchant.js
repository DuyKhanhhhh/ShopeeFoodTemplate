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
            <div className='header-content navbar row  justify-content-between align-items-center'>
                <div className='logo col-auto'>
                    <span>
                        <Link to={'/'}> <img src='https://shopeefood.vn/app/assets/img/shopeefoodvn.png?4aa1a38e8da801f4029b80734905f3f7'></img></Link>
                    </span>
                </div>
                <div className='selectLocal col-auto'>
                    <div className='dropdown'>
                        <div class="dropdown-toggle" role="button" id="local-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Ha Noi
                        </div>
                        <div className='dropdown-menu'>
                            <div className='dropdown-item'>
                                <span className='name col'>Ha Noi</span>
                                <span className='name col'>Ha Noi</span>
                                <span className='name col'>Ha Noi</span>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='main-nav col'>
                    <div className='nav-item'>Do An</div>
                    <div className='nav-item'>Do An</div>
                </div>
                <div>

                </div>
                <div className='user-acc col-auto'>
                    <div className='dropdown'>
                        <div class="dropdown-toggle" role="button" id="local-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className='img'>
                                <img src='https://cdn-icons-png.flaticon.com/512/1144/1144760.png'></img>
                            </div>
                            <span className='name'>User</span>
                        </div>
                        <div className='dropdown-menu'>
                            <div className='dropdown-item'>
                                <span className='name col'>Ha Noi</span>
                                <span className='name col'>Ha Noi</span>
                                <span className='name col'>Ha Noi</span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HeadMerchant />
            <div className='container'>
                <div className='row flex-container mt-5'>
                    <div className='col-xs-12 col-md-6 title'>Đăng Ký Quán</div>
                    <div className='col-xs-12 col-md-6 right'>
                        <Link to={'/createMerchant'} className=' btnCreate'>Tạo quán mới</Link>
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
        </div >
    )
}
