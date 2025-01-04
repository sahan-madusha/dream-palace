import React, { useState } from "react";

export const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending the data to the server)
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="contact-us-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="contact-form-container">
              <h2 className="text-center mb-4">Get in Touch</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control custom-input"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control custom-input"
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100 custom-btn"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-image">
              <img
                src="https://commercetools.com/img/containers/assets/pages/contact-us/v02-header-contact-us-1.jpg/f64049e8b509054f1044c740ac31382d/v02-header-contact-us-1.jpg?v4" // Replace with your image URL
                alt="Contact Us"
                className="img-fluid shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
