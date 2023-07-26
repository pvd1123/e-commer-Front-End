import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from "../components/CustomInput";

const Login = () => {
  return (
    <>
      <Meta title={"Đăng Nhập"} />
      <BreadCrumb title="Đăng Nhập" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Đăng Nhập</h3>
              <form action="" className="d-flex flex-column gap-30">
                <CustomInput 
                  type="email"
                  name="email"
                  placeholder="Nhập Email Của Bạn"
                />
                
                <CustomInput 
                  type="password"
                  name="password"
                  placeholder="Nhập Mật Khẩu"
                />
                <div>
                  <Link to="/forgot-password">Quên Mật Khẩu?</Link>
                  <div className="d-flex justify-content-center align-items-center gap-15 mt-3">
                    <button className="button border-0" type="submit">
                      Đăng Nhập
                    </button>
                    <Link to="/signup" className="button signup">
                      Đăng Kí
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Login