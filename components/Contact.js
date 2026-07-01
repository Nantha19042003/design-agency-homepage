"use client";

import { useState } from "react";

// Contact section with a simple form.
// There is no backend here, so on submit we just validate the
// fields and show a success message. Hook this up to an API
// route or a service like Formspree later if you need real emails.

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

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write a short message.";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);

    // stop here if there are validation errors
    if (Object.keys(newErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    // in a real project this is where you'd call an API route
    // to actually send the message somewhere
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="py-5 contact-section">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-muted">Have a project in mind? Send us a message</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            {submitted && (
              <div className="alert alert-success" role="alert">
                Thanks for reaching out! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className={`form-control ${errors.message ? "is-invalid" : ""}`}
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>

              <button type="submit" className="btn btn-accent px-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
