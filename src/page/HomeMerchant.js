import React from 'react'
import HeadMerchant from '../compoment/HeadMerchant'
import '../css/LayoutMarchant.css';
import { Link } from 'react-router-dom';

export default function HomeMerchant() {
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
                    <div></div>
                </div>
            </div>
        </div>
    )
}
