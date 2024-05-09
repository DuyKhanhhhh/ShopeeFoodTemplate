import { keyboard } from "@testing-library/user-event/dist/keyboard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../css/cs.css'
import '../css/table.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import HeaderMerchant from "../compoment/HeadMerchant.js";
function FoodList() {
    return (
        <>
        <HeaderMerchant>He;ooo</HeaderMerchant>
            <div class="container">
                <div>
                    <form className="search-form">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search..." />
                            <button className="btn btn-primary" type="button">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                    </form>
                </div>
                <div class="row">
                    <div class="col-12">
                        <table class="table table-image">
                            <thead>
                                <tr>
                                    <th scope="col">Ten</th>
                                    <th scope="col">Anh</th>
                                    <th scope="col">Danh muc</th>
                                    <th scope="col">thoi gian</th>
                                    <th scope="col">gia tien</th>
                                    <th scope="col">luot thich</th>
                                    <th scope="col">luot dat</th>
                                    <th scope="col">function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td class="w-25">
                                        <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-3.jpg" class="img-fluid img-thumbnail" alt="Sheep"></img>
                                    </td>
                                    <td>Bootstrap 4 CDN and Starter Template</td>
                                    <td>Cristina</td>
                                    <td>913</td>
                                    <td>2.846</td>
                                    <td>2.846</td>
                                    <td>2.846</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td class="w-25">
                                        <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-5.jpg" class="img-fluid img-thumbnail" alt="Sheep"></img>
                                    </td>
                                    <td>Bootstrap Grid 4 Tutorial and Examples</td>
                                    <td>Cristina</td>
                                    <td>1.434</td>
                                    <td>3.417</td>
                                    <td>2.846</td>
                                    <td>2.846</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FoodList;