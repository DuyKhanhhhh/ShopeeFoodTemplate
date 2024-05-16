import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../css/LayoutMarchant.css'
import '../css/cs.css'
import '../css/table.css'
import '../css/LayoutMarchant.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTrash, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import HeaderMerchant from "../compoment/HeadMerchant.js";
import { Link } from "react-router-dom";

function FoodList() {
    const [menuProducts, setMenuProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const params = useParams();

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
            const response = await axios.get(`http://localhost:8080/api/menus/${params.id}`);
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
    }, [params.id, searchQuery]);

    const handleSearch = (e) => {
        e.preventDefault();
        fetchData();
    };

    return (
        <>
            <HeaderMerchant/>
            <div className="container">
                <div className="container row mt-3">
                    <div className="col-xs-12 col-md-6 title">
                        <Link className="btnSave" to={'/createFood'}>+ Thêm Sẩn Phẩm</Link>


                    </div>
                    <form className="col-xs-12 col-md-6 right" onSubmit={handleSearch}>
                        <div className="input-group">
                            <input
                                type="text"

                                className="form-control "


                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="btn btn-primary" type="submit">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                    </form>
                </div>

                {menuProducts.map((menuProduct, index) => (
                    <div key={index}>
                        {menuProduct.products.length > 0 && (
                            <>
                                <h3 style={{ textAlign: "center" }}>{menuProduct.menu.name}</h3>
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
                                        {menuProduct.products.map((product, index) => (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{product.name}</td>
                                                <td>{product.price} VND</td>
                                                <td><img className='image' src={`http://localhost:8080/img/${product.image}`} alt="" /></td>
                                                <td>{product.quantity}</td>
                                                <td>{product.detail}</td>
                                                <td>
                                                    <FontAwesomeIcon className="icon" icon={faTrash} />
                                                    <FontAwesomeIcon className="icon" icon={faPenSquare} />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </>
                        )}

                    </div>
                ))}
               
            </div>
        </>
    );
}

export default FoodList;