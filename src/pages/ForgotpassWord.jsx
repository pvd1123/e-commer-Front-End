import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from "../components/CustomInput";

const ForgotpassWord = () => {
  return (
    <>
      <Meta title={"Quên Mật Khẩu"} />
      <BreadCrumb title="Quên Mật Khẩu" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Quên Mật Khẩu</h3>
              <p className="text-center mb-3">
                Chúng tôi sẽ gửi bạn một email reset mật khẩu của bạn
              </p>
              <form action="" className="d-flex flex-column gap-30">
                <CustomInput 
                  type="email"
                  name="email"
                  placeholder="Nhập Email Của Bạn"
                />
              
                <div>
                  <div className="d-flex justify-content-center flex-column align-items-center gap-15 mt-3">
                    <button className="button border-0" type="submit">
                      Xác Nhận
                    </button>
                    <Link to="/login">Hủy</Link>
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

export default ForgotpassWord