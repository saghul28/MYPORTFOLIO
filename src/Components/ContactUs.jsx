import React, { useState } from "react";
import { id, primary } from "./common";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Validate form fields
  //   if (
  //     formData.name !== "" &&
  //     formData.email !== "" &&
  //     formData.message !== ""
  //   ) {
  //     // Optional: Email format validation (simple regex)
  //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     if (!emailPattern.test(formData.email)) {
  //       alert("Please enter a valid email address.");
  //       return;
  //     }

  //     try {
  //       const response = await fetch(id, {

  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       });

  //       // Check if response is successful
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }

  //       const result = await response.json();
  //       alert("Form submitted successfully: " + result.result);

  //       // Reset the form fields
  //       setFormData({ name: "", email: "", message: "" });
  //     } catch (error) {
  //       console.error("Error:", error);
  //       alert("Error submitting form: " + error.message);
  //     }
  //   } else {
  //     alert("Please fill in all fields.");
  //   }
  // };

  return (
    <div className="max-w-md mx-auto p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Contact Me</h2>
      <form className="space-y-4" data-netlify="true">
        <div>
          <label htmlFor="name" className="block font-semibold">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-semibold">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className={`w-full p-2 bg-[${primary}] text-white rounded-md hover:bg-[#091057] transition duration-200 font-bold`}
        >
          Submit
        </button>
      </form>
      <div className="mt-6 text-center">
        <h3 className="font-semibold">Connect with me:</h3>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://github.com/saghul28?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0 0 64 64"
            >
              <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/saghul-ahmed-752633166/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0 0 64 64"
            >
              <path d="M55.879,0H8.121C3.644,0,0,3.644,0,8.121v47.758C0,60.356,3.644,64,8.121,64h47.758C60.356,64,64,60.356,64,55.879V8.121C64,3.644,60.356,0,55.879,0z M19.371,52.16H12.153V25.803h7.218V52.16z M15.76,23.179c-2.295,0-4.145-1.894-4.145-4.236c0-2.356,1.867-4.236,4.162-4.236c2.288,0,4.145,1.88,4.145,4.236C19.905,21.285,18.049,23.179,15.76,23.179z M52.16,52.16h-7.218v-18.49c0-4.389-1.682-7.387-5.899-7.387c-3.214,0-5.117,2.019-5.94,3.96c-0.298,0.725-0.373,1.724-0.373,2.722v19.069h-7.218V25.803h7.218v3.42c0.963-1.575,2.706-3.56,6.465-3.56c4.714,0,8.228,3.06,8.228,9.648V52.16z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
