import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
        <Meta title={"Đăng Nhập"}/>
        <BreadCrumb title = 'Đăng Nhập'/>
        <div className="login-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Đăng Nhập</h3>
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
                                    <input 
                                        type="password" 
                                        name='password' 
                                        placeholder='Nhập Mật Khẩu' 
                                        className='form-control'
                                    />
                                </div>
                                <div>
                                    <Link to="/forgot-password">Quên Mật Khẩu?</Link>
                                    <div className='d-flex justify-content-center align-items-center gap-15 mt-3'>
                                        <button className='button border-0' type='submit'>Đăng Nhập</button>
                                        <Link to="/signup" className='button signup'>Đăng Kí</Link>
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

export default Login