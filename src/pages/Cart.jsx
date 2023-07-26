import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import {MdDelete} from 'react-icons/md';
import watch from "../images/watch1.jpg"
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const Cart = () => {
  return (
    <>
      <Meta title={"Giỏ Hàng"} />
      <BreadCrumb title="Giỏ Hàng" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Sản Phẩm</h4>
              <h4 className="cart-col-2">Giá</h4>
              <h4 className="cart-col-3">Số Lượng</h4>
              <h4 className="cart-col-4">Tổng Tiền</h4>
            </div>
            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img src={watch} className="img-fluid" alt="product image" />
                </div>
                <div className="w-75">
                  <p>Lele</p>
                  <p>Size: </p>
                  <p>Color: </p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">500$</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    className="form-control"
                    type="number"
                    min={1}
                    max={10}
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <MdDelete className="text-danger" />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">500$</h5>
              </div>
            </div>
            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img src={watch} className="img-fluid" alt="product image" />
                </div>
                <div className="w-75">
                  <p>Lele</p>
                  <p>Size: </p>
                  <p>Color: </p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">500$</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    className="form-control"
                    type="number"
                    min={1}
                    max={10}
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <MdDelete className="text-danger" />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">500$</h5>
              </div>
            </div>
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Tiếp Tục
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>Tổng Cộng : 1000$</h4>
                <p>Phí Ship: 5$</p>
                <Link to="/checkout" className="button">
                  Xác Nhận
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Cart