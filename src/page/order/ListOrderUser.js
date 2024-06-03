import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./ListOrderUser.css"; // Import the CSS file
import moment from "moment";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faTrash,
  faPenSquare,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import HeadHome from "../../compoment/HeadHome";
import ModalDemo from "./ModalDemo";
function ListOrderUser() {
  const [orders, setOrders] = useState([]);
  const params = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [isShowModalOrder, setIsShowModalOrder] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [ordersPerPage] = useState(8);
  const [orderId, setDataOrderId] = useState("");
  const test = useRef();
  const [user,setUser] = useState({});


  const handleCloseOrder = (idOrder) => {
    setIsShowModalOrder(true);
    setDataOrderId(idOrder);
  };
  const handleClose = () => {
    setIsShowModalOrder(false);
  };
  async function listOrdersByOrderId() {
    if (orderId) {
      console.log(orderId);
      const response = await axios.get(
        `http://localhost:8080/api/order/orderItem/${orderId}`
      );
      test.current = response.data;
      console.log(test.current);
    }
  }
  async function listOrdersByUser() {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/order/orders/user/${params.id}`
      );
      // Ensure the data is an array and log its length
      if (Array.isArray(response.data)) {
        console.log("API returned an array with length:", response.data.length);
        // Process createdAt to keep only the necessary parts
        const processedOrders = response.data.map((order) => {
          const createdAt = new Date(
            order.createdAt[0], // Year
            order.createdAt[1] - 1, // Month (0-indexed)
            order.createdAt[2], // Day
            order.createdAt[3], // Hour
            order.createdAt[4], // Minute
            0, // Seconds
            0 // Milliseconds
          );
          return { ...order, createdAt };
        });
        setOrders(processedOrders);
      } else {
        console.error("API did not return an array:", response.data);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  }
  const indexOfLastProduct = currentPage * ordersPerPage;
  const indexOfFirstProduct = indexOfLastProduct - ordersPerPage;
  const ordersProducts = orders.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  function formatNumberWithCommas(number) {
    return number.toLocaleString("de-DE");
  }
  useEffect(() => {
    listOrdersByUser();
  }, []);

  useEffect(() => {
    setIsShowModalOrder(true);
    listOrdersByOrderId();
  }, [orderId]);

  const calculateOrderTotal = (orderItems) => {
    return orderItems.reduce((total, item) => {
      return total + item.quantity * item.product.price;
    }, 0);
  };

  return (
    <>
      <HeadHome></HeadHome>
      <h2 className="center">Danh sách đơn hàng</h2>

      <table class="table table-bordered">
        <tr>
          <th className="center">STT</th>
          <th className="center">Mã đơn hàng</th>
          <th>Thời gian </th>
          <th>Địa điểm </th>
          <th>Thành tiền</th>
          <th>Trạng thái</th>
          <th>Chi tiết</th>
        </tr>
        {ordersProducts.map((order, index) => (
          <tr>
            <td className="center">{index + 1}</td>
            <td className="center">{order.id}</td>
            <td>
              Thời gian đặt:{" "}
              {moment(order.createdAt).format(" DD-MM-YYYY HH:mm")}
            </td>
            {order.orderItems.length > 0 && (
              <td>
                {order.orderItems[0].shop.name}
                <br />
                {order.orderItems[0].shop.idCity.name}
              </td>
            )}
            <td>
              {formatNumberWithCommas(calculateOrderTotal(order.orderItems))} đ
            </td>
            <td>
              {order.status.type}
              <br />
              {/* <div>
                     <button type="button" class="btn btn-danger">Hủy đơn</button>
              </div> */}
            </td>
            <td className="link">
              <div>
                <Link
                  onClick={() => {
                    setModalShow(true);
                    setDataOrderId(order.id);
                    setUser(order.user)
                  }}
                >
                  Chi tiết đơn hàng
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </table>
      {/* Pagination */}
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button onClick={prevPage} className="page-link">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </li>
        {Array.from(
          { length: Math.ceil(orders.length / ordersPerPage) },
          (_, i) => (
            <li
              key={i}
              className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
            >
              <button onClick={() => paginate(i + 1)} className="page-link">
                {i + 1}
              </button>
            </li>
          )
        )}
        <li
          className={`page-item ${
            currentPage === Math.ceil(orders.length / ordersPerPage)
              ? "disabled"
              : ""
          }`}
        >
          <button onClick={nextPage} className="page-link">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </li>
      </ul>
      <ModalDemo
        show={modalShow}
        id={orderId}
        users={user}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ListOrderUser;
