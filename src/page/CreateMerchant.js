import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeadMerchant from "../compoment/HeadMerchant";
import "../css/LayoutMarchant.css";

export default function CreateMerchant() {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [timeStart, setTimeStart] = useState("");
    const [timeEnd, setTimeEnd] = useState("");
    const [citys, setCity] = useState([]);
    const [selectCity, setSelectCity] = useState(1);
    const [categorys, setCategory] = useState([]);
    const [selectCategory, setSelectCategory] = useState(1);
    const [image, setImage] = useState("");
    const [idUser, setIdUser] = useState('')

    const navigate = useNavigate();

    async function CreateMerchant(e) {
        e.preventDefault();
        console.log(name)
        console.log("Select city: ".selectCity)

        try {
            var formData = new FormData();

            formData.append('name', name);
            formData.append('phoneNumber', phoneNumber);
            formData.append('email', email);
            formData.append('timeStart', timeStart);
            formData.append('timeEnd', timeEnd);
            formData.append('idCity', selectCity);
            formData.append('idCategory', selectCategory);
            formData.append('image', image);
            formData.append('idUser', 1);
            // const jsonData = formDataToJson(formData);
            const response = await axios.post(`http://localhost:8080/api/shops`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            navigate('/');
            console.log('Product created:', response.data);
        } catch (error) {
            console.error('Error creating product:', error);
        }
    }
    async function getAllCity() {
        const reponse = await axios.get("http://localhost:8080/api/cities");
        setCity(reponse.data);
        console.log("Select city: ".selectCity)
    }
    async function getAllCategory() {
        const reponse = await axios.get("http://localhost:8080/api/categories");
        setCategory(reponse.data);
    }
    useEffect(() => {
        getAllCity();
        getAllCategory();
    }, []);

    function handleCategoryChange(e) {
        console.log(e.target.value);
        setSelectCategory(e.target.value);
    }
    function handleCityChange(e) {
        console.log(e.target.value);
        setSelectCity(e.target.value);
    }
    function handleImageChange(e) {
        const file = e.target.files[0];
        setImage(file);
    }
    return (
        <div>
            <HeadMerchant />
            <div className="container">
                <div className="containerCreate ">
                    <div className="title">Thông tin đăng ký quán</div>

                    <form onSubmit={CreateMerchant} >
                        <div className="row mb-3">
                            <label class="col-sm-2 col-form-label">
                                <span className="warning">*</span> Tên quán{" "}
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="namme"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label class="col-sm-2 col-form-label">
                                <span className="warning">*</span> Số điện thoại
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="number"
                                    class="form-control"
                                    id="phoneNumber"
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label class="col-sm-2 col-form-label">
                                <span className="warning">*</span> Email
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label class="col-sm-2 col-form-label">
                                <span className="warning">*</span> Địa chỉ
                            </label>
                            <div className="col-sm-10">
                                <select
                                    class="form-select"
                                    aria-label="Default select example"
                                    onChange={handleCityChange}
                                    value={selectCity}
                                >
                                    {citys.map((city) => (
                                        <option key={city.id} value={city.id}>
                                            {city.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label class="col-sm-2 col-form-label">
                                <span className="warning">*</span> Danh mục
                            </label>
                            <div className="col-sm-10">
                                <select
                                    class="form-select"
                                    aria-label="Default select example"
                                    onChange={handleCategoryChange}
                                    value={selectCategory}
                                >
                                    {categorys.map((category) => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label class="col-sm-2 col-form-label">
                                <span className="warning">*</span> Giờ mở cửa
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="namme"
                                    onChange={(e) => setTimeStart(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label class="col-sm-2 col-form-label">
                                <span className="warning">*</span> Giờ đóng cửa
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="namme"
                                    onChange={(e) => setTimeEnd(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label class="col-sm-2 col-form-label">
                                <span className="warning">*</span> Ảnh
                            </label>
                            <div className="col-sm-10">
                                <input type="file" class="form-control" id="image" onChange={handleImageChange} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label class="col-sm-2 col-form-label"></label>
                            <div className="col">
                                <Link to={'/'} className=" btnBack ">Quay lại</Link>
                                <button type="submit" className=" btnSave">Lưu</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}

