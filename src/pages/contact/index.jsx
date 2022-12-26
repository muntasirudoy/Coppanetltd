import React from "react";
import { ReactPropTypes } from "react";
import { Container, Grid, Hidden } from "@mui/material";
import img1 from "../../assets/images/bg/office1.png";
import img2 from "../../assets/images/bg/office2.png";
import img3 from "../../assets/images/bg/office3.png";
import MiniBanner from "../../components/MiniBanner";
import Iframe from "react-iframe";

const Contact = () => {
  return (
    <>
      <MiniBanner text1="Contact with us" text2="Home" text3="Contact" />
      <div class="address-section pt-120 pb-20">
        <Container>
          <div class="row flex justify-center">
            <div class="col-md-6">
              <div class="section-title primary5">
                <span>-Our Office-</span>
                <h3>Office Near You</h3>
              </div>
            </div>
          </div>
          <div class="row flex justify-center gap-4">
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <div class="w-full">
                  <div class="address-card">
                    <div class="content">
                      <div class="header">
                        <div class="location flex justify-center items-center">
                          <svg
                            width="18"
                            height="22"
                            viewBox="0 0 18 22"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9 22C9 22 17.25 14.1818 17.25 8.25C17.25 6.06196 16.3808 3.96354 14.8336 2.41637C13.2865 0.869194 11.188 0 9 0C6.81196 0 4.71354 0.869194 3.16637 2.41637C1.61919 3.96354 0.75 6.06196 0.75 8.25C0.75 14.1818 9 22 9 22ZM9 12.375C7.90598 12.375 6.85677 11.9404 6.08318 11.1668C5.3096 10.3932 4.875 9.34402 4.875 8.25C4.875 7.15598 5.3096 6.10677 6.08318 5.33318C6.85677 4.5596 7.90598 4.125 9 4.125C10.094 4.125 11.1432 4.5596 11.9168 5.33318C12.6904 6.10677 13.125 7.15598 13.125 8.25C13.125 9.34402 12.6904 10.3932 11.9168 11.1668C11.1432 11.9404 10.094 12.375 9 12.375Z" />
                          </svg>
                        </div>
                        <h3>Bangladesh</h3>
                      </div>
                      <ul class="address-list">
                        <li>
                          <span>Address:</span> Mahtab Center (L-12) Suite #10,
                          177 Shahid Syed Nazrul Islam Sarani Bijoy Nagar,
                          Dhaka-1000, Bangladesh
                        </li>
                        <li>
                          <span>Phone:</span>
                          <a href="tel:+880 1818-153225"> +880 1818-153225</a>
                        </li>
                        <li>
                          <span>Email: </span>
                          <a href="/">info@coppanet.com</a>
                        </li>
                      </ul>
                      <ul class="list-unstyled">
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
                  </div>
                </div>
              </Grid>
              <Grid xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <div class="w-full">
                  <div class="address-card">
                    <div class="content">
                      <div class="header">
                        <div class="location flex justify-center items-center">
                          <svg
                            width="18"
                            height="22"
                            viewBox="0 0 18 22"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9 22C9 22 17.25 14.1818 17.25 8.25C17.25 6.06196 16.3808 3.96354 14.8336 2.41637C13.2865 0.869194 11.188 0 9 0C6.81196 0 4.71354 0.869194 3.16637 2.41637C1.61919 3.96354 0.75 6.06196 0.75 8.25C0.75 14.1818 9 22 9 22ZM9 12.375C7.90598 12.375 6.85677 11.9404 6.08318 11.1668C5.3096 10.3932 4.875 9.34402 4.875 8.25C4.875 7.15598 5.3096 6.10677 6.08318 5.33318C6.85677 4.5596 7.90598 4.125 9 4.125C10.094 4.125 11.1432 4.5596 11.9168 5.33318C12.6904 6.10677 13.125 7.15598 13.125 8.25C13.125 9.34402 12.6904 10.3932 11.9168 11.1668C11.1432 11.9404 10.094 12.375 9 12.375Z" />
                          </svg>
                        </div>
                        <h3>France</h3>
                      </div>
                      <ul class="address-list">
                        <li>
                          <span>Address:</span> 155 Rue du Faubourg Saint-Denis,
                          75010 Paris, France
                        </li>
                        <li>
                          <span>Phone:</span>
                          <a href="tel:+880 1818-153225"> +880 1818-153225</a>
                        </li>
                        <li>
                          <span>Email: </span>
                          <a href="/">info@coppanet.com</a>
                        </li>
                      </ul>
                      <ul class="list-unstyled">
                        <li class="mt-3">
                          <Iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d335861.186567823!2d2.356679!3d48.878887!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e6d9b902899%3A0xa6d1f1f936e312b!2s157%20Rue%20du%20Faubourg%20Saint-Denis%2C%2075010%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1643791970740!5m2!1sen!2sus"
                            width="100%"
                            height="200"
                            style="border:0;"
                            allowfullscreen=""
                            loading="lazy"
                          ></Iframe>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <Grid xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <div className="mt-[120px] flex flex-col w-full justify-center items-center">
              {/* form */}
              <div className="section-title primary5 w-2/4">
                <span>-Your Question-</span>
                <h3>Write A Question</h3>
              </div>
              <form className="w-[60%]">
                <div className="row g-4">
                  <div className="form-inner">
                    <input
                      type="text"
                      name="fname"
                      placeholder="Your Name: *"
                    />
                  </div>
                  <div className="form-inner">
                    <input
                      type="text"
                      name="fname"
                      placeholder="Your E-mail:"
                    />
                  </div>
                  <div className="form-inner">
                    <input
                      type="text"
                      name="fname"
                      placeholder="Phone Number:"
                    />
                  </div>
                  <div className="form-inner">
                    <input type="text" name="fname" placeholder="Subject:" />
                  </div>

                  <div className="form-inner">
                    <textarea
                      name="message"
                      cols="30"
                      rows="6"
                      placeholder="Write A Question "
                    ></textarea>
                  </div>
                  <div className="col-lg-12 text-center mt-4 cursor-pointer">
                    <input
                      disabled
                      type="submit"
                      value="Send Now"
                      className="eg-btn btn---submit"
                    />
                  </div>
                </div>
              </form>
            </div>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Contact;
