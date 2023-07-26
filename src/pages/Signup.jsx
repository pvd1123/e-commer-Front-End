import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
// import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";



const Signup = () => {
  return (
    <>
      <Meta title={"Đăng Kí"} />
      <BreadCrumb title="Đăng Kí" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Đăng Kí</h3>
              <form action="" className="d-flex flex-column gap-30">
                <CustomInput 
                  type="text"
                  name="name"
                  placeholder="Tên của bạn"
                />

                <CustomInput 
                  type="email"
                  name="email"
                  placeholder="Nhập Email Của Bạn"
                />
                
                <CustomInput 
                  type="tel"
                  name="mobile"
                  placeholder="Nhập SĐT Của Bạn"
                />
                
                <CustomInput 
                  type="password"
                  name="password"
                  placeholder="Đặt Mật Khẩu"
                />

                <CustomInput 
                  type="password"
                  name="password"
                  placeholder="Xác Nhận Lại Mật Khẩu"
                />
                
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
      </Container>
    </>
  );
};

export default Signup;
