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
<section className="vh-100" style={{ backgroundColor: '#ffffff' }}>
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
                    <input type="text" className="form-control form-control-lg" />
                  </div>
                </div>
                <hr className="mx-n3" />
                <div className="row align-items-center pt-4 pb-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Giá</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input type="text" className="form-control form-control-lg" />
                  </div>
                </div>
                <hr className="mx-n3" />
                <div className="row align-items-center pt-4 pb-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Danh mục</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input type="text" className="form-control form-control-lg" />
                  </div>
                </div>
                <hr className="mx-n3" />
                <div className="row align-items-center pt-4 pb-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Thời gian bán</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input type="text" className="form-control form-control-lg" />
                  </div>
                </div>
                <hr className="mx-n3" />
                <div className="row align-items-center pt-4 pb-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Mô tả</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input type="text" className="form-control form-control-lg" />
                  </div>
                </div>
                <hr className="mx-n3" />
                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">HÌnh ảnh món ăn</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input className="form-control form-control-lg" id="formFileLg" type="file" />
                  </div>
                </div>
                <hr className="mx-n3" />
                <div className="px-5 py-4">
                  <button type="submit" className="btn btn-primary btn-lg">Lưu</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</body>
    </>
    )
}

export default CreateNewFood;