"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(false);
    window.open(
      "https://drive.google.com/drive/folders/1jrDKqRwVfDUUYz4KIE__rJlv2VHM1t8p",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10">
                <img
                  src="/figs.svg"
                  alt="Figs Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold font-heading">figs</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#experience" className="nav-link">
                the experience
              </a>
              <a href="#about" className="nav-link">
                about
              </a>
              <a href="#team" className="nav-link">
                team
              </a>
              <button
                onClick={() => setShowModal(true)}
                className="btn-primary"
              >
                download
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-pattern">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="hero-text text-7xl md:text-8xl lg:text-9xl text-gray-900 mb-8">
                Empower
                <br />
                <span className="text-purple-600">your</span>
                <br />
                future
              </h1>

              <div className="mb-8">
                <p className="text-accent text-xl mb-4">
                  through smart investing
                </p>
                <p className="text-large text-2xl text-gray-600 max-w-lg">
                  Find clarity in your financial journey and let our intelligent
                  platform guide your investment decisions with{" "}
                  <em>confidence</em>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowModal(true)}
                  className="btn-primary"
                >
                  start your journey
                </button>
                <a
                  href="https://www.youtube.com/embed/WvKBE9BDlGY"
                  target="_blank"
                  className="btn-secondary"
                >
                  watch guide
                </a>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="bg-accent rounded-3xl p-12 text-center animate-float">
                <div className="w-24 h-24 bg-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl text-white">📱</span>
                </div>
                <h3 className="section-heading text-3xl text-gray-900 mb-4">
                  the app is <em>live</em>
                </h3>
                <p className="text-gray-600 mb-6">
                  Ready to transform your financial future?
                </p>
                <button
                  onClick={() => setShowModal(true)}
                  className="btn-primary"
                >
                  download now
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2
              className="section-heading text-6xl md:text-7xl text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              what we're <em className="text-purple-600">building</em>
            </motion.h2>
            <motion.p
              className="text-large text-2xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              India's Gen Z faces an "Aspiration-Action Gap." Figs bridges this
              with <span className="text-accent">smart, personalized</span>{" "}
              financial tools.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "effortless spending clarity",
                description:
                  "AI-powered insights that make your money patterns crystal clear with beautiful visualizations.",
                icon: (
                  <svg
                    className="w-16 h-16"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="32"
                      cy="32"
                      r="30"
                      fill="url(#grad1)"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M32 8C18.7 8 8 18.7 8 32s10.7 24 24 24 24-10.7 24-24S45.3 8 32 8zm0 4c11.1 0 20 8.9 20 20s-8.9 20-20 20-20-8.9-20-20 8.9-20 20-20z"
                      fill="url(#grad1)"
                    />
                    <circle cx="32" cy="32" r="8" fill="url(#grad1)" />
                    <path
                      d="M32 20c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                      fill="url(#grad1)"
                    />
                    <path
                      d="M44 32c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"
                      fill="url(#grad1)"
                    />
                    <path
                      d="M32 44c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                      fill="url(#grad1)"
                    />
                    <path
                      d="M20 32c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"
                      fill="url(#grad1)"
                    />
                    <defs>
                      <linearGradient
                        id="grad1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#A855F7" />
                      </linearGradient>
                    </defs>
                  </svg>
                ),
              },
              {
                title: "personalized goal journeys",
                description:
                  "Custom roadmaps that adapt to your lifestyle and help you achieve financial milestones.",
                icon: (
                  <svg
                    className="w-16 h-16"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 48L24 32L32 40L56 16"
                      stroke="url(#grad2)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="24" cy="32" r="4" fill="url(#grad2)" />
                    <circle cx="32" cy="40" r="4" fill="url(#grad2)" />
                    <circle cx="56" cy="16" r="4" fill="url(#grad2)" />
                    <circle cx="8" cy="48" r="4" fill="url(#grad2)" />
                    <path
                      d="M48 8L56 16L48 24"
                      stroke="url(#grad2)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="12"
                      y="52"
                      width="40"
                      height="4"
                      rx="2"
                      fill="url(#grad2)"
                      fillOpacity="0.3"
                    />
                    <defs>
                      <linearGradient
                        id="grad2"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#A855F7" />
                      </linearGradient>
                    </defs>
                  </svg>
                ),
              },
              {
                title: "proactive financial guidance",
                description:
                  "Smart recommendations that learn from your habits and guide you toward better decisions.",
                icon: (
                  <svg
                    className="w-16 h-16"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="32"
                      cy="20"
                      r="12"
                      fill="url(#grad3)"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M32 8C25.4 8 20 13.4 20 20s5.4 12 12 12 12-5.4 12-12S38.6 8 32 8zm0 4c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8z"
                      fill="url(#grad3)"
                    />
                    <circle cx="20" cy="20" r="2" fill="url(#grad3)" />
                    <circle cx="44" cy="20" r="2" fill="url(#grad3)" />
                    <circle cx="32" cy="8" r="2" fill="url(#grad3)" />
                    <path
                      d="M32 32c-8.8 0-16 4.5-16 12v8h32v-8c0-7.5-7.2-12-16-12z"
                      fill="url(#grad3)"
                      fillOpacity="0.3"
                    />
                    <path d="M20 44h24v4H20z" fill="url(#grad3)" />
                    <circle cx="26" cy="46" r="1" fill="url(#grad3)" />
                    <circle cx="32" cy="46" r="1" fill="url(#grad3)" />
                    <circle cx="38" cy="46" r="1" fill="url(#grad3)" />
                    <defs>
                      <linearGradient
                        id="grad3"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#A855F7" />
                      </linearGradient>
                    </defs>
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="section-subheading text-2xl text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-body">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent text-xl mb-6">
              Ready to start building wealth?
            </p>
            <button onClick={() => setShowModal(true)} className="btn-primary">
              get started today
            </button>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-accent">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-heading text-6xl md:text-7xl text-gray-900 mb-6">
              how it <em className="text-purple-600">works</em>
            </h2>
            <p className="text-large text-2xl text-gray-600">
              Get started with Figs in just a few{" "}
              <span className="text-accent">simple steps</span>.
            </p>
          </motion.div>

          <div className="space-y-16">
            {[
              {
                step: "01",
                title: "download & sign up",
                description:
                  "Get the app and create your account in under 2 minutes. No complex paperwork, just simple onboarding.",
              },
              {
                step: "02",
                title: "connect your world",
                description:
                  "Securely link your bank accounts and investment platforms. We use bank-level security to protect your data.",
              },
              {
                step: "03",
                title: "set your vision",
                description:
                  "Define your financial objectives and risk preferences. Tell us your dreams, we'll help you achieve them.",
              },
              {
                step: "04",
                title: "start investing",
                description:
                  "Begin your journey with AI-powered recommendations tailored specifically to your goals and lifestyle.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center gap-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="step-number text-xl">{step.step}</div>
                <div className="flex-1">
                  <h3 className="section-subheading text-3xl text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-large text-xl text-gray-600 max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-heading text-6xl md:text-7xl text-gray-900 mb-8">
              Join our <em className="text-purple-600">community</em>
            </h2>
            <p className="text-large text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Building in public with Gen Z. Share ideas, get sneak peeks, and
              shape the future of{" "}
              <span className="text-accent">personal finance</span>!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://chat.whatsapp.com/BSvNztVhvGiGy5lE1Wyx7l"
                target="_blank"
                className="px-8 py-4 bg-green-600 text-white rounded-2xl font-medium hover:bg-green-700 transition-all duration-300 transform hover:scale-105 font-heading"
              >
                whatsapp community
              </a>
              <a
                href="https://www.instagram.com/figsapp.in"
                target="_blank"
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-heading"
              >
                @figsapp.in
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-heading text-6xl md:text-7xl text-gray-900 mb-6">
              Meet the <em className="text-purple-600">Team</em>
            </h2>
            <p className="text-large text-2xl text-gray-600 max-w-3xl mx-auto">
              Passionate innovators dedicated to empowering your
              <span className="text-accent"> financial future</span>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Deven",
                role: "Co-founder, CEO",
                linkedin: "https://www.linkedin.com/in/deven-jain/",
                image: "/deven.jpg",
              },
              {
                name: "Edson",
                role: "Co-founder, COO",
                linkedin: "https://www.linkedin.com/in/edson-rebello/",
                image: "/edson.jpg",
              },
              {
                name: "Shadab",
                role: "Co-founder, CTO",
                linkedin: "https://in.linkedin.com/in/shadabkalim",
                image: "/shadab.jpg",
              },
              {
                name: "Pavan Gupta",
                role: "Content Strategist",
                linkedin:
                  "https://www.linkedin.com/in/poddutur-pavan-gupta-b7b6102a8",
                image: "/poddutur pavan gupta.jpg",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="feature-card group text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-32 h-32 mx-auto mb-6 relative overflow-hidden rounded-full border-4 border-purple-100 group-hover:border-purple-300 transition-colors">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="section-subheading text-2xl text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-6 font-body">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors group-hover:scale-110 transform duration-300"
                  title={`Connect with ${member.name} on LinkedIn`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12">
                <img
                  src="/figs.svg"
                  alt="Figs Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-3xl font-bold font-heading">figs</span>
            </div>

            <p className="text-xl text-gray-300 mb-8 font-body">
              empowering your financial future through{" "}
              <em className="text-purple-400">smart investing</em>
            </p>

            <div className="flex justify-center space-x-8 text-gray-400 mb-8 font-heading">
              <a href="#" className="hover:text-purple-400 transition-colors">
                privacy
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                terms
              </a>
              <a
                href="https://wa.me/918368644965"
                target="_blank"
                className="hover:text-purple-400 transition-colors"
              >
                contact
              </a>
            </div>

            <p className="text-gray-500 font-body">
              © 2025 figs. all rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Download Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-md w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h3 className="section-heading text-3xl text-gray-900 mb-6 text-center">
                download <em className="text-purple-600">figs</em>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 font-body"
                  required
                />
                <input
                  type="email"
                  placeholder="email address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 font-body"
                />
                <input
                  type="tel"
                  placeholder="phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 font-body"
                />

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-2xl hover:bg-gray-50 transition-colors font-heading"
                  >
                    cancel
                  </button>
                  <button type="submit" className="flex-1 btn-primary">
                    get app
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
