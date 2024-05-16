import { keyboard } from "@testing-library/user-event/dist/keyboard";
import axios from "axios";
import { useEffect, useState } from "react";

import '../css/cs.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import HeaderMerchant from "../compoment/HeadMerchant.js";
import Validation from "./Validation.js";
import { useNavigate } from "react-router-dom";


function CreateNewFood() {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [menus, setMenus] = useState([]);
  const [selectedMenuId, setSelectedMenuId] = useState(1); // Mặc định chọn menu đầu tiên
  const [values, setValues] = useState({
    name: '',
    price: '',
    quantity: '',
    detail: '',

  })
  const [errors, setErrors] = useState({})
  function handleInput(event){
    const newObj = {...values,[event.target.name]: event.target.value}
    setValues(newObj)
  }

function handleValidation(event){
  event.preventDefault();
  setErrors(Validation(values)) ;
}
  async function getListMenu() {
    try {
      const response = await axios.get(`http://localhost:8080/menus`);
      setMenus(response.data);
    } catch (error) {
      console.error('Error fetching menus:', error);
    }
  }
  useEffect(() => {
    getListMenu();
  }, []);
  function handleMenuChange(e) {
    const selectedValue = e.target.value;
    setSelectedMenuId(selectedValue);
  }
  function handleImageChange(e) {
    const file = e.target.files[0];
    setImage(file);
  }
  async function handleSubmit(event) {
    event.preventDefault();
   
    const validationErrors = Validation(values); // Assuming Validation function returns errors object
    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors);
      return;
    }
    if (!image) {
      setErrors({ ...errors, image: "Cần có ảnh" });
      return;
    }
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("price", values.price);
    formData.append("quantity", values.quantity);
    formData.append("detail", values.detail);
    formData.append("image", image);
    formData.append('menus', selectedMenuId);
    try {
      await axios.post("http://localhost:8080/api/products", formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      navigate('/')
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
  return (
    <>
      {/* <HeaderMerchant /> */}

      <section className="vh-100" style={{ backgroundColor: '#ffffff' }}>
        <form onSubmit={handleSubmit}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-9">
                <div className="card" style={{ borderRadius: '15px' }}>
                  <div className="card-body">
                    <div className="row align-items-center pt-4 pb-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Tên</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                        name="name"
                          type="text"
                          value={values.name}
                          onChange={handleInput}
                          className="form-control form-control-lg"
                        />
                        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

                      </div>
                      
                    </div>
                    <hr className="mx-n3" />
                    <div className="row align-items-center pt-4 pb-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Giá</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input type="number" 
                        name="price"
                          value={values.price}
                        onChange={handleInput}
                        className="form-control form-control-lg" />
                        {errors.price && <p style={{ color: "red" }}>{errors.price}</p>}
                      </div>
                    </div>
                    <hr className="mx-n3" />
                    <div className="row align-items-center pt-4 pb-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Danh mục</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <select className="form-select" onChange={handleMenuChange} value={selectedMenuId}>
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
                        <input type="number" 
                          name="quantity"
                          value={values.quantity}
                          onChange={handleInput}
                         className="form-control form-control-lg" />
                        {errors.quantity && <p style={{ color: "red" }}>{errors.quantity}</p>}
                      </div>
                    </div>
                    <hr className="mx-n3" />
                    <div className="row align-items-center pt-4 pb-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Mô tả</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input type="text" 
                          name="detail"
                          value={values.detail}
                          onChange={handleInput}
                          className="form-control form-control-lg" />
                       
                        {errors.detail && <p style={{ color: "red" }}>{errors.detail}</p>}
                      </div>
                    </div>
                    <hr className="mx-n3" />
                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">HÌnh ảnh món ăn</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input type="file"
                          name="image"
                         onChange={handleImageChange} 
                         id="formFileLg" className="form-control  form-control-lg" />
                        {errors.image && <p style={{ color: "red" }}>{errors.image}</p>}
                      </div>
                    </div>
                    <hr className="mx-n3" />
                    <div className="px-5 py-4">
                      <input type="submit" value={"Luu"} className="btn btn-primary btn-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default CreateNewFood;