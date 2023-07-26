import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from "../components/CustomInput";

const ResetPassWord = props => {
  return (
    <>
      <Meta title={"Đặt Lại Mật Khẩu"} />
      <BreadCrumb title="Đặt Lại Mật Khẩu" />
      <Container className="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Đặt Lại Mật Khẩu</h3>
              <form action="" className="d-flex flex-column gap-30">
                <CustomInput 
                  type="password"
                  name="password"
                  placeholder="Nhập Mật Khẩu Mới"
                />
                <CustomInput 
                  type="password"
                  name="password"
                  placeholder="Xác Nhận Lại Mật Khẩu"
                />
              
                <div>
                  <div className="d-flex justify-content-center flex-column align-items-center gap-15 mt-3">
                    <button className="button border-0" type="submit">
                      Xác Nhận
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
}

ResetPassWord.propTypes = {}

export default ResetPassWord