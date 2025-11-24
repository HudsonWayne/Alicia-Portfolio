import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Send, MapPin, Clock, Coffee } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Me',
      value: 'tadiwamangate9@gmail.com',
      description: 'Send me an email and I\'ll respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Me',
      value: '0774 700 857',
      description: 'Available Monday to Friday, 9 AM - 6 PM EST'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Harere mufakose',
      description: 'Open to remote work and travel opportunities'
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Let's Build Something Beautiful!
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together!
          </p>
        </motion.div>
      </section>

      <div className="pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-pink-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="flex items-center text-gray-700 font-medium mb-3">
                      <Mail className="w-5 h-5 mr-2 text-pink-500" />
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="flex items-center text-gray-700 font-medium mb-3">
                      <Mail className="w-5 h-5 mr-2 text-pink-500" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="flex items-center text-gray-700 font-medium mb-3">
                      <Phone className="w-5 h-5 mr-2 text-pink-500" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Optional"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="flex items-center text-gray-700 font-medium mb-3">
                      <MessageCircle className="w-5 h-5 mr-2 text-pink-500" />
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Additional Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Contact Information */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-xl">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1">{info.title}</h3>
                          <p className="text-pink-600 font-medium mb-2">{info.value}</p>
                          <p className="text-sm text-gray-600">{info.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-2xl border border-pink-200">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="w-6 h-6 text-purple-600" />
                  <h3 className="font-bold text-gray-900">Response Time</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  I typically respond to messages within <span className="font-semibold text-purple-600">24 hours</span>. 
                  For urgent inquiries, feel free to mention it in your message!
                </p>
              </div>

              {/* Fun Fact */}
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-2xl border border-orange-200">
                <div className="flex items-center space-x-3 mb-3">
                  <Coffee className="w-6 h-6 text-orange-600" />
                  <h3 className="font-bold text-gray-900">Fun Fact</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  I work best with a good cup of coffee and some lo-fi music playing in the background. 
                  What's your creative fuel? ☕
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;