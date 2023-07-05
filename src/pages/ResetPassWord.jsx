import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const ResetPassWord = props => {
  return (
    <>
        <Meta title={"Đặt Lại Mật Khẩu"}/>
        <BreadCrumb title = 'Đặt Lại Mật Khẩu'/>
        <div className="login-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Đặt Lại Mật Khẩu</h3>
                            <form action="" className='d-flex flex-column gap-30'>
                                <div>
                                    <input 
                                        type="password" 
                                        name='password' 
                                        placeholder='Nhập Mật Khẩu Mới' 
                                        className='form-control'
                                    />
                                </div>
                                <div>
                                    <input 
                                        type="password" 
                                        name='password' 
                                        placeholder='Xác Nhận Lại Mật Khẩu' 
                                        className='form-control'
                                    />
                                </div>
                                <div>
                                    <div className='d-flex justify-content-center flex-column align-items-center gap-15 mt-3'>
                                        <button className='button border-0' type='submit'>Xác Nhận</button>
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

ResetPassWord.propTypes = {}

export default ResetPassWord