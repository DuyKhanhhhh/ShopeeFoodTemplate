import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../css/LayoutMarchant.css';
import '../css/cs.css';
import '../css/table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTrash, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import HeaderMerchant from "../compoment/HeadMerchant.js";
import { Link } from "react-router-dom";

function FoodList() {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(0); // Add state for current page
    const [totalPages, setTotalPages] = useState(1); // Add state for total pages
    const params = useParams();

    async function findByNameAndMenu(menuId, productName, page) {
        try {
            const productResponse = await axios.get(`http://localhost:8080/api/products/FindByPByNameAndPage/${menuId}?productName=${productName}&page=${page}&size=3`);
            return productResponse.data;
        } catch (error) {
            console.error('Error fetching product data:', error);
            return { content: [], totalPages: 1 };
        }
    }

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/menus/${params.id}`);
            const menus = response.data;

            const allProductsPromises = menus.map(async (menu) => {
                const menuId = menu.id;
                const productsPage = await findByNameAndMenu(menuId, searchQuery, page);
                return productsPage;
            });

            const allProductsPages = await Promise.all(allProductsPromises);
            const allProducts = allProductsPages.flatMap(productsPage => productsPage.content);
            setProducts(allProducts);

            // Assuming all pages have the same totalPages
            if (allProductsPages.length > 0) {
                setTotalPages(allProductsPages[0].totalPages);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [params.id, searchQuery, page]);

    const handleSearch = (e) => {
        e.preventDefault();
        setPage(0); // Reset to first page on new search
        fetchData();
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 0 && newPage < totalPages) {
            setPage(newPage);
        }
    };

    return (
        <>
            <HeaderMerchant />
            <div className="container">

                <div className="container row mt-3">
                    <div className="col-xs-12 col-md-6 title">
                        <Link className="btnSave" to={'/createFood'}>+ Thêm Sản Phẩm</Link>
                    </div>
                    <form className="col-xs-12 col-md-6 right" onSubmit={handleSearch}>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
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

                {products.length > 0 && (
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
                            {products.map((product, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{product.name}</td>
                                    <td>{product.price} VND</td>
                                    <td><img className='image' src={`http://localhost:8080/img/${product.image}`} alt="" /></td>
                                    <td>{product.quantity} sản phẩm</td>
                                    <td>{product.detail}</td>
                                    <td>
                                        <FontAwesomeIcon className="icon" icon={faTrash} />
                                        <FontAwesomeIcon className="icon" icon={faPenSquare} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-right">
                        <li className={`page-item ${page === 0 ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(page - 1)}>Previous</button>
                        </li>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <li key={i} className={`page-item ${i === page ? 'active' : ''}`}>
                                <button className="page-link" onClick={() => handlePageChange(i)}>{i + 1}</button>
                            </li>
                        ))}
                        <li className={`page-item ${page + 1 === totalPages ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(page + 1)}>Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default FoodList;