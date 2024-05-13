import { keyboard } from "@testing-library/user-event/dist/keyboard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../css/cs.css'
import '../css/table.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import HeaderMerchant from "../compoment/HeadMerchant.js";
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
function FoodList() {
    const [searchList, setSearchList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    async function searchListData(query) {
        try {
            let endpoint = 'http://localhost:8080/api/products/ProductListByMenuId/1';
            if (query) {
                endpoint = `http://localhost:8080/api/products/FindByPByName/1?productName=${query}`;
            }
            const response = await axios.get(endpoint);
            setSearchList(response.data);
        } catch (error) {
            console.error('Lỗi khi lấy kết quả tìm kiếm:', error);
        }
    }

    useEffect(() => {
        searchListData('');
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        searchListData(searchQuery);
    };

    return (
        <>
            <HeaderMerchant>Hello</HeaderMerchant>
            <div className="container">
                <div>
                    <form className="search-form" onSubmit={handleSearch}>
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
                <div className="row">
                    <div className="col-12">
                        <table className="table table-image">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Tên</th>
                                    <th scope="col">Giá</th>
                                    <th scope="col">Số lượng</th>
                                    <th scope="col">Ảnh</th>
                                    <th scope="col">Chi tiết</th>
                                    <th scope="col">Công cụ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchList.map((item, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.quantity}</td>
                                        <td>
                                            <image src={process.env.PUBLIC_URL + '/' + item.image}></image>
                                        </td>
                                        <td>{item.detail}</td>
                                        <td>
                                        <FontAwesomeIcon icon={faTrash} />
                                        <FontAwesomeIcon icon={faPenSquare} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FoodList;