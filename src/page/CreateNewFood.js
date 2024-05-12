import { keyboard } from "@testing-library/user-event/dist/keyboard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../css/cs.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import HeaderMerchant from "../compoment/HeadMerchant.js";
function CreateNewFood() {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState(null);
  const [detail, setDetail] = useState('');
  const [menus, setMenus] = useState([]);
  const [selectedMenuId, setSelectedMenuId] = useState(1); // Mặc định chọn menu đầu tiên
  async function createProduct(e) {
    e.preventDefault();
    console.log(name);
    console.log(price);
    console.log(quantity);
    console.log(image);
    console.log(detail);
    console.log(selectedMenuId);

    try {
      var formData = new FormData();

      formData.append('name', name);
      formData.append('price', price);
      formData.append('quantity', quantity);
      formData.append('image', image);
      formData.append('detail', detail);
      formData.append('menus', selectedMenuId);

      const response = await axios.post(`http://localhost:8080/products`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      navigate('/')
      console.log('Product created:', response.data);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  }

  async function getListMenu() {
    try {
      const response = await axios.get(`http://localhost:8080/menus`);
      setMenus(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching menus:', error);
    }
  }

  useEffect(() => {
    getListMenu();
  }, []);

  function handleMenuChange(e) {
    const selectedValue = e.target.value;
    console.log(selectedValue);
    setSelectedMenuId(selectedValue);
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    setImage(file);
  }

  return (
    <>
      <body>
        <HeaderMerchant />

        <section className="vh-100" style={{ backgroundColor: '#ffffff' }}>
          <form onSubmit={createProduct}>
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-xl-9">
                  <h1 className="text-white mb-4">Apply for a job</h1>
                  <div className="card" style={{ borderRadius: '15px' }}>
                    <div className="card-body">
                      <div className="row align-items-center pt-4 pb-3">
                        <div className="col-md-3 ps-5">
                          <h6 className="mb-0">Tên</h6>
                        </div>
                        <div className="col-md-9 pe-5">
                          <input
                            type="text"
                            onChange={(e) => {
                              if (e.target.value.trim() !== '') {
                                setName(e.target.value);
                              }
                            }}
                            className="form-control form-control-lg"
                          />
                        </div>
                      </div>
                      <hr className="mx-n3" />
                      <div className="row align-items-center pt-4 pb-3">
                        <div className="col-md-3 ps-5">
                          <h6 className="mb-0">Giá</h6>
                        </div>
                        <div className="col-md-9 pe-5">
                          <input type="number" onChange={(e) => setPrice(e.target.value)} className="form-control form-control-lg" />
                        </div>
                      </div>
                      <hr className="mx-n3" />
                      <div className="row align-items-center pt-4 pb-3">
                        <div className="col-md-3 ps-5">
                          <h6 className="mb-0">Danh mục</h6>
                        </div>
                        <div className="col-md-9 pe-5">
                          <select onChange={handleMenuChange} value={selectedMenuId}>
                            {menus.map((menu) => (
                              <option key={menu.id} value={menu.id}>
                                {menu.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <hr className="mx-n3" />
                      <div className="row align-items-center pt-4 pb-3">
                        <div className="col-md-3 ps-5">
                          <h6 className="mb-0">Số lượng</h6>
                        </div>
                        <div className="col-md-9 pe-5">
                          <input type="number" onChange={(e) => setQuantity(e.target.value)} className="form-control form-control-lg" />
                        </div>
                      </div>
                      <hr className="mx-n3" />
                      <div className="row align-items-center pt-4 pb-3">
                        <div className="col-md-3 ps-5">
                          <h6 className="mb-0">Mô tả</h6>
                        </div>
                        <div className="col-md-9 pe-5">
                          <input type="text" onChange={(e) => setDetail(e.target.value)} className="form-control form-control-lg" />
                        </div>
                      </div>
                      <hr className="mx-n3" />
                      <div className="row align-items-center py-3">
                        <div className="col-md-3 ps-5">
                          <h6 className="mb-0">HÌnh ảnh món ăn</h6>
                        </div>
                        <div className="col-md-9 pe-5">
                          <input type="file" onChange={handleImageChange} id="formFileLg" className="form-control  form-control-lg" />
                        </div>
                      </div>
                      <hr className="mx-n3" />
                      <div className="px-5 py-4">
                        <button type="submit" className="btn btn-primary btn-lg">
                          Lưu
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </body>
    </>
  );
}

export default CreateNewFood;