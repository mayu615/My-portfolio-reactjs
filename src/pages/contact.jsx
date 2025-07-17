import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [form, setForm] = useState({ from_name: '', from_email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    emailjs
      .send(
        'service_gie4pyw',
        'template_z54tej6',
        {
          from_name: form.from_name,
          from_email: form.from_email,
          message: form.message,
        },
        'c3Lct3a_oh2FVfHcd'
      )
      .then(() => {
        setLoading(false);
        setStatus('Message sent successfully!');
        setForm({ from_name: '', from_email: '', message: '' });
      })
      .catch((error) => {
        setLoading(false);
        setStatus('Something went wrong. Please try again.');
        console.error('EmailJS Error:', error);
      });
  };

  return (
    <section className="w-full px-6 py-12 bg-gradient-to-br from-pink-200 via-purple-200 to-purple-300 text-gray-900 dark:from-purple-900 dark:via-purple-800 dark:to-pink-900 dark:text-gray-100">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-pink-700 dark:text-pink-300">Contact Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Profile Info */}
          <div className="space-y-4 transform hover:-rotate-1 hover:scale-105 transition duration-700 bg-white/60 dark:bg-black/20 p-6 rounded-xl shadow-xl">
            <img src="/mayu5.jpg" alt="Profile" className="rounded-full w-48 h-48 mx-auto md:mx-0 shadow-lg" />
            <h3 className="text-2xl font-semibold text-purple-700 dark:text-purple-300">Mayuri Chatap</h3>
            <div className="text-md space-y-2">
              <p><i className="fas fa-phone text-pink-500"></i> +91 8109564658</p>
              <p><i className="fas fa-envelope text-pink-500"></i> Chatapmayuri@gmail.com</p>
              <p><i className="fas fa-calendar-day text-pink-500"></i> 27/07/1998</p>
              <p><i className="fas fa-map-marker-alt text-pink-500"></i> Civil Line, Sausar, MP, 480106</p>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/mayu615" className="text-gray-700 dark:text-gray-300 hover:text-black text-xl">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/mayuri-chatap-283306220/" className="text-blue-600 hover:text-blue-800 text-xl">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <a
              href="/mayu-resume-2025.pdf"
              className="inline-block mt-4 bg-pink-500 text-white px-4 py-2 rounded shadow hover:bg-pink-600 transition"
            >
              Download Resume
            </a>
          </div>

          {/* Right: Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white/70 dark:bg-black/30 shadow-xl p-6 rounded-xl transform hover:rotate-1 hover:scale-105 transition duration-700"
          >
            <input
              type="text"
              name="from_name"
              value={form.from_name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="email"
              name="from_email"
              value={form.from_email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="5"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {status && (
              <p className={`text-sm mt-2 ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
