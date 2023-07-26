import React from "react";
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { BsHouseDoorFill, BsTelephoneFill, BsMailbox, BsInfoLg } from "react-icons/bs";
import Container from "../components/Container";


const Contact = () =>{
    return (
      <>
        <Meta title={"Liên Hệ Chúng Tôi"} />
        <BreadCrumb title="Liên Hệ Chúng Tôi" />
        <Container class1="contact-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1258.3484802904627!2d107.56425996492105!3d16.494164715278245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDI5JzQwLjQiTiAxMDfCsDMzJzUzLjQiRQ!5e0!3m2!1svi!2s!4v1688521343448!5m2!1svi!2s"
                style={{ width: "600", height: "450" }}
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-wrapper-2 d-flex justify-content-center">
                <div>
                  <h3 className="contact-title mb-4">
                    Thông Tin Liên Hệ Của Bạn
                  </h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Tên"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="SĐT"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="10"
                        placeholder="Bạn Nghĩ Gì..."
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0 ">Đăng</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Chi Tiết</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BsHouseDoorFill className="fs-5" />
                        <address className="mb-0">
                          Số 83, đường Tản Đà, phường Hương Sơ, thành Phố Huế
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BsTelephoneFill className="fs-5" />
                        <a href="tel:+84 935026874" className="d-block mb-0">
                          +84 935026874
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BsMailbox className="fs-5" />
                        <a
                          href="mailto:phathuynh0106@gmail.com"
                          className="d-block mb-0"
                        >
                          phathuynh0106@gmail.com
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BsInfoLg className="fs-5" />
                        <p className="mb-0">Thứ 2 - Chủ Nhật: 8 giờ - 22 giờ</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </>
    );
};

export default Contact;