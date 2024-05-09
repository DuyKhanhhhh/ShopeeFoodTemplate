import React from 'react'
import HeadMerchant from '../compoment/HeadMerchant'
import '../css/CreateMerchant.css';

export default function CreateMerchant() {
    return (
        <div className='body'>
            <HeadMerchant />
            <div className='container' >
                <div className='containerCreate '>
                    <div className='title'>Thông tin đăng ký quán</div>

                    <form>
                        <div className="row mb-3">
                            <label class="col-sm-2 col-form-label"><span className='warning'>*</span> Tên quán </label>
                            <div className="col-sm-10">
                                <input type="text" class="form-control" id="namme" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label class="col-sm-2 col-form-label"><span className='warning'>*</span> Số điện thoại</label>
                            <div className="col-sm-10">
                                <input type="number" class="form-control" id="phoneNumber" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label class="col-sm-2 col-form-label"><span className='warning'>*</span>  Email</label>
                            <div className="col-sm-10">
                                <input type="email" class="form-control" id="email" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label class="col-sm-2 col-form-label"><span className='warning'>*</span>  Địa chỉ</label>
                            <div className="col-sm-10">
                                <select class="form-select" aria-label="Default select example">
                                    <option value="1">Ha Noi</option>
                                    <option value="2">TP. Ho Chi Minh</option>
                                    <option value="3">Dang Nang</option>
                                    <option value="3">Hue</option>
                                </select>
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
                            <label class="col-sm-2 col-form-label"><span className='warning'>*</span> Giờ mở cửa</label>
                            <div className="col-sm-10">
                                <input type="text" class="form-control" id="namme" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label class="col-sm-2 col-form-label"><span className='warning'>*</span> Giờ đóng cửa</label>
                            <div className="col-sm-10">
                                <input type="text" class="form-control" id="namme" />
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
        </div>
    )
}
