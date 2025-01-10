import React, { useState } from 'react';
import emailjs from 'emailjs-com';  // Import EmailJS
import styles from './Contact.module.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  // Initialize EmailJS with your public key (you should replace with your actual public key)
  emailjs.init('YOUR_PUBLIC_KEY'); // Replace 'YOUR_PUBLIC_KEY' with your public key

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // Send email using EmailJS
    emailjs
      .sendForm(
        'service_yq1tnkk',   // Replace with your EmailJS service ID
        'template_v333xfh',   // Replace with your EmailJS template ID
        e.target,             // The form element (it's a reference to the form)
        '6dGKwnCdOi26xfKvK'   // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });

          // Reset status after 5 seconds (5000 ms)
          setTimeout(() => {
            setStatus(null);
          }, 3000);
        },
        (error) => {
          setStatus('Failed to send message. Please try again later.');
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact" className={styles.contact}> {/* Added id="contact" */}
      <h2 className={styles.title}>Contact</h2>

      <div className={styles.content}>
        <div className={styles.info}>
          <h3>Get in Touch</h3>
          <p>If you have any questions or want to collaborate, feel free to reach out to me!</p>
          <ul>
            <li>
              <FaEnvelope className={styles.icon} />
              Email: ragsha2005@gmail.com
            </li>
            <li>
              <FaPhoneAlt className={styles.icon} />
              Phone: +94 76 062 7013
            </li>
            <li>
              <FaMapMarkerAlt className={styles.icon} />
              Location: Horana, Sri Lanka
            </li>
          </ul>
        </div>

        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
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
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
          {status && <p className={styles.status}>{status}</p>}
        </div>
      </div>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Ragshahini Navarathna. All Rights Reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
