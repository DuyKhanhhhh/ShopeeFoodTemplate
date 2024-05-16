import React from 'react'
import HeadHome from '../compoment/HeadHome'
import '../css/LayoutHome.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
export default function HomeProduct() {
    return (
        <div>
            <HeadHome />
            <div className='now-detail-restaurant clearfix'>
                <div className='container'>
                    <div className='detail-restaurant-img'>
                        <img src='https://mms.img.susercontent.com/vn-11134513-7r98o-lsv8oqhuykzoa8@resize_ss640x400!@crop_w640_h400_cT'></img>
                    </div>
                    <div className='detail-restaurant-info'>
                        <div className='kind-restaurant'>
                            <div className='tag-preferred'></div>
                            <span>Quán ăn</span>
                        </div>
                        <h1 className='name-restaurant'>Gà Tươi Mạnh Hoạch - Phố Thú Y</h1>
                        <div className='address-restaurant'>57 Phố Thú Y, X. Đức Thượng, Hoài Đức, Hà Nội</div>
                        <div className='time'></div>
                    </div>
                </div>
            </div>
            <div class="container relative clearfix">
                <div className='now-menu-restauran'>
                    <div className='menu-restaurant-tab'>
                        <div className='item active'>Thuc Don</div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div className='menu-restaurant-category'>
                                <div className='list-category'>
                                    <div className='scrollbar-container ps'>
                                        <div className='item'>
                                            <span className='item-link'>Món Đang Giảm  </span>
                                            <span className='item-link'>Món Đang Giảm  </span>
                                            <span className='item-link'>Món Đang Giảm  </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div className='menu-restaurant-detail'>
                                <div className='search-items mt-2'>
                                    <div className='input-group'>
                                        <input className='form-control' type='search' name="searchKey" placeholder="Tìm món" />
                                        <button type='button' className='btnSearch'>
                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                        </button>
                                    </div>
                                </div>

                                <div className='memu-group'>
                                    <div className='title-menu'>
                                        Món Đang Giảm
                                    </div>
                                    <div className='item-restaurant-row '>
                                        <div className='row'>
                                            <div className='col-auto item-restaurant-img'>
                                                <img className='img-item' src='https://mms.img.susercontent.com/vn-11134517-7r98o-lskyw51yc68pd3@resize_ss120x120!@crop_w120_h120_cT'></img>
                                            </div>
                                            <div className='col item-restaurant-info'>
                                                <h2 className='item-restaurant-name'>Gà tươi rán (Nửa con) + Pepsi</h2>
                                                <div className='item-restaurant-desc'>Giảm 22K khi đặt combo Pepsi từ 50K. Số lượng có hạn mỗi ngày.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='memu-group'>
                                    <div className='title-menu'>
                                        Món Đang Giảm
                                    </div>
                                    <div className='item-restaurant-row '>
                                        <div className='row'>
                                            <div className='col-auto item-restaurant-img'>
                                                <img className='img-item' src='https://mms.img.susercontent.com/vn-11134517-7r98o-lskyw51yc68pd3@resize_ss120x120!@crop_w120_h120_cT'></img>
                                            </div>
                                            <div className='col item-restaurant-info'>
                                                <h2 className='item-restaurant-name'>Gà tươi rán (Nửa con) + Pepsi</h2>
                                                <div className='item-restaurant-desc'>Giảm 22K khi đặt combo Pepsi từ 50K. Số lượng có hạn mỗi ngày.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='memu-group'>
                                    <div className='title-menu'>
                                        Món Đang Giảm
                                    </div>
                                    <div className='item-restaurant-row '>
                                        <div className='row'>
                                            <div className='col-auto item-restaurant-img'>
                                                <img className='img-item' src='https://mms.img.susercontent.com/vn-11134517-7r98o-lskyw51yc68pd3@resize_ss120x120!@crop_w120_h120_cT'></img>
                                            </div>
                                            <div className='col item-restaurant-info'>
                                                <h2 className='item-restaurant-name'>Gà tươi rán (Nửa con) + Pepsi</h2>
                                                <div className='item-restaurant-desc'>Giảm 22K khi đặt combo Pepsi từ 50K. Số lượng có hạn mỗi ngày.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='memu-group'>
                                    <div className='title-menu'>
                                        Món Đang Giảm
                                    </div>
                                    <div className='item-restaurant-row '>
                                        <div className='row'>
                                            <div className='col-auto item-restaurant-img'>
                                                <img className='img-item' src='https://mms.img.susercontent.com/vn-11134517-7r98o-lskyw51yc68pd3@resize_ss120x120!@crop_w120_h120_cT'></img>
                                            </div>
                                            <div className='col item-restaurant-info'>
                                                <h2 className='item-restaurant-name'>Gà tươi rán (Nửa con) + Pepsi</h2>
                                                <div className='item-restaurant-desc'>Giảm 22K khi đặt combo Pepsi từ 50K. Số lượng có hạn mỗi ngày.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col">
                            3 of 3
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
