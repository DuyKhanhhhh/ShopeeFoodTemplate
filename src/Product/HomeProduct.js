import React, { useEffect, useState } from 'react'
import HeadHome from '../compoment/HeadHome'
import '../css/LayoutHome.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
export default function HomeProduct() {
    const [product, setProduct] = useState([]);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [timeStart, setTimeStart] = useState('');
    const [timeEnd, setTimeEnd] = useState('');
    const [selectedCityId, setSelectedCityId] = useState(1);
    const [selectedCategoryId, setSelectedCategoryId] = useState(1);
    const [menus, setMenus] = useState([]);
    async function getProduct() {
        const response = await axios.get(`http://localhost:8080/api/shops/2`)
        setProduct(response.data);
        setName(response.data.name)
        setAddress(response.data.address)
        setPhoneNumber(response.data.phoneNumber)
        setEmail(response.data.email)
        setImage(response.data.image)
        setTimeStart(response.data.timeStart)
        setTimeEnd(response.data.timeEnd)
        setSelectedCityId(response.data.idCity);
        setSelectedCategoryId(response.data.idCategory);
    }

    async function getMenu() {
        const response = await axios.get(`http://localhost:8080/menus/2`)
        console.log(response.data);
        setMenus(response.data);
    }

    useEffect(() => {
        getProduct();
        getMenu();
    }, []);

    return (
        <div>
            <HeadHome />
            <div className='now-detail-restaurant clearfix'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-5'>
                            <div className='detail-restaurant-img'>
                                <img src='https://mms.img.susercontent.com/vn-11134513-7r98o-lsv8oqhuykzoa8@resize_ss640x400!@crop_w640_h400_cT'></img>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='detail-restaurant-info'>
                                <div className='kind-restaurant'>
                                    <div className='tag-preferred'></div>
<span>Quán ăn</span>
                                </div>
                                <h1 className='name-restaurant'>{name}</h1>
                                <div className='address-restaurant'>{address}</div>
                                <div className='rating'>
                                    <div className='stars'>
                                        <span className='full'>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className='full'>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className='full'>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className='full'>
                                            <FontAwesomeIcon icon={faStar} />
                                        </span>
                                        <span className='half'>
                                            <FontAwesomeIcon icon={faStarHalfStroke} />
                                        </span>
                                        <span className='number-rating'>10+</span>
                                        <span className='color-black'>đánh giá trên ShopeeFood</span>
                                    </div>
                                </div>
                                <div className='status-restaurant'>
                                    <div className='time'>
                                        <FontAwesomeIcon icon={faClock} className='faClock' />{timeStart} -{timeEnd}
                                    </div>
                                </div>
                                <div className='status-restaurant'>
                                    <span><FontAwesomeIcon icon={faPhone} className='faClock' />{phoneNumber}</span>
                                </div>
                                <div className='status-restaurant'>
                                    <span><FontAwesomeIcon icon={faEnvelope} className='faClock' />{email}</span>
                                </div>
                                <div className='cost-restaurant'>
                                    <span><FontAwesomeIcon icon={faSackDollar} /> 10.000 - 100.000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="container relative clearfix">
                <div className='now-menu-restauran'>
                    <div className='menu-restaurant-tab'>
                        <div className='item active'>Thực Đơn</div>
                    </div>
<div class="row">
                        <div class="col">
                            <div className='menu-restaurant-category'>
                                <div className='list-category'>
                                    <div className='scrollbar-container ps'>
                                        <div className='item'>
                                            {menus.map((menu) => (
                                                <span className='item-link'>{menu.name}</span>
                                            ))}
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
                                            <div className='col-auto item-restaurant-more'>
                                                <div className='row'>
                                                    <div className='col-auto product-price'>
                                                        <div className='current-price'>
                                                            111.200
<span className='price'>đ</span>
                                                        </div>
                                                    </div>
                                                    <div className='col-auto adding-food-cart txt-right'>
                                                        <div className='btn-adding'>+</div>
                                                    </div>
                                                </div>
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
                                            <div className='col-auto item-restaurant-more'>
                                                <div className='row'>
                                                    <div className='col-auto product-price'>
                                                        <div className='current-price'>
                                                            111.200
                                                            <span className='price'>đ</span>
                                                        </div>
                                                    </div>
                                                    <div className='col-auto adding-food-cart txt-right'>
                                                        <div className='btn-adding'>+</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>   <div className='memu-group'>
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
                                            <div className='col-auto item-restaurant-more'>
                                                <div className='row'>
                                                    <div className='col-auto product-price'>
                                                        <div className='current-price'>
                                                            111.200
                                                            <span className='price'>đ</span>
                                                        </div>
                                                    </div>
                                                    <div className='col-auto adding-food-cart txt-right'>
                                                        <div className='btn-adding'>+</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div className='cart-restaurant'>
                                <div className='title-cart'>Giỏ hàng</div>
                                <div className='restaurant-cart'>
                                    <div className='item-cart col'>
                                        <div>Ga Nuong</div>
                                        <div className='inputQuantity'>
                                            <button className='btnQuantity'>
                                                -
                                            </button>
                                            <input
                                                type="text"
                                                className='quantity-value'
placeholder='1'
                                            />
                                            <button className='btnQuantity'>
                                                +
                                            </button>
                                        </div>
                                        <div>60.000</div>
                                    </div>
                                </div>
                                <div className='restaurant-checkout'>
                                    <button type='button'>Thanh Toan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}