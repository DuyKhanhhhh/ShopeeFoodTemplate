import axios from "axios";
import { useEffect, useState } from "react";
import '../css/LayoutOrederAndListOrderItem.css';
import { Link, useNavigate } from "react-router-dom";
import HeadHome from "../compoment/HeadHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../css/LayoutHome.css';
import { faHouse ,faBriefcase,faLocationDot,faWallet,faMoneyBill,faMoneyCheckDollar,faBuildingColumns} from '@fortawesome/free-solid-svg-icons';
export default function OrderAndListOrderItem() {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [sum, setSum] = useState(0);
    const [address,setAddress] = useState([]);
    const navigater = useNavigate();
    const [shop,setShop]=useState([]);
    async function CreateOrder(e) {
        e.preventDefault()
        try {
            const orderResponse = await axios.post(`http://localhost:8080/api/order/1/1`);
            console.log('đặt hàng thành công', orderResponse.data);
            navigater('/HomeProduct')
        } catch (error) {
            console.error('Error fetching order data:', error);
            return [];
        }
        
    }
    async function getShop(){
        const response=await axios.get(`http://localhost:8080/api/shops/1`)
        setShop(response.data);
    }
    async function getAddressList() {
        try {
            const response = await axios.get(`http://localhost:8080/api/address/1`);
            setAddress(response.data);
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }

    }

    async function getOrderItem() {
        try {
            const response = await axios.get(`http://localhost:8080/api/detailCart/1/1`);
            setCart(response.data);
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    }

    useEffect(() => {
        getShop();
        getOrderItem();
        getAddressList();
    }, []);

    function formatNumberWithCommas(number) {
        return number.toLocaleString('de-DE');
    }

    const calculateOrderTotal = (orderItems) => {
        return orderItems.reduce((total, item) => {
            return total + (item.quantity * item.product.price);
        }, 0);
    };
    const Showcar = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/detailCart/1/1`);
            setCart(response.data);
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };

    // Add a product to the cart
    const addProductToCart = async (idShop, idUser, idProduct) => {
        try {
            const response = await axios.post(`http://localhost:8080/api/detailCart/1/1/${idProduct}`);
            console.log('Product added to cart:', response.data); 
            Showcar();
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };

    // Handle quantity decrease
    const handleMinus = async (id) => {
        try {
            await axios.put(`http://localhost:8080/api/detailCart/minus/${id}`);
            Showcar();
        } catch (error) {
            if (error.response && error.response.status === 204) {
                Showcar();
            } else {
                console.error('Error subtracting quantity from cart:', error);
            }
        }
    };

    // Handle quantity increase
    const handlePlus = async (id) => {
        try {
            await axios.put(`http://localhost:8080/api/detailCart/plus/${id}`);
            Showcar();
        } catch (error) {
            console.error('Error adding quantity to cart:', error);
        }
    };

    // Calculate total sum
    const calculateSum = (cart) => {
        let total = 0;
        cart.forEach(item => {
            total += item.product.price * item.quantity;
        });
        return total;
    };

    // Update the total sum when cart changes
    useEffect(() => {
        setSum(calculateSum(cart));
    }, [cart]);

    // Initial data fetch for cart
    useEffect(() => {
        Showcar();
    }, []);

    return (
        <div>
            <HeadHome />
        <div class="container-for container">
        <div class="div1">
            <div className="div3">
            Thanh toán đơn hàng
            </div>
            <div className="div5">
            <div>
                    <label className="The-text">Chọn địa chỉ giao hàng</label>
                </div>
            <div className="div4">
                
                <div class="itemG">
                <FontAwesomeIcon className="div-icon ms-10" icon={faHouse}/>
                <div className="div-text-in">
                   <div className="div-NameAddress">Home</div> 
                   <div className="div-text-in-text">njsadmnfsjdfsdm ffdnsdjfndngd fgdfngf hsabdbdsfbsdhfbdsfhgdfbg</div>
                   <div className="div-text-in-text">Ni Han Wyu</div>
                   <button className="button-eidt">giao tới địa chỉ này </button>
                </div>
                </div>
                <div class="itemG">
                <FontAwesomeIcon className="div-icon" icon={faBriefcase}/>
                <div className="div-text-in">
                <div className="div-NameAddress">Work</div> 
                   <div className="div-text-in-text">njsadmnfsjdfsdm ffdnsdjfndngd fgdfngf hsabdbdsfbsdhfbdsfhgdfbg</div>
                   <div className="div-text-in-text">Ni Han Wyu</div>
                   <button className="button-eidt">giao tới địa chỉ này </button>
                </div>
                </div>
                <div class="itemG">
                <FontAwesomeIcon className="div-icon" icon={faLocationDot}/>
                <div className="div-text-in">
                <div className="div-NameAddress">Other</div> 
                   <div className="div-text-in-text">njsadmnfsjdfsdm ffdnsdjfndngd fgdfngf hsabdbdsfbsdhfbdsfhgdfbg</div>
                   <div className="div-text-in-text">Ni Han Wyu</div>
                   <button className="button-eidt">giao tới địa chỉ này </button>
                </div>
                </div>
                <div class="itemG">
                <FontAwesomeIcon className="div-icon" icon={faLocationDot}/>
                <div className="div-text-in">
                <div className="div-NameAddress">Other</div> 
                   <div className="div-text-in-text">njsadmnfsjdfsdm ffdnsdjfndngd fgdfngf hsabdbdsfbsdhfbdsfhgdfbg</div>
                   <div className="div-text-in-text">Ni Han Wyu</div>
                   <button className="button-eidt">Thêm địa chỉ giao hàng mới </button>
                </div>
                </div>
                
                </div>
                </div>
            <div className="div6">
                <label className="The-text">
                Phương thức thanh toán
                </label>
                <label className="little-text">
                Thanh Toán khi nhận hàng
                </label>
                <div className="div7">
                    <div className="div9">
                    <div className="div8">
                    <FontAwesomeIcon className="div-iconic" icon={faMoneyBill}/>
                    <label className="text-cutevl">COD</label>
                    </div>
                    <div className="color">
                    <FontAwesomeIcon className="div-iconic" icon={faMoneyCheckDollar}/>
                    <label className="text-cutevl">Credit</label>
                    </div>
                    <div className="color">
                    <FontAwesomeIcon className="div-iconic" icon={faBuildingColumns}/>
                    <label className="text-cutevl">Netbanking</label>
                    </div>
                    </div>
                    <div className="div10">
                        <label className="label-hihi"> Ghi chú cho cửa hàng</label>
                        <textarea className="label-hihi-text form-control" placeholder="Cửa hàng nên lưu ý..."></textarea>
                    </div>
                </div>
            </div>
        </div>
       
        <div class="div2">
        <div className="col">
                            <div className='cart-restaurant'>
                                <div className='title-cart'>{shop.name}</div>
                                <div className='restaurant-cart'>
                                    {cart.map((item) => (
                                        <div key={item.id}>
                                            <div className=''>
                                                <div className='row'>
                                                    <div className='col-5 name-cart'>{item.product.name}</div>
                                                    <div className='inputQuantity col-3'>
                                                        <button className='btnQuantity' onClick={() => handleMinus(item.id)}>-</button>
                                                        <input type="text" className='quantity-value' value={item.quantity} readOnly />
                                                        <button className='btnQuantity' onClick={() => handlePlus(item.id)}>+</button>
                                                    </div>
                                                    <div className='col-4 price-cart'>{formatNumberWithCommas(item.product.price)} đ</div>
                                                </div>
                                                <hr/>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='restaurant-checkout'>
                                    <div className='restaurant-price'>
                                        <FontAwesomeIcon className='iconWallet' icon={faWallet} /> <span className='sumPrice'>Tổng: {formatNumberWithCommas(sum)} đ</span>
                                    </div>
                                      <form className="payment-form">
                          <Link to="/OrderAndListOrderItem" className="payment-button">+ Xác nhận thanh toán</Link>
                             </form>
                                </div>
                            </div>
                            </div>
                            </div>
        </div>
        </div>
    );
}