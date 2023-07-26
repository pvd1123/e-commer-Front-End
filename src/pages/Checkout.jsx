import React from 'react'
import { Link } from 'react-router-dom';
import {MdArrowBackIos} from 'react-icons/md';
import watch from '../images/watch1.jpg';
import Container from '../components/Container';
const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Phat</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/cart" className="text-dark">
                      Giỏ Hàng
                    </Link>
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item active" aria-current="page">
                    Thông Tin
                  </li>
                  &nbsp; /<li className="breadcrumb-item active">Giao Hàng</li>
                  &nbsp; /
                  <li className="breadcrumb-item active" aria-current="page">
                    Thanh Toán
                  </li>
                </ol>
              </nav>
              <h4 className="title">Thông Tin Liên Hệ</h4>
              <p className="user-details total">phathuynh0106@gmail.com</p>
              <h4 className="mb-3">Địa Chỉ Nhận Hàng</h4>
              <form
                action=""
                className="d-flex flex-wrap gap-15 justify-content-between"
              >
                <div className="w-100">
                  <select name="" id="" className="form-control form-select">
                    <option value="" selected disabled>
                      Chọn
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Họ"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Tên"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Địa Chỉ"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Ghi Chú"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Thành Phố"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <select name="" id="" className="form-control form-select">
                    <option value="" selected disabled>
                      Tỉnh
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="ZIP CODE"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <MdArrowBackIos className="me-1 mb-1" />
                      Quay lại Giỏ Hàng
                    </Link>
                    <Link to="/cart" className="button">
                      Xác Nhận Đặt Hàng
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 mb-2 align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-10px", right: "2px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                    >
                      1
                    </span>
                    <img className="img-fluid" src={watch} alt="product" />
                  </div>
                  <div>
                    <h5 className="total-price">lele</h5>
                    <p className="total-price">lele</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">100$</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Giá</p>
                <p className="total-price">2900$</p>
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Phí Ship</p>
                <p className="mb-0 total-price">10$</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className="total">Tổng Cộng</h4>
              <h5 className="total-price">3000$</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Checkout