import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Meta title={"Đăng Kí"} />
      <BreadCrumb title="Đăng Kí" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Đăng Kí</h3>
                <form action="" className="d-flex flex-column gap-30">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Tên của bạn"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Nhập Email Của Bạn"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Nhập SĐT Của Bạn"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Đặt Mật Khẩu"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Xác Nhận Lại Mật Khẩu"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <div className="d-flex justify-content-center align-items-center gap-15 mt-3">
                      <button className="button border-0" type="submit">
                        Đăng Kí
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
