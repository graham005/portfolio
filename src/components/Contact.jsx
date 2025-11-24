import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'enochgraham003@outlook.com'
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Email sending failed:', error);
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const contactInfo = [
    { icon: FaMapMarkerAlt, text: "Nairobi, Kenya", color: "bg-[#D97184]" },
    { icon: FaEnvelope, text: "enochgraham003@outlook.com", color: "bg-[#2E9AA6]" },
    { icon: FaPhone, text: "+254 790 482 014", color: "bg-[#F2B56B]" }
  ];
  
  const socialLinks = [
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/enoch-graham", color: "hover:bg-[#2E9AA6]" },
    { icon: FaGithub, url: "https://github.com/graham005", color: "hover:bg-[#152840]" },
    { icon: FaTwitter, url: "#", color: "hover:bg-[#4C428C]" }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 lg:py-32 text-white relative" style={{ backgroundColor: '#152840' }}>
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#2E9AA6] rounded-full filter blur-[120px] opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#4C428C] rounded-full filter blur-[120px] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-5 bg-gradient-to-r from-[#2E9AA6] to-[#4C428C] bg-clip-text text-transparent">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2E9AA6] to-[#4C428C] mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-xl mx-auto">Have a project in mind or want to collaborate? Feel free to reach out and I'll get back to you as soon as possible.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4"
                >
                  <div className={`p-3 rounded-lg ${item.color} text-white`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.text.includes('@') ? 'Email' : item.text.includes('+') ? 'Phone' : 'Location'}</h3>
                    <p className="text-gray-400">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
            
            <motion.div variants={itemVariants} className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-[#1a3a52] text-white rounded-full transition-colors duration-300 ${social.color}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-[#1a3a52]/50 backdrop-blur-sm border border-[#2E9AA6]/20 rounded-xl p-6 md:p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#152840] border border-[#2E9AA6]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E9AA6] focus:border-transparent transition-all duration-300 text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#152840] border border-[#2E9AA6]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E9AA6] focus:border-transparent transition-all duration-300 text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#152840] border border-[#2E9AA6]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E9AA6] focus:border-transparent transition-all duration-300 text-white"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-[#152840] border border-[#2E9AA6]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E9AA6] focus:border-transparent transition-all duration-300 text-white resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isSubmitting ? 'bg-gray-600' : 'bg-gradient-to-r from-[#2E9AA6] to-[#4C428C] hover:shadow-lg hover:shadow-[#2E9AA6]/20'
                  } flex items-center justify-center min-w-[150px]`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
                
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="ml-4 text-[#F2B56B] flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Message sent successfully!
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;