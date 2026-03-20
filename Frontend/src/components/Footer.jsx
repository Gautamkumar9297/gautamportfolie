import React, { useState } from "react";
import "../styles/Footer.css";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { submitFeedback } from "../services/feedbackService";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitFeedback(formData);
      alert("✅ Feedback submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      const errorMessage = error.message || "Failed to submit feedback";

      // Check if it's a network error
      if (errorMessage.includes("Failed to fetch") || errorMessage === "Failed to fetch") {
        alert("❌ Error: Cannot connect to server. Please make sure the backend is running on http://localhost:3000");
      } else {
        alert("❌ Error: " + errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Inspiration / Quotes Section */}
        <div className="footer-section">
          <h3>Why Choose Us?</h3>
          <p className="footer-quote">🌟 “Plan your work, then work your plan.”</p>
          <p className="footer-quote">🚀 “Small progress each day adds up to big results.”</p>
          <p className="footer-quote">💡 “Productivity is the bridge between goals and accomplishments.”</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <a href="https://www.instagram.com/gautam_kumar5657?igsh=MW40Y2VyZGtlaGl1aw==" target="_blank" rel="noreferrer">
            <FaInstagram /> Instagram
          </a>
          <br/>
          <a href="https://x.com/GautamKuma79077" target="_blank" rel="noreferrer">
            <FaTwitter /> Twitter
          </a>
          <br />
          <a href="https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B0hIg5aaFRwKTUWSv0c964A%3D%3D" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </div>

        {/* Feedback Form */}
        <div className="footer-section">
          <h3>Feedback</h3>
          <form className="feedback-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Feedback"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 PortFolie. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
