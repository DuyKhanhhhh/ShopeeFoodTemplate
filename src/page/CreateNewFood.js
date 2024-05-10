import { keyboard } from "@testing-library/user-event/dist/keyboard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../css/cs.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import HeaderMerchant from "../compoment/HeadMerchant.js";
function CreateNewFood(){
    return(
    <>
<body>
<HeaderMerchant/>
<div className='container' >
                <div className='containerCreate '>
                    <div className='title'>Thêm món ăn mới</div>

                    <form>
                        <div className="row mb-3">
                            <label class="col-sm-2 col-form-label"><span className='warning'>*</span> Tên món </label>
                            <div className="col-sm-10">
                                <input type="text" class="form-control"  />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label class="col-sm-2 col-form-label"><span className='warning'>*</span>  Danh mục món ăn của quán</label>
                            <div className="col-sm-10">
                                <input type="text" class="form-control"  />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label class="col-sm-2 col-form-label"><span className='warning'>*</span>   Thời gian chuẩn bị </label>
                            <div className="col-sm-10">
                                <input type="email" class="form-control"  />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label class="col-sm-2 col-form-label"><span className='warning'>*</span>  Danh mục</label>
                            <div className="col-sm-10">
                                <select class="form-select" aria-label="Default select example">
                                    <option value="1">Do An</option>
                                    <option value="2">Sieu Thi</option>
                                    <option value="3">Thuc Pham</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label class="col-sm-2 col-form-label"><span className='warning'>*</span> Giá tiền</label>
                            <div className="col-sm-10">
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label class="col-sm-2 col-form-label"><span className='warning'>*</span> Lượt thích</label>
                            <div className="col-sm-10">
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label class="col-sm-2 col-form-label"><span className='warning'>*</span> Lượt đặt</label>
                            <div className="col-sm-10">
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label class="col-sm-2 col-form-label"><span className='warning'>*</span>  Ảnh</label>
                            <div className="col-sm-10">
                                <input type="file" class="form-control" id="image" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label class="col-sm-2 col-form-label"></label>
                            <div className='col'>
                                <button className=' btnBack'>Quay lại</button>
                                <button className=' btnSave'>Lưu</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
</body>
    </>
    )
}

export default CreateNewFood;