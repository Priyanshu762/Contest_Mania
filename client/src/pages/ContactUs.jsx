import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const { darkMode } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div
      className={`min-h-[93vh] flex flex-col justify-center items-center p-6 transition ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Contact Details */}
        <div
          className={`flex flex-col gap-6 p-6 rounded-lg shadow-md transition ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-blue-600" size={20} />
            <p className="text-lg">+91 98765 43210</p>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-600" size={20} />
            <p className="text-lg">support@example.com</p>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-600" size={20} />
            <p className="text-lg">Varanasi, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className={`p-6 rounded-lg shadow-md transition ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          {submitted ? (
            <p className="text-green-500 text-center text-lg">
              ✅ Message sent successfully!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`p-3 rounded-md border focus:outline-none focus:ring-2 transition ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white focus:ring-blue-500"
                    : "bg-gray-100 border-gray-300 focus:ring-blue-400"
                }`}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`p-3 rounded-md border focus:outline-none focus:ring-2 transition ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white focus:ring-blue-500"
                    : "bg-gray-100 border-gray-300 focus:ring-blue-400"
                }`}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className={`p-3 rounded-md border focus:outline-none focus:ring-2 transition ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white focus:ring-blue-500"
                    : "bg-gray-100 border-gray-300 focus:ring-blue-400"
                }`}
              ></textarea>
              <button className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
