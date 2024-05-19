import React from 'react'
import HeadHome from '../compoment/HeadHome'
import '../css/LayoutHome.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useEffect, useState } from "react";
export default function HomeProduct() {
    const [menuProducts, setMenuProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [idShop,setIdShop] = useState(11);
    const [idUser,setIdUser] = useState(2);
    
    async function addProductToCart(idShop,idUser,idProduct,e){

        const reponse = await axios.post(`http://localhost:8080/api/detailCart/${idUser}/${idShop}/${idProduct}`);
        
    }
    async function findByNameAndMenu(menuId, productName) {
        try {
            const productResponse = await axios.get(`http://localhost:8080/api/products/FindByPByName/${menuId}?productName=${productName}`);
            return productResponse.data;
        } catch (error) {
            console.error('Error fetching product data:', error);
            return [];
        }
    }

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/menus/11`);
            const menus = response.data;

            const menuProductsPromises = menus.map(async (menu) => {
                const menuId = menu.id;
                const products = await findByNameAndMenu(menuId, searchQuery);
                return {
                    menu: menu,
                    products: products
                };
            });

            const menuProductsData = await Promise.all(menuProductsPromises);
            setMenuProducts(menuProductsData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [1, searchQuery]);

    const handleSearch = (e) => {
        e.preventDefault();
        fetchData();
    };

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
                                    
                                        <form className='input-group' onSubmit={handleSearch}>
                                        <input className='form-control' type='search' name="searchKey" placeholder="Tìm món" onChange={(e) => setSearchQuery(e.target.value)}/>
                                        <button type='button' className='btnSearch'>
                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                        </button>
                                        </form>
                                        
                                    
                                </div>
                                {menuProducts.map((menuProduct, index) => (
                                <div key={index} className='memu-group'>
                                    {menuProduct.products.length > 0 && (
                                        <>
                                    <div className='title-menu'>
                                    {menuProduct.menu.name}
                                    </div>
                                    {menuProduct.products.map((product, index) => (
                                    <div className='item-restaurant-row '>
                                        <div className='row'>
                                            <div className='col-auto item-restaurant-img'>
                                                <img className='img-item' src={`http://localhost:8080/img/${product.image}`}></img>
                                            </div>
                                            <div className='col item-restaurant-info'>
                                                <h2 className='item-restaurant-name'>{product.name}</h2>
                                                <div className='item-restaurant-desc'> {product.detail}</div>
                                            </div>
                                            <div className='col-auto item-restaurant-more'>
                                                <div className='row'>
                                                    <div className='col-auto product-price'>
                                                        <div className='current-price'>
                                                        {product.price} 
                                                            <span className='price'>đ</span>
                                                        </div>
                                                    </div>
                                                    <div className='col-auto adding-food-cart txt-right'>
                                                        <div className='btn-adding'><button onClick={() =>  addProductToCart(idShop,idUser,product.id)}>+</button></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                    </>
                                    )}
                                </div>      
                                 ))}                                                                       
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
