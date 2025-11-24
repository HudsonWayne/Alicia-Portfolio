import React from 'react';
import { motion } from 'framer-motion';
import { Heart, GraduationCap, Briefcase, Coffee, Leaf, ChefHat } from 'lucide-react';
import Tadiwa from "../images/TadiwaProfile.jpg";
import SnapchatImage from "../images/TadiwaProfile.jpg"; 



const About = () => {
  const passions = [
    {
      icon: Coffee,
      title: 'Reading',
      description: 'Diving into captivating novels and enriching non-fiction, exploring new worlds and perspectives from the comfort of my favorite armchair. My current read is a fantasy epic.'
    },
    {
      icon: Leaf,
      title: 'Gardening',
      description: 'Nurturing a small balcony garden, enjoying the quiet joy of watching tiny sprouts grow into vibrant flowers and fragrant herbs. It\'s my daily dose of tranquility.'
    },
    {
      icon: ChefHat,
      title: 'Baking',
      description: 'Experimenting with new recipes and creating sweet treats for friends and family. There\'s nothing quite like the smell of fresh cookies filling the home.'
    }
  ];

  const education = [
    {
      degree: 'pending',
      institution: 'Ucommon.org',
      period: 'jan 25 - dec ',
      description: '•	Built real-world projects and collaborated on team-based sprints.'
    }
  ];

  const experience = [
    {
      position: ' Developer',
      company: 'Non',
      period: 'Non',
      description: '•'
    },
    {
      position: 'Frontend Developer',
      company: 'non',
      period: 'non',
      description: 'Designed and developed responsive user interfaces for various client websites using modern JavaScript frameworks like Vue.js. Focused on user experience (UX) research, UI prototyping, and A/B testing to enhance engagement and conversion rates. Maintained code quality through peer reviews and continuous integration.'
    }
  ];

  return (
    <div className="pt-20">
      
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full overflow-hidden border-8 border-white shadow-2xl">
<img
  src={Tadiwa}
  alt="Tadiwa"
  className="w-full h-full object-cover"
/>


              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-xl">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Welcome to My Creative Universe
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I'm Tadiwa, a passionate creator blending artistry with digital innovation. My journey is about weaving beauty and function into every project, crafting experiences that are both inspiring and impactful.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                Discover My Story
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl p-8 mx-auto lg:mx-0">
                  <div className="w-full h-full bg-white/80 rounded-2xl flex items-center justify-center">
                 <img
  src={SnapchatImage}
  alt="Creative illustration"
  className="w-48 h-48 object-cover rounded-full"
/>

                  </div>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-400 rounded-full"></div>
                <div className="absolute bottom-8 -left-4 w-8 h-8 bg-pink-400 rounded-full"></div>
                <div className="absolute top-20 -right-2 w-6 h-6 bg-purple-400 rounded-full"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart className="w-8 h-8 text-pink-500 mr-3" />
                My Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Hello there! I'm <span className="font-semibold text-pink-600">Tadiwa</span>, a passionate full-stack developer with a flair for creating beautiful and functional web experiences. My journey into tech began with a curiosity for solving problems and building things that make a difference. I thrive on bringing ideas to life, from the initial concept to the final polished product.
                </p>
                <p>
                  With a solid foundation in both front-end and back-end technologies, I enjoy crafting seamless user interfaces as much as I love architecting robust server-side solutions. I believe in writing clean, efficient code and continuously learning new technologies to stay at the forefront of the ever-evolving digital landscape.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="w-8 h-8 text-purple-500 mr-3" />
              Education
            </h2>
            {education.map((edu, index) => (
              <div key={index} className="bg-pink-50 p-8 rounded-2xl border border-pink-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                <p className="text-pink-600 font-medium mb-2">{edu.institution}</p>
                <p className="text-gray-500 mb-4">{edu.period}</p>
                <p className="text-gray-600 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 flex items-center">
              <Briefcase className="w-8 h-8 text-purple-500 mr-3" />
              Experience
            </h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="bg-purple-50 p-8 rounded-2xl border border-purple-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.position}</h3>
                  <p className="text-purple-600 font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-500 mb-4">{exp.period}</p>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Passions Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cultivating Joy: My Passions Beyond the Canvas
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {passions.map((passion, index) => {
              const IconComponent = passion.icon;
              return (
                <motion.div
                  key={passion.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{passion.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{passion.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;