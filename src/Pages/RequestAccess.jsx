import React, { useState } from "react";
import {toast } from 'react-toastify';

function RequestAccess() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    industry: "",
    use: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    fetch("api/request-access", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
       toast.success("Request submitted succcessfully.We'll get back to you");
      })
      .catch((err) => {
        console.error(err);
       toast.error("error submitting your request");
      });

    const whatsappMessage = `Hello, I am ${formData.name} from ${formData.organization} (${formData.industry}). I would like to request dataset access for: ${formData.use}`;
    const whatsappUrl = `https://wa.me/254714910482?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="access">
      <div className="header-sect">
        <h1>
          Contact Us
        </h1>
      </div>

      <div className="re-access">
        <h3>Register details here</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <br />
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Organization</label>
            <br />
            <input
              type="text"
              name="organization"
              required
              placeholder="Enter your Organization"
              value={formData.organization}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Industry</label>
            <br />
            <input
              type="text"
              name="industry"
              required
              placeholder="Input your industry name"
              value={formData.industry}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Intended Use</label>
            <br />
            <input
              type="text"
              name="use"
              required
              placeholder="Input your intended Use"
              value={formData.use}
              onChange={handleChange}
            />
          </div>

          <button className="submit">Submit Request</button>
        </form>
      </div>
    </div>
  );
}

export default RequestAccess;
