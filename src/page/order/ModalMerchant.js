import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import "./ListOrderShop.css";
import { color } from "framer-motion";

function ModalMerchant(props) {
  const [data, setData] = useState([]);
  const [quantitys, setQuantitys] = useState();
  const [newDataUser, setNewDataUser] = useState({});

  function formatNumberWithCommas(number) {
    return number.toLocaleString("de-DE");
  }

  const fetchData = async (id, users) => {
    if (id) {
      const response = await axios.get(
        `http://localhost:8080/api/order/orderItem/${id}`
      );
      setNewDataUser(props.users);
      console.log(props.users);
      setData(response.data);
    }
  };

  useEffect(() => {
    fetchData(props.id);
  }, [props.id]);

  // Biến quantity để tính tổng số lượng
  const [totalQuantity, setTotalQuantity] = useState(0);

  // Sử dụng useEffect để tính tổng số lượng mỗi khi myArray thay đổi
  useEffect(() => {
    const total = data.reduce((acc, item) => acc + item.quantity, 0);
    setTotalQuantity(total);
  }, [data]);

  const [sum, setSum] = useState(0);

  useEffect(() => {
    let number = 0;
    for (let i = 0; i < data.length; i++) {
      setSum((number += data[i].product.price * data[i].quantity));
    }
  }, [data]);

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <div>
            <span className="padding-sum">Chi tiết đơn hàng</span>
            <b>
               <span className="color-modal">Tổng cộng : {formatNumberWithCommas(sum)} đ</span>
            </b>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table class="table table-bordered">
          <tr>
            <th>Thành viên</th>
            <th>Món ăn</th>
            <th>Số lượng</th>
            <th>Tổng cộng</th>
          </tr>
          <tr>
            <td>
              <b>
                user id :{" " + newDataUser.id + "  "}
                {newDataUser.name}
              </b>
            </td>
            <td>
              <div>
                {data.map((s) => (
                  <b>
                    <span>
                      {s.quantity + "  "}
                      {s.product.name}
                      <br />
                    </span>
                  </b>
                ))}
              </div>
            </td>
            <td>
              <span>{formatNumberWithCommas(totalQuantity)} Items</span>
            </td>
            <td>
              <b>
                  <span className="color-modal">
                {formatNumberWithCommas(sum)} đ
              </span>
              </b>
            </td>
          </tr>
        </table>
      </Modal.Body>
      <div className="center">
        <Button className="btn btn-danger button-modal" onClick={props.onHide}>
          Đóng
        </Button>
      </div>
    </Modal>
  );
}

export default ModalMerchant;
