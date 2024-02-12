import React, { useState, useEffect } from "react";
import "./footer.css";

const Footer = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="footerMain">
        <div className="footerWrapper">
          <div className="footer">
            <div className="footerControllerWrapper">
              <div className="footerController">
                <div className="footerBlockWrapper">
                  <div className="footerBlock">
                    <div className="footerBlockTitle">
                      <div>
                        <h3>CONTACT INFO</h3>
                        <p>--------</p>
                      </div>
                    </div>
                    <div className="footerBlockContent">
                      <div className="noPointer">(+91) 7877061041</div>
                      <div>
                        <p>sales@beautybebo.com</p>
                      </div>
                      <div className="noPointer">
                        Open time: 10:00AM - 7:00PM
                      </div>
                      <div>
                        <button>
                          <i className="bx bxl-facebook"></i>
                        </button>
                        <button>
                          <i className="bx bxl-instagram"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footerBlockWrapper">
                  <div className="footerBlock">
                    <div className="footerBlockTitle">
                      <div>
                        <h3>QUICK LINKS</h3>
                        <p>--------</p>
                      </div>
                    </div>
                    <div className="footerBlockContent">
                      <div>
                        <i className="bx bx-radio-circle-marked"></i>
                        <p>About us</p>
                      </div>
                      <div>
                        <i className="bx bx-radio-circle-marked"></i>
                        <p>Contact Us</p>
                      </div>
                      <div>
                        <i className="bx bx-radio-circle-marked"></i>
                        <p>Terms & Conditions</p>
                      </div>
                      <div>
                        <i className="bx bx-radio-circle-marked"></i>
                        <p>Privacy Policy</p>
                      </div>
                      <div>
                        <i className="bx bx-radio-circle-marked"></i>
                        <p>Return and Refund Policy</p>
                      </div>
                      <div>
                        <i className="bx bx-radio-circle-marked"></i>
                        <p>Shipping Policy</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footerBlockWrapper">
                  <div className="footerBlock">
                    <div className="footerBlockTitle">
                      <div>
                        <h3>CUSTOMER INFO</h3>
                        <p>--------</p>
                      </div>
                    </div>
                    <div className="footerBlockContent">
                      <div>
                        <i className="bx bx-radio-circle-marked"></i>
                        <p>My Account</p>
                      </div>
                      <div>
                        <i className="bx bx-radio-circle-marked"></i>
                        <p>Track your Order</p>
                      </div>
                      <div>
                        <i className="bx bx-radio-circle-marked"></i>
                        <p>Order Returns</p>
                      </div>
                      <div>
                        <i className="bx bx-radio-circle-marked"></i>
                        <p>Wishlist</p>
                      </div>
                      <div>
                        <i className="bx bx-radio-circle-marked"></i>
                        <p>News & Events</p>
                      </div>
                      <div>
                        <i className="bx bx-radio-circle-marked"></i>
                        <p>FAQ</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footerBlockWrapper">
                  <div className="footerBlock">
                    <div className="footerBlockTitle">
                      <div>
                        <h3>CATEGORIES</h3>
                        <p>--------</p>
                      </div>
                    </div>
                    <div className="footerBlockContent">
                      <div>
                        <i className="bx bx-radio-circle-marked"></i>
                        <p>Makeup</p>
                      </div>
                      <div>
                        <i className="bx bx-radio-circle-marked"></i>
                        <p>Skin</p>
                      </div>
                      <div>
                        <i className="bx bx-radio-circle-marked"></i>
                        <p>Hair</p>
                      </div>
                      <div>
                        <i className="bx bx-radio-circle-marked"></i>
                        <p>Personal Care</p>
                      </div>
                      <div>
                        <i className="bx bx-radio-circle-marked"></i>
                        <p>Mom & Baby Care</p>
                      </div>
                      <div>
                        <i className="bx bx-radio-circle-marked"></i>
                        <p>Fragrance</p>
                      </div>
                      <div>
                        <i className="bx bx-radio-circle-marked"></i>
                        <p>Ayurveda</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footerNewsletterWrapper">
              <div className="footerNewsletter">
                <div className="footerCardWrapper">
                  <div className="footerCard">
                    <img
                      src="https://www.beautybebo.com/pub/media/wysiwyg/payment.png"
                      alt="cards"
                    />
                  </div>
                </div>
                <div className="footerSubscribeWrapper">
                  <div className="footerSubscribe">
                    <div className="footerSubscribeTitle">
                      <p>Signup For Newsletter</p>
                    </div>
                    <div className="footerSubscribeForm">
                      <input type="text" placeholder="Your email address" />
                      <button>{isMobileScreen ? "+" : "Subscribe"}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">© 2020 All Rights Reserved.</div>
      </div>
    </>
  );
};

export default Footer;
