import { keyboard } from "@testing-library/user-event/dist/keyboard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import '../css/cs.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import HeaderMerchant from "../compoment/HeadMerchant.js";
function UpdateMerchant() {
    const navigate = useNavigate()
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [timeStart, setTimeStart] = useState('');
    const [timeEnd, setTimeEnd] = useState('');
    const [idCity, setIdCity] = useState([]);
    const [selectedCityId, setSelectedCityId] = useState(1); 
    const [idCategory, setIdCategory] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(1); 
    const params = useParams();
  
   

    async function CreateMerchant(e) {
        e.preventDefault();
        try {
            var formData = new FormData();
                    formData.append('name', name);
                    formData.append('address', address);
                    formData.append('phoneNumber', phoneNumber);
                    formData.append('email', email);
                   
            if (image !== null) {
                formData.append('image', image);
            }
                    formData.append('timeStart', timeStart);
                    formData.append('timeEnd', timeEnd);
                    formData.append('idCity', selectedCityId);
                    formData.append('idCategory', selectedCategoryId);
            const response = await axios.put(`http://localhost:8080/api/shops/${params.id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            navigate('/')
            console.log('Product created:', response.data);
        } catch (error) {
            console.error('Error creating product:', error);
        }
    }
    async function listProduct() {
        const reponse = await axios.get(`http://localhost:8080/api/shops/${params.id}`)
        console.log(reponse.data)
        setName(reponse.data.name)
        setAddress(reponse.data.address)
        setPhoneNumber(reponse.data.phoneNumber)
        setEmail(reponse.data.email)
        setImage(reponse.data.image)
        setTimeStart(reponse.data.timeStart)
        setTimeEnd(reponse.data.timeEnd) 
        setSelectedCityId(reponse.data.idCity); // Chọn idCity tương ứng với dữ liệu đã được lấy
        setSelectedCategoryId(reponse.data.idCategory); // Chọn idCategory tương ứng với dữ liệu đã được lấy
    }
 
    async function getListCity() {
        
        try {
            const response = await axios.get(`http://localhost:8080/api/cities`);
            console.log(response.data)
            setIdCity(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching menus:', error);
        }
    }


    function handleCityChange(e) {
        const selectedValue = e.target.value;
        console.log(selectedValue);
        setSelectedCityId(selectedValue);
    }
    async function getListCategory() {

        try {
            const response = await axios.get(`http://localhost:8080/api/categories`);
            console.log(response.data)
            setIdCategory(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching menus:', error);
        }
    }


    function handleCategoryChange(e) {
        const selectedValue = e.target.value;
        console.log(selectedValue);
        setSelectedCategoryId(selectedValue);
    }
    function handleImageChange(e) {
        const file = e.target.files[0];
        setImage(file);
    }
    useEffect(() => {
        listProduct()
        getListCity();
        getListCategory();
    }, [])

    return (
        <>
            <body>
                <HeaderMerchant />

                <section className="vh-100" style={{ backgroundColor: '#ffffff' }}>
                    <form onSubmit={CreateMerchant}>
                        <div className='container' >
                            <div className='containerCreate '>
                                <div className='title'>Thông tin đăng ký quán</div>


                                <div className="row mb-3">

                                    <label class="col-sm-2 col-form-label"><span className='warning'>*</span> Tên quán </label>
                                    <div className="col-sm-10">
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} class="form-control" id="namme" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label class="col-sm-2 col-form-label"><span className='warning'>*</span> Số điện thoại</label>
                                    <div className="col-sm-10">
                                        <input type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} class="form-control" id="phoneNumber" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label class="col-sm-2 col-form-label"><span className='warning'>*</span>  Email</label>
                                    <div className="col-sm-10">
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" id="email" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label class="col-sm-2 col-form-label"><span className='warning'>*</span>  Địa chỉ </label>
                                    <div className="col-sm-10">
                                        <input type="email" value={address}  onChange={(e) => setAddress(e.target.value)} class="form-control" id="text" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-sm-2 col-form-label"><span className='warning'>*</span>  Thành phố</label>
                                    <div className="col-md-9 pe-5">
                                        <select className="form-select" onChange={handleCityChange} value={selectedCityId}>
                                            {idCity.map((city) => (
                                                <option key={city.id} value={city.id}>
                                                    {city.name}
                                                </option>
                                            ))}
                                        </select>
                                 

                                    </div>
                                 
                                </div>
                                <div className="row mb-3">
                                    <label class="col-sm-2 col-form-label"><span className='warning'>*</span>  Danh mục</label>
                                    <div className="col-sm-10">
                                        <select class="form-select" onChange={handleCategoryChange} value={selectedCategoryId}>
                                            {idCategory.map((category) => (
                                                <option key={category.id} value={category.id}>
                                                    {category.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label class="col-sm-2 col-form-label"><span className='warning'>*</span> Giờ mở cửa</label>
                                    <div className="col-sm-10">
                                        <input type="text" value={timeStart}  onChange={(e) => setTimeStart(e.target.value)} class="form-control" id="namme" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label class="col-sm-2 col-form-label"><span className='warning'>*</span> Giờ đóng cửa</label>
                                    <div className="col-sm-10">
                                        <input type="text" value={timeEnd} onChange={(e) => setTimeEnd(e.target.value)} class="form-control" id="namme" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label class="col-sm-2 col-form-label"><span className='warning'>*</span>  Ảnh</label>
                                    <div className="col-sm-10">
                                        <input type="file"   onChange={handleImageChange} class="form-control" id="image" />
                                    </div>
                                </div>


                                <div className="row mb-3">
                                    <label class="col-sm-2 col-form-label"></label>
                                    <div className='col'>
                                        <Link to={"/"} className=' btnBack'>Quay lại</Link>
                                        <button type="submit" className="btn btn-primary btn-lg">
                                            Lưu
                                        </button>
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

export default UpdateMerchant;