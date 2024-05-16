import React from 'react'
import '../css/HeadHome.css';
import { Link } from 'react-router-dom';

export default function HeadHome() {

    return (
        <div className='wrapper'>
            <header className='main-header'>
                <div class="container-header">
                    <div className='container'>
                        <div className='header-content navbar row  justify-content-between align-items-center'>
                            <div className='logo-now col-auto'>
                                <span>
                                    <Link to={'/'}> <img className='img' src='https://shopeefood.vn/app/assets/img/shopeefoodvn.png?4aa1a38e8da801f4029b80734905f3f7'></img></Link>
                                </span>
                            </div>
                            <div className='selectLocal col-auto'>
                                <div className='dropdown'>
                                    <button class="dropdown-toggle" type="button" id="local-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Ha Noi
                                    </button>
                                    <div class="dropdown-content">
                                        <span><a class="dropdown-item" href="#">Action</a></span>
                                        <span><a class="dropdown-item" href="#">Another action</a></span>
                                        <span><a class="dropdown-item" href="#">Something else here</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className='main-nav col'>
                                <div className='nav-item'>Do An</div>
                                <div className='nav-item'>Do An</div>
                            </div>
                            <div className='user-acc col-auto'>
                                <div className='dropdown'>
                                    <div class="dropdown-toggle" role="button" id="local-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <div className='img'>
                                            <img src='https://cdn-icons-png.flaticon.com/512/1144/1144760.png'></img>
                                        </div>
                                        <span className='name'>User</span>
                                    </div>
                                    <div className='dropdown-content'>
                                        <span><a class="dropdown-item" href="#">Lịch sử đơn hàng</a></span>
                                        <span><a class="dropdown-item" href="#">Chỉnh sửa thông tin </a></span>
                                        <span><a class="dropdown-item" href="#">Đăng Suất</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header_right">
                    <span class="me-5"></span>
                </div>

            </header>
        </div>
    )
}
