import React from "react";
// import Container from "../components/Container";
import logo from "/clogo.png";
import icon from "../assets/images/icons/send-icon.svg";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";
import { Container, Grid } from "@mui/material";

const Footer = () => {
  return (
    <>
      <footer className="style-5">
        <div className="footer-top">
          <Container>
            <div className="row flex gap-10">
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
                  <div className="w-full ">
                    <div className="footer-item w-full">
                      <a>
                        <img alt="image" src={logo} />
                      </a>
                      <p>
                        We develop mobile and web application platforms across
                        different sectors including Healthcare, Travel and
                        Tourism, Fintech and E-Commerce.
                      </p>
                      <form>
                        <div className="input-with-btn flex jusify-content-start align-items-strech">
                          <input type="text" placeholder="Enter your email" />
                          <button
                            type="submit"
                            className="flex justify-center items-center"
                          >
                            <img alt="image" src={icon} />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </Grid>
                <Grid xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
                  <div className="w-full xs:mt-4 sm:mt-4 md:mt-0 xs:pl-0 sm:pl-0 md:pl-0 lg:pl-16 d-flex justify-content-lg-center">
                    <div className="footer-item ">
                      <h5>Company</h5>
                      <ul className="footer-list">
                        <li>
                          <Link to="about">About Company</Link>
                        </li>
                        <li>
                          <Link to="projects">Our Project</Link>
                        </li>
                        <li>
                          <Link to="faq">FAQ</Link>
                        </li>
                        <li>
                          <Link to="team">Our Team</Link>
                        </li>
                        {/* <li>
                          <Link to="blog">Our Blog</Link>
                        </li>
                        <li>
                          <Link to="client">Testimonial</Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </Grid>
                <Grid xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
                  <div className="w-full xs:mt-2 sm:mt-2 md:mt-0">
                    <div className="footer-item">
                      <h5>Contact Us</h5>
                      <ul className="address-list">
                        <li>
                          <svg
                            width="38"
                            height="25"
                            viewBox="0 0 14 18"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 18C7 18 13.75 11.6033 13.75 6.75C13.75 4.95979 13.0388 3.2429 11.773 1.97703C10.5071 0.711159 8.79021 0 7 0C5.20979 0 3.4929 0.711159 2.22703 1.97703C0.961159 3.2429 0.25 4.95979 0.25 6.75C0.25 11.6033 7 18 7 18ZM7 10.125C6.10489 10.125 5.24645 9.76942 4.61351 9.13649C3.98058 8.50355 3.625 7.64511 3.625 6.75C3.625 5.85489 3.98058 4.99645 4.61351 4.36351C5.24645 3.73058 6.10489 3.375 7 3.375C7.89511 3.375 8.75355 3.73058 9.38649 4.36351C10.0194 4.99645 10.375 5.85489 10.375 6.75C10.375 7.64511 10.0194 8.50355 9.38649 9.13649C8.75355 9.76942 7.89511 10.125 7 10.125Z" />
                          </svg>
                          <a href="#">
                            Mahtab Center (L-12) Suite #10, 177 Shahid Syed
                            Nazrul Islam Sarani Bijoy Nagar, Dhaka-1000,
                            Bangladesh
                          </a>
                        </li>
                        <li>
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.12018 0.574918C2.31702 0.378368 2.55339 0.225896 2.81362 0.127607C3.07385 0.0293176 3.352 -0.0125448 3.62963 0.00479393C3.90727 0.0221327 4.17805 0.0982766 4.42402 0.22818C4.67 0.358083 4.88557 0.538779 5.05643 0.758293L7.0758 3.35254C7.44593 3.82842 7.57643 4.44829 7.43018 5.03329L6.8148 7.49704C6.78299 7.62465 6.78471 7.75832 6.81979 7.88507C6.85488 8.01182 6.92214 8.12734 7.01505 8.22042L9.77918 10.9845C9.87237 11.0776 9.98808 11.145 10.115 11.1801C10.242 11.2152 10.3759 11.2168 10.5037 11.1848L12.9663 10.5694C13.255 10.4972 13.5563 10.4916 13.8475 10.553C14.1387 10.6144 14.4121 10.7412 14.6471 10.9238L17.2413 12.942C18.1739 13.6677 18.2594 15.0458 17.4247 15.8794L16.2614 17.0427C15.4289 17.8752 14.1847 18.2408 13.0248 17.8324C10.0561 16.7879 7.36073 15.0884 5.13855 12.8599C2.91025 10.6381 1.21074 7.94306 0.166053 4.97479C-0.241197 3.81604 0.124428 2.57067 0.956928 1.73817L2.12018 0.574918Z"
                            />
                          </svg>
                          <a href="tel:+8801761456456">+880 1818-153225</a>
                        </li>
                        <li>
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 2.25C0 1.65326 0.237053 1.08097 0.65901 0.65901C1.08097 0.237053 1.65326 0 2.25 0L15.75 0C16.3467 0 16.919 0.237053 17.341 0.65901C17.7629 1.08097 18 1.65326 18 2.25V11.25C18 11.8467 17.7629 12.419 17.341 12.841C16.919 13.2629 16.3467 13.5 15.75 13.5H4.96575C4.66741 13.5001 4.3813 13.6186 4.17037 13.8296L0.96075 17.0392C0.882147 17.1181 0.781932 17.1718 0.672791 17.1936C0.563649 17.2154 0.450486 17.2044 0.347624 17.1618C0.244763 17.1193 0.156827 17.0473 0.0949469 16.9547C0.0330667 16.8622 2.36417e-05 16.7534 0 16.6421L0 2.25ZM3.9375 3.375C3.78832 3.375 3.64524 3.43426 3.53975 3.53975C3.43426 3.64524 3.375 3.78832 3.375 3.9375C3.375 4.08668 3.43426 4.22976 3.53975 4.33525C3.64524 4.44074 3.78832 4.5 3.9375 4.5H14.0625C14.2117 4.5 14.3548 4.44074 14.4602 4.33525C14.5657 4.22976 14.625 4.08668 14.625 3.9375C14.625 3.78832 14.5657 3.64524 14.4602 3.53975C14.3548 3.43426 14.2117 3.375 14.0625 3.375H3.9375ZM3.9375 6.1875C3.78832 6.1875 3.64524 6.24676 3.53975 6.35225C3.43426 6.45774 3.375 6.60082 3.375 6.75C3.375 6.89918 3.43426 7.04226 3.53975 7.14775C3.64524 7.25324 3.78832 7.3125 3.9375 7.3125H14.0625C14.2117 7.3125 14.3548 7.25324 14.4602 7.14775C14.5657 7.04226 14.625 6.89918 14.625 6.75C14.625 6.60082 14.5657 6.45774 14.4602 6.35225C14.3548 6.24676 14.2117 6.1875 14.0625 6.1875H3.9375ZM3.9375 9C3.78832 9 3.64524 9.05926 3.53975 9.16475C3.43426 9.27024 3.375 9.41332 3.375 9.5625C3.375 9.71168 3.43426 9.85476 3.53975 9.96025C3.64524 10.0657 3.78832 10.125 3.9375 10.125H9.5625C9.71168 10.125 9.85476 10.0657 9.96025 9.96025C10.0657 9.85476 10.125 9.71168 10.125 9.5625C10.125 9.41332 10.0657 9.27024 9.96025 9.16475C9.85476 9.05926 9.71168 9 9.5625 9H3.9375Z" />
                          </svg>
                          <a href="/">
                            <span
                              className="__cf_email__"
                              data-cfemail="1c75727a735c79647d716c7079327f7371"
                            >
                              info@coppanet.com
                            </span>
                          </a>
                        </li>
                      </ul>
                      <ul className="footer-social gap-3">
                        <li>
                          <a href="https://www.facebook.com/coppanet">
                            <ion-icon
                              size="large"
                              name="logo-facebook"
                            ></ion-icon>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/company/coppanet-ltd">
                            <ion-icon
                              size="large"
                              name="logo-linkedin"
                            ></ion-icon>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/coppanetltd/">
                            <ion-icon
                              size="large"
                              name="logo-instagram"
                            ></ion-icon>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Grid>
                <Grid xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
                  <div className=" w-full xs:mt-2 sm:mt-2 md:mt-0 d-flex justify-content-lg-center">
                    <ul class="list-unstyled">
                      <li className="footer-item">
                        <h5>Dhaka Office</h5>
                      </li>
                      <li class="mt-3">
                        <Iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.3463024768694!2d90.4105886!3d23.735027199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c567062a9823%3A0xcaf61b51dea4ccf4!2sCoppanet%20Limited!5e0!3m2!1sen!2sbd!4v1662017311316!5m2!1sen!2sbd"
                          width="100%"
                          height="200"
                          style="border:0;"
                          allowfullscreen=""
                          loading="lazy"
                          referrerpolicy="no-referrer-when-downgrade"
                        ></Iframe>
                      </li>
                    </ul>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <div className="footer-bottom">
          <Container>
            <div className="row flex items-center justify-between align-items-center g-3">
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                  <div className="col-lg-6 d-flex justify-content-lg-start justify-content-center xs:mt-2 sm:mt-2 md:mt-0 ">
                    <p>
                      Copyright 2022{" "}
                      <a href="#" className="egns-lab">
                        Coppanet
                      </a>{" "}
                      | Design By{" "}
                      <a
                        href="https://themeforest.net/category/site-templates?term=egenslab"
                        className="egns-lab"
                      >
                        Coppanet Dev Team
                      </a>
                    </p>
                  </div>
                </Grid>
                <Grid xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                  <div className="col-lg-6 flex justify-content-lg-end justify-content-center align-items-center">
                    <ul className="f-bottom-list flex jusify-start align-center">
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Terms of Use</a>
                      </li>
                    </ul>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
