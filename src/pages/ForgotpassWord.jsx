import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const ForgotpassWord = () => {
  return (
    <>
        <Meta title={"Quên Mật Khẩu"}/>
        <BreadCrumb title = 'Quên Mật Khẩu'/>
        <div className="login-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
              <div className="row">
                  <div className="col-12">
                      <div className="auth-card">
                          <h3 className='text-center mb-3'>Quên Mật Khẩu</h3>
                          <p className='text-center mb-3'>Chúng tôi sẽ gửi bạn một email reset mật khẩu của bạn</p>
                          <form action="" className='d-flex flex-column gap-30'>
                              <div>
                                  <input 
                                      type="email" 
                                      name='email' 
                                      placeholder='Nhập Email Của Bạn' 
                                      className='form-control' 
                                  />
                              </div>
                              <div>
                                  <div className='d-flex justify-content-center flex-column align-items-center gap-15 mt-3'>
                                      <button className='button border-0' type='submit'>Xác Nhận</button>
                                      <Link to="/login">Hủy</Link> 
                                  </div>
                              </div>
                          </form>
                      </div> 
                  </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default ForgotpassWord