"use client";

import { useState } from "react";

const initialState = {
  name: "",
  phone: "",
  email: "",
  message: "",
  preferredTime: "",
  preferredContactMethod: "",
  agree: false,
};

const Contact = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email))
      newErrors.email = "Invalid email address.";
    if (!formData.message.trim())
      newErrors.message = "Please let us know what brings you here.";
    if (!formData.preferredTime.trim())
      newErrors.preferredTime = "Preferred time is required.";
    if (!formData.preferredContactMethod)
      newErrors.preferredContactMethod = "Please select a contact method.";
    if (!formData.agree) newErrors.agree = "You must agree to be contacted.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData(initialState);
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <div
      id="contact"
      className="py-8 sm:py-16 flex justify-center bg-[#f7f4ea] px-4"
    >
      <div
        className="w-full max-w-md sm:max-w-lg bg-white border border-gray-300 rounded-xl shadow-md p-6 sm:p-8"
        style={{ fontFamily: "Libre Franklin, sans-serif" }}
      >
        <h2
          className="text-xl sm:text-2xl font-bold text-center mb-2"
          style={{ color: "#20513a", fontFamily: "Playfair Display, serif" }}
        >
          Get In Touch
        </h2>
        <p className="text-center text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base px-2">
          Simply fill out the brief fields below and Dr. Blake will be in touch
          with you soon, usually within one business day. This form is safe,
          private, and completely free.
        </p>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block font-semibold mb-1"
              style={{ color: "#20513a" }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#20513a] ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Name"
              required
            />
            {errors.name && (
              <p className="text-red-600 text-xs mt-1">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block font-semibold mb-1"
              style={{ color: "#20513a" }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#20513a] ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="you@example.com"
              required
            />
            {errors.email && (
              <p className="text-red-600 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block font-semibold mb-1"
              style={{ color: "#20513a" }}
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#20513a] ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="(555) 234-5678"
              required
            />
            {errors.phone && (
              <p className="text-red-600 text-xs mt-1">{errors.phone}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block font-semibold mb-1"
              style={{ color: "#20513a" }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#20513a] ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="How can I help you?"
              required
            />
            {errors.message && (
              <p className="text-red-600 text-xs mt-1">{errors.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="preferredTime"
              className="block font-semibold mb-1"
              style={{ color: "#20513a" }}
            >
              Preferred Contact Time
            </label>
            <input
              type="text"
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#20513a] ${
                errors.preferredTime ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
              required
            />
            {errors.preferredTime && (
              <p className="text-red-600 text-xs mt-1">
                {errors.preferredTime}
              </p>
            )}
            <span className="text-xs text-gray-500">
              Let us know when you're typically available for a call or
              consultation
            </span>
          </div>
          <div className="mb-4">
            <label
              htmlFor="preferredContactMethod"
              className="block font-semibold mb-1"
              style={{ color: "#20513a" }}
            >
              Preferred Contact Method
            </label>
            <select
              id="preferredContactMethod"
              name="preferredContactMethod"
              value={formData.preferredContactMethod}
              onChange={handleChange}
              className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#20513a] ${
                errors.preferredContactMethod
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              required
            >
              <option value="">Select preferred method</option>
              <option value="in-person">In-person</option>
              <option value="online">Online</option>
            </select>
            {errors.preferredContactMethod && (
              <p className="text-red-600 text-xs mt-1">
                {errors.preferredContactMethod}
              </p>
            )}
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className={`mr-2 accent-[#20513a] ${
                errors.agree ? "border-red-500" : "border-gray-300"
              }`}
              required
            />
            <label
              htmlFor="agree"
              className="text-sm"
              style={{ color: "#20513a" }}
            >
              I agree to be contacted
            </label>
          </div>
          {errors.agree && (
            <p className="text-red-600 text-xs mb-2">{errors.agree}</p>
          )}
          <button
            type="submit"
            className="w-full bg-[#20513a] hover:bg-[#183e2c] text-white py-2 rounded-md font-semibold text-lg transition-colors"
          >
            Submit
          </button>
          {submitted && (
            <div className="mt-4 text-green-700 text-center font-medium">
              Thank you for your message! Dr. Blake will be in touch soon.
            </div>
          )}
        </form>
        <div className="mt-4 text-xs text-gray-600 flex items-start">
          <span className="mr-2">&#9675;</span>
          By clicking submit you consent to be contacted by Dr. Serena Blake.
        </div>
      </div>
      <hr className="my-8 border-t border-gray-200" />
    </div>
  );
};

export default Contact;
