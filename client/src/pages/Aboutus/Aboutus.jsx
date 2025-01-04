import React from "react";
import {WEBNAME} from '../../constant/AppConstant'

export const AboutUsPage = () => {
  return (
    <>
      <section id="about-us" className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2 className="fw-bold mb-4">About Us</h2>
              <p className="text-muted">
                Welcome to <strong>{WEBNAME}</strong>, your trusted partner in
                finding the perfect property. With years of experience in the
                real estate industry, we specialize in connecting buyers and
                sellers while delivering exceptional service and expertise.
                Whether you’re looking for your dream house or a lucrative
                investment property, we’ve got you covered.
              </p>
              <p className="text-muted">
                Our mission is to simplify the home-buying process with
                transparency, professionalism, and care. Let us help you turn
                your property dreams into reality.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src="https://wenasaholidayresort.lk/wp-content/uploads/2022/09/10.png"
                alt="Modern House"
                width={400}
                height={400}
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
