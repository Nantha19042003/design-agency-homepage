"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Please write a short message.";
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setSubmitted(false);
      return;
    }
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="py-5 contact-section">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-muted" style={{ fontSize: "1.15rem" }}>
            Have a project in mind? Send us a message
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            {submitted && (
              <div className="alert alert-success" role="alert">
                Thanks for reaching out! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Name */}
              <div className="form-floating-icon mb-4">
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  id="name"
                  name="name"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="name">Full Name</label>
                <i className="bi bi-person input-icon"></i>
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>

              {/* Email */}
              <div className="form-floating-icon mb-4">
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  id="email"
                  name="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email">Email Address</label>
                <i className="bi bi-envelope input-icon"></i>
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              {/* Message – icon now sits at top-left, aligned with label */}
              <div className="form-floating-icon mb-4">
                <textarea
                  className={`form-control ${errors.message ? "is-invalid" : ""}`}
                  id="message"
                  name="message"
                  placeholder=" "
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <label htmlFor="message">Your Message</label>
                <i className="bi bi-chat-dots input-icon"></i>
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>

              <button type="submit" className="btn btn-accent w-100 py-3">
                Send Message <i className="bi bi-arrow-right ms-2"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}