// Projects.jsx
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Heart, X } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Wedding Planner App',
      description:
        'Developed a visually rich wedding planning platform that allows couples and planners to organize every detail of a wedding. Built role-based flows for Bride, Groom, and Planner with step-by-step planning tools. Implemented Google OAuth login/signup and personalized dashboards with progress tracking. Designed vendor pages with categories, detailed vendor profiles, and messaging options.',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
      tech: ['React', 'Tailwind CSS', 'Firebase', 'MongoDB'],
      category: 'Event Planning',
      featured: true,
      link: 'https://plan-eta.vercel.app',
      repo: null
    },
    {
      title: 'MuteroPay (Vehicle Licensing App)',
      description:
        'Created a fintech-style mobile app to help Zimbabwean vehicle owners manage and pay license fees. Integrated with ZINARA to display license status, due dates, and penalties. Built features for in-app payments, personalized payment plans, and digital receipts with share options. Designed a clean, modern dashboard and blue-themed UI for easy navigation.',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg',
      tech: ['React', 'Tailwind CSS', 'Firebase'],
      category: 'Fintech',
      featured: true,
      link: 'https://tax-lpuc.vercel.app',
      repo: null
    },
    {
      title: 'DevHer Tracker',
      description:
        'Built a productivity and motivation platform tailored for women in tech. Implemented features to track coding progress, personal habits, and GitHub activity. Designed community-driven sections including Q&A, Help, Features, and About pages. Created a frontend-only application with interactive and user-friendly design.',
      image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg',
      tech: ['React', 'Tailwind CSS'],
      category: 'Productivity',
      featured: true,
      link: 'https://dev-her-lhbl.vercel.app',
      repo: null
    },
    {
      title: 'Personal Finance Tracker',
      description:
        'Developed a financial management dashboard to help users track money flow and plan budgets. Enabled tracking of income, expenses, savings, and budgets with interactive charts. Added predictions for spending and savings trends. Designed a clean, responsive UI with chart visualizations for better insights.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
      tech: ['React', 'Tailwind CSS', 'Chart.js', 'Node.js', 'MongoDB'],
      category: 'Finance',
      featured: false,
      link: null,
      repo: null
    },
    {
      title: 'Manhwa Comic App',
      description:
        'Developed a responsive comic reader web application for browsing and reading manhwa. Implemented an interactive React frontend styled with Tailwind CSS, ensuring seamless navigation and a modern UI. Applied media queries for device responsiveness, delivering an optimized reading experience across desktop and mobile.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
      tech: ['React', 'JavaScript', 'Tailwind CSS'],
      category: 'Entertainment',
      featured: false,
      link: null,
      repo: null
    },
    {
      title: 'Travel Website Home Page',
      description:
        'Designed and built a visually engaging travel website landing page based on a wireframe prototype. Used React components and Tailwind CSS for a modular, responsive, and mobile-friendly layout. Showcased destination highlights with modern UI patterns to improve user engagement.',
      image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg',
      tech: ['React', 'JavaScript', 'Tailwind CSS'],
      category: 'Travel',
      featured: false,
      link: null,
      repo: null
    }
  ];

  // precompute features (avoids recomputing split on each render)
  const projectsWithFeatures = useMemo(
    () =>
      projects.map((p) => ({
        ...p,
        features: p.description
          .split('.')
          .map((s) => s.trim())
          .filter(Boolean)
      })),
    [projects]
  );

  // modal state
  const [active, setActive] = useState(null); // index of active project or null

  const openLink = (url) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-12 px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            My Projects <Heart className="w-8 h-8 lg:w-10 lg:h-10 text-pink-500 ml-3" />
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Selected projects showcasing product thinking, front-end craftsmanship and full-stack integrations.</p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsWithFeatures.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <button
                      onClick={() => setActive(index)}
                      aria-label={`Open details for ${project.title}`}
                      className="w-full h-full block text-left"
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </button>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => openLink(project.link)}
                        aria-label={`Open live site for ${project.title}`}
                        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                      >
                        <ExternalLink className={`w-4 h-4 ${project.link ? 'text-gray-700' : 'text-gray-400'}`} />
                      </button>
                      <button
                        onClick={() => openLink(project.repo)}
                        aria-label={`Open repository for ${project.title}`}
                        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                      >
                        <Github className={`w-4 h-4 ${project.repo ? 'text-gray-700' : 'text-gray-400'}`} />
                      </button>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg lg:text-xl font-semibold text-gray-900">{project.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${project.featured ? 'bg-pink-50 text-pink-600' : 'bg-gray-100 text-gray-700'}`}>
                        {project.featured ? 'Featured' : project.category}
                      </span>
                    </div>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features List (compact preview) */}
                    <div className="space-y-2 mb-6 text-sm text-gray-600 max-h-24 overflow-hidden">
                      {project.features.slice(0, 4).map((feature, fi) => (
                        <div key={fi} className="flex items-start">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span>{feature.trim()}{feature.endsWith('.') ? '' : '.'}</span>
                        </div>
                      ))}
                      {project.features.length > 4 && (
                        <div className="text-xs text-gray-500 mt-2">+{project.features.length - 4} more</div>
                      )}
                    </div>

                    <button
                      onClick={() => setActive(index)}
                      className="w-full px-4 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-xl font-medium hover:from-pink-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                      aria-label={`View details for ${project.title}`}
                    >
                      View project
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.18 }}
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden"
            >
              <div className="relative">
                <img
                  src={projectsWithFeatures[active].image}
                  alt={`${projectsWithFeatures[active].title} large preview`}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close project modal"
                  className="absolute top-4 right-4 bg-white/80 rounded-full p-2 hover:bg-white transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{projectsWithFeatures[active].title}</h2>
                    <p className="text-sm text-gray-500 mt-1">{projectsWithFeatures[active].category}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    {projectsWithFeatures[active].link && (
                      <button
                        onClick={() => openLink(projectsWithFeatures[active].link)}
                        className="px-3 py-2 bg-gray-100 rounded-md text-sm"
                        aria-label="Open live project"
                      >
                        Live <ExternalLink className="inline-block w-4 h-4 ml-2 -mt-0.5" />
                      </button>
                    )}
                    {projectsWithFeatures[active].repo && (
                      <button
                        onClick={() => openLink(projectsWithFeatures[active].repo)}
                        className="px-3 py-2 bg-gray-100 rounded-md text-sm"
                        aria-label="Open repository"
                      >
                        Repo <Github className="inline-block w-4 h-4 ml-2 -mt-0.5" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <p className="text-gray-700 mb-4">{projectsWithFeatures[active].description}</p>

                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key features</h4>
                    <ul className="list-inside list-disc text-gray-600 space-y-2">
                      {projectsWithFeatures[active].features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>

                  <aside className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Tech stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {projectsWithFeatures[active].tech.map((t) => (
                        <span key={t} className="text-sm bg-white px-3 py-1 rounded-full border text-gray-700">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4">
                      <button
                        onClick={() => setActive(null)}
                        className="w-full px-4 py-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-md"
                      >
                        Close
                      </button>
                    </div>
                  </aside>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
